import { DebouncedFunc } from 'lodash';

export interface ICartItem {
  id: number;
  quantity: number;
  product: IProduct;
}

export interface IProduct {
  expectedDeliveryDate: string;
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

export interface ICartPrice {
  product: number;
  shipping: number;
}

export type TOnRemove = (id: number) => void;
export type TOnRemoveSelected = () => void;
export type TOnChageQuantity = DebouncedFunc<
  (id: number, quantity: number, option: { onError: () => void }) => void
>;

export type TCartType = 'seller' | 'rocket';
export type TOnSelect = (id: number, checked: boolean) => void;
export type TOnSelectAll = () => void;
export type TIsSelected = (id: number) => boolean | boolean;

export interface ICartItemProps extends ICartSelectProps, ICartContentProps {}

export interface ICartContentProps {
  type: TCartType;
  onRemove: TOnRemove;
  onChangeQuantity: TOnChageQuantity;
}

export interface ICartSelectProps {
  isSelected: TIsSelected;
  onSelect: TOnSelect;
}

export interface ICartSelectAllProps {
  isSelectedAll: boolean;
  onSelectAll: TOnSelectAll;
}
