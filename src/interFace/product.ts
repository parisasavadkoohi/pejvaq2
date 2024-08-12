
import { IPicture } from "./picture";
import { IPrice } from "./price";


export interface IProduct {
  Id: string;
  Name: string;
  ShortDescription: string;
  FullDescription: string;
  ProductType: 15;
  SeName: string;
  MetaDescription: string;
  MetaTitle: string;
  MetaKeywords: string;
  Sku: string;
  Flag: string;
  MarkAsNew: boolean;
  IsFreeShipping: boolean;
  ShowSku: boolean;
  ShowQty: boolean;
  Published: boolean;
  AllowCustomerReviews: boolean;
  IncludeInTopMenu: boolean;
  ShowOnHomePage: boolean;
  DisplayOrder: number;
  PictureId: string;
  DefaultPictureModel: IPicture;
  PictureModels: IPicture[];
  SecondPictureModel: IPicture;
  ProductPrice: IPrice;
  CountryName: string;
  CountryCode: string;
  ItemProvince: string;
  UnitName: string;
  Weight?: Number;
  //Pictures: IProductPicture[];
  Price: number;
 // ProductSpecifications?: ISpecificationAttribute[];
  //ProductAttributes?: IProductAttribute[];
  StoreId?: string;
 // ProductReviewOverview?: IProductReviewOverview;
  StockAvailability: string;
  MaximumQuantityCanBeAdded: number;
  StoreName: string;
  StockQuantity: number;
  Stores: string[];
  IsNeedInquiry: boolean;
  InstagramCode: string;
  //ManageInventoryMethod: ManageInventoryMethod;
  DisplayStockAvailability: boolean;
  ProductTags?: string[];
}
