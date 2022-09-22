import type { ICartItem, ICartPrice } from '../../types';

export const useCartQuery = (cart: ICartItem[], selectedIds: number[]) => {
  const rocketItems = cart.filter((item) => item.product.rocketType !== null);
  const sellerItems = cart.filter((item) => item.product.rocketType === null);

  const rocketPrice = applyRocketDiscount(getPriceOf(rocketItems));
  const sellerPrice = getPriceOf(sellerItems);

  const totalPrice = {
    product: sellerPrice.product + rocketPrice.product,
    shipping: sellerPrice.shipping + rocketPrice.shipping,
  };

  function getPriceOf(items: ICartItem[]) {
    const selected = items.filter((i) => selectedIds.includes(i.id));

    const product = selected.reduce(
      (sum, { quantity, product }) => quantity * product.salePrice + sum,
      0
    );
    const shipping = selected.reduce(
      (sum, { product }) => product.shippinFee + sum,
      0
    );

    return { product, shipping };
  }

  function applyRocketDiscount(price: ICartPrice) {
    const shipping = price.product > 19800 ? 0 : price.shipping;
    return { ...price, shipping };
  }

  return { rocketItems, sellerItems, rocketPrice, sellerPrice, totalPrice };
};
