export interface IOtherItems {
  items: IOtherItem[];
  brandName: string;
  brandShopLink: string;
  claimText: string;
  logoImageUrl: string;
  itemTotal: number;
}

export interface IOtherItem {
  badgeType: 'ROCKET' | null;
  badgeUrl: string;
  imageUrl: string;
  itemId: number;
  link: string;
  productId: number;
  ratingAverage: number;
  ratingCount: number;
  salesPrice: number;
  subscribe: boolean;
  title: string;
  vendorItemId: number;
}

export interface IBreadcremble {}

export interface IDetails {}

export interface IItem {
  images: IImage[];
  ratingAverage: number;
  ratingCount: number;
  itemName: string;
}

export interface IImage {
  detailImage: string;
  origin: string;
  preloadImage: string;
  thumbnailImage: string;
}
