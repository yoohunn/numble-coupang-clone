import { ICartItem } from './cart.types';

export interface IBuyer {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface IAddress {
  id: number;
  receiver: string;
  phoneNumber: string;
  base: string;
  detail: string;
  isFreshAvailable: boolean;
  isWowAAvailable: boolean;
}

export interface Product {
  name: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  id: number;
  rocketType?: any;
  weight?: any;
  salePrice: number;
  wowPrice: number;
  shippinFee: number;
  isRecommended: boolean;
  isMdRecommended: boolean;
  isSoldout: boolean;
  maxPoint: number;
  expectedDeliveryDate: string;
  isAssured: boolean;
  isEarlyDelivery: boolean;
}

export interface IOrderItem {
  product: Product;
  quantity: number;
}

export interface IOrdersheet {
  buyer: IBuyer;
  coupons: any[];
  coupangCash: number;
  coupayMoney: number;
  address: IAddress;
  orderItems: ICartItem[];
}

//
export type TPayMethod = 'mobile' | 'coupaymoney';
export type TMobileCarrier = 'skt' | 'kt' | 'hello' | 'kct' | '';

export interface IOrderData {
  usedCash: number;
  payMethod: TPayMethod;
  /** 'mobile' 결제에서 필수입니다. */
  mobileCarrier?: TMobileCarrier;
}

export interface IPaymentData extends IOrderData {
  ordersheetId: number;
  addressId: number;
  /** 'coupaymoney' 결제에서 필수입니다. */
  usedCoupaymoney?: number;
}

export type TOnChangePayMethod = (
  changed: Omit<IOrderData, 'usedCash'>
) => void;

export type TUpdateOrderData = <Key extends keyof IOrderData>(
  key: Key,
  value: IOrderData[Key]
) => void;
