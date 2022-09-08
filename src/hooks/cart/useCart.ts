import { useGet, useMutate } from '../useRequest';
import { CartService } from '../../services';

const cartKey = {
  all: ['cart'],
  item: (id: number) => ['cart', 'item', id],
};

export const useGetCart = () =>
  useGet(cartKey['all'], () => CartService.getAll());

export const useMutateCart = () => {
  const initCart = () => useMutate(CartService.init, cartKey['all']);

  const updateCart = (id: number) =>
    useMutate(() => CartService.update(id), cartKey['item'](id));

  const deleteCart = (id: number) =>
    useMutate(() => CartService.delete(id), cartKey['item'](id));

  return { initCart, updateCart, deleteCart };
};
