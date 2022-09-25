import type { ICartItem, ICartPrice } from '../types';

export function parseCookie(
  cookie?: string,
  tokenType: 'access' | 'refresh' = 'access'
) {
  return cookie
    ?.split(';')
    .find((s) => s.includes(tokenType))
    ?.split('=')[1];
}

export function parseQuery(string: string | string[] | undefined) {
  return +(string as string);
}

// product price
export function getOrderTotalPrice(orderItems: ICartItem[]) {
  const { rocketItems, sellerItems } = filteredByType(orderItems);

  const rocketPrice = getPriceOfRocket(rocketItems);
  const sellerPrice = getPriceOf(sellerItems);

  return getTotalPrice(rocketPrice, sellerPrice);
}

/**
 * rocket, seller 타입별로 아이템을 분류합니다.
 */
export function filteredByType(items: ICartItem[]) {
  let rocketItems: ICartItem[] = [];
  let sellerItems: ICartItem[] = [];

  items.forEach((item) =>
    item.product.rocketType !== null
      ? rocketItems.push(item)
      : sellerItems.push(item)
  );

  return { rocketItems, sellerItems };
}
/**
 * 총상품 가격과 배송비를 계산하여 반환합니다.
 */
export function getPriceOf(items: ICartItem[]) {
  const product = items.reduce(
    (sum, { quantity, product }) => quantity * product.salePrice + sum,
    0
  );
  const shipping = items.reduce(
    (sum, { product }) => product.shippinFee + sum,
    0
  );

  return { product, shipping };
}

/**
 * 무료배송 기준을 충족한다면, 무료배송을 적용한 로켓상품 총 가격을 반환합니다.
 */
export function getPriceOfRocket(items: ICartItem[]) {
  const price = getPriceOf(items);
  const shipping = price.product > 19800 ? 0 : price.shipping;
  return { ...price, shipping };
}

export function getTotalPrice(
  rocketPrice: ICartPrice,
  sellerPrice: ICartPrice
) {
  return {
    product: sellerPrice.product + rocketPrice.product,
    shipping: sellerPrice.shipping + rocketPrice.shipping,
  };
}
