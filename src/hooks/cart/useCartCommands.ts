import debounce from 'lodash.debounce';
import type { Dispatch, SetStateAction } from 'react';

import { useDeleteCart, useInitCart, useUpdateCart } from './useCartRequest';
import type { ICartItem } from '../../types';

export const useCartCommands = (
  cart: ICartItem[],
  selectedIds: number[],
  setSeletedIds: Dispatch<SetStateAction<number[]>>
) => {
  // cart mutation hook
  const deleteItem = useDeleteCart();
  const initCart = useInitCart();
  const updateQuantity = useUpdateCart();

  // handle cart
  const onRemove = (id: number) => {
    deleteItem(id, {
      onSuccess: () => setSeletedIds((ids) => ids.filter((i) => i !== id)),
      onError: () => window.alert(`삭제하기 실패했어요`),
    });
  };

  const onRemoveSelected = () => selectedIds.forEach((id) => onRemove(id));

  const onChangeQuantity = debounce((id: number, quantity: number, option) => {
    updateQuantity(
      { id, quantity },
      {
        onError: () => {
          window.alert(`재고가 부족합니다.`);
          option.onError();
        },
      }
    );
  }, 500);

  // handle selectedIds
  const isSelected = (id: number) => selectedIds.includes(id);
  const isSelectedAll = selectedIds.length === cart.length;

  const onSelect = (id: number, checked: boolean) => {
    checked
      ? setSeletedIds((ids) => [...ids, id])
      : setSeletedIds((ids) => ids.filter((i) => i !== id));
  };

  const onSelectAll = () => {
    isSelectedAll
      ? setSeletedIds([])
      : setSeletedIds(cart.map((item) => item.id));
  };

  return {
    initCart,
    deleteItem,
    onRemove,
    onRemoveSelected,
    onChangeQuantity,
    onSelect,
    onSelectAll,
    isSelected,
    isSelectedAll,
  };
};
