import { Dispatch, SetStateAction } from 'react';

export type TSorter =
  | 'bestAsc'
  | 'salePriceAsc'
  | 'salePriceDesc'
  | 'saleCountDesc'
  | 'latestAsc';

export interface ISorterState {
  sorter: TSorter;
  setSorter: Dispatch<SetStateAction<TSorter>>;
}

export type TLimit = 12 | 24;

export interface IProductItem {
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
  rocketType: TRocket;
  salePrice: number;
  shippinFee: number;
  weight: number | null;
  wowPrice: number;
}

export type TRocket = 'ROCKET' | 'fresh' | null;
