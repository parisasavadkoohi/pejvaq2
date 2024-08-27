import React, { Fragment } from "react";
import ProductList from "../ProductList/ProductList";
import banner from '../../components/assets/images/بنرلوازم ارایش2.png'
import Header from "../Header/Header";
import Breadcrumb from "../../Home/Breadcrumb/Breadcrumb";
import CartPage from "../Cart/CartPage";
const CartStore:React.FC=()=>{
    return(
<Fragment>
    <div>
       <Header/>
       <Breadcrumb/>
    
        <CartPage/>
    </div>
</Fragment>
    )
}


export default CartStore;