import React, { Fragment } from "react";
import ProductList from "../ProductList/ProductList";
import banner from '../../components/assets/images/بنرلوازم ارایش2.png'
import Header from "../Header/Header";
import Breadcrumb from "../../Home/Breadcrumb/Breadcrumb";
const Store:React.FC=()=>{
    return(
<Fragment>
    <div>
       <Header/>
       <Breadcrumb/>
     <img src={banner} alt="make up" className="p-2 rounded-xl"/>
        <ProductList/>
    </div>
</Fragment>
    )
}


export default Store;