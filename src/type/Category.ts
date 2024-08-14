
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
  Id: string;
  Name: string;
  Description?: string | null;
  
}

export interface IAdvanceSearch {
  Categories: ICategory[];
}
export interface SubCategory {
  Id: string;
  Name: string;
}

export interface Category {
  Id: string;
  Name: string;
  SubCategories: SubCategory[];
}