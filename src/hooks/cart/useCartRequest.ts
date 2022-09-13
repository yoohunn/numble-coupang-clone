import { useQueryData, useMutate } from '../useRequest';
import { CartService } from '../../services';
import type { ICartItem } from '../../types';

export const useGetCart = () => {
  return useQueryData<ICartItem[]>(['cart'], () => CartService.getAll(), {
    initialData: [],
    cacheTime: 500,
  });
};

export const useInitCart = () => {
  return useMutate(() => CartService.init(), ['cart']);
};

export const useDeleteCart = () => {
  return useMutate((id: number) => CartService.delete(id), ['cart']);
};

export const useUpdateCart = () => {
  return useMutate(
    (value: { id: number; quantity: number }) =>
      CartService.update(value.id, value.quantity),
    ['cart']
  );
};
