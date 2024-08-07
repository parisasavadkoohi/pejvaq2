export interface IPrice {
  OldPrice: string;
  CatalogPrice: string;
  Price: string;
  PriceWithDiscount?: string;
  DepositPrice?: string;
  StartPrice: string;
  DisableBuyButton: boolean;
  DisableWishlistButton: boolean;
  DisableAddToCompareListButton: boolean;
  OldPriceValue?: number;
  PriceValue?: number;
  DiscountValue?: number;
}
