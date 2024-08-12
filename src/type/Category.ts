
export interface Category {
    Id: string;
    Name: string;
    Color: string; 
    Icon?: string; 
  }
 

export interface IAdvanceSearch {
  categories: ICategory[];

}

export interface ICategory {
  id: string;
  name: string;
 
}
