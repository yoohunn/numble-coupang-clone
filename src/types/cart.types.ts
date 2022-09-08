export interface ICartItem {
  id: number;
  quantity: number;
  product: IProduct;
}

export interface IProduct {
  expectedDeliveryDate: Date;
  id: number;
  imageUrl: string;
  isAssured: boolean;
  isEarlyDelivery: boolean;
  isMdRecommended: boolean;
  isRecommended: boolean;
  isSoldout: boolean;
  maxPoint: number;
  name: string;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  rocketType: null | string;
  salePrice: number;
  shippinFee: number;
  weight: number | null;
  wowPrice: number;
}
