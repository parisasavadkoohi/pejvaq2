import React, { Fragment } from "react";

import StorePage from "../components/ProductList/ProductList";
import ProductList from "../components/ProductList/ProductList";

//id={productId} customerId={customerId}
const ProductListPage:React.FC=()=>{

    const productId = "your-product-id"; 
    const customerId = "your-customer-id";
  
  
    return(
        <Fragment>
<ProductList/>
        </Fragment>

    )
}
export default ProductListPage;