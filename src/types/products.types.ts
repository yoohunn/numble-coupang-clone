export type TSorter =
  | 'bestAsc'
  | 'salePriceAsc'
  | 'salePriceDesc'
  | 'saleCountDesc'
  | 'latestAsc';

export interface ISorterState {
  sorter?: string | string[];
  setSorter: (value: TSorter) => void;
}

export type TLimit = 12 | 24;

export interface ILimitState {
  limit: number;
  setLimit: (value: TLimit) => void;
}

export interface IPageState {
  page: number;
  setPage: (value: number) => void;
}

export interface IProductsQuery {
  offset: number;
  page: number;
  limit: TLimit;
  sorter: TSorter;
}

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
