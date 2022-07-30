/** Breadcremble **/

export interface IBreadcremble {}

/** Item **/

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

/** OtherItems **/

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

/** Details **/

export interface IDetails {
  rollbackInterstellar: boolean;
  productId: number;
  itemId: number;
  vendorItemId: number;
  vendorItemCertifications: [];
  returnPolicyVo: {};
  productSellingPoints: [];
  exemption: null;
  essentials: IDetailEssential[];
  details: IDetail[];
  forceHide3pWarningBanner: boolean;
  abTests: {};
}

export interface IDetailEssential {
  title: string;
  description: string;
}

export interface IDetail {
  vendorItemContentDescriptions: IContentDescription[];
}

export interface IContentDescription {
  detailType: string;
  content: string;
  // imageType: boolean;
  // cssClass: string;
}

export interface IDetailTab {
  title: string;
  id: TDetailContentId;
}

export type TDetailContentId =
  | 'item-detail'
  | 'item-review'
  | 'item-inquiry'
  | 'item-announcement';
