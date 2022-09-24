import type { ICartItem } from '../../types';
import {
  filteredByType,
  getPriceOf,
  getPriceOfRocket,
  getTotalPrice,
} from '../../utils';

export const useCartQuery = (cart: ICartItem[], selectedIds: number[]) => {
  const { rocketItems, sellerItems } = filteredByType(cart);

  const selected = (items: ICartItem[]) =>
    items.filter((i) => selectedIds.includes(i.id));

  const rocketPrice = getPriceOfRocket(selected(rocketItems));
  const sellerPrice = getPriceOf(selected(sellerItems));

  const totalPrice = getTotalPrice(rocketPrice, sellerPrice);

  return { rocketItems, sellerItems, rocketPrice, sellerPrice, totalPrice };
};
