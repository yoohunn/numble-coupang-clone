import { useGet, useMutate } from '../useRequest';
import { CartService } from '../../services';

export const useGetCart = () => {
  return useGet(['cart'], CartService.getAll);
};

export const useMutateCart = () => {
  const initCart = () => useMutate(['cart'], CartService.init);

  const updateCart = (id: number) =>
    useMutate(['cart', id], () => CartService.update(id));

  const deleteCart = (id: number) =>
    useMutate(['cart', id], () => CartService.delete(id));

  return { initCart, updateCart, deleteCart };
};
