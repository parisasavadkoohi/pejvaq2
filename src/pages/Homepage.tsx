import React, {  Fragment, useState } from 'react';



import Services from '../Home/Services/ServiceData';

import WhereToBuy from '../Home/Wheretobuy/WhereToBuy';

import BanerService from '../Home/BANNER/banerService';

import ImageSlider from '../Home/Slider/ImageSlider';
import ProductList from '../components/ProductList/ProductList';
import RelatedProducts from '../components/RelatedProducts';
import SliderHome from '../components/sliderhome/SliderHome';
import BannerServices from '../Home/BANNER/bannerservices';

//id={productId} customerId={customerId}
//<AppBanner/>
const Homepage: React.FC = () => {
  const productId = "your-product-id"; // Replace with the actual product ID
  const customerId = "your-customer-id"; // Replace with the actual customer ID


  return (

 <Fragment>
  <div className='   justify-center w-full'>
  <ImageSlider/>
 
    <Services/>
    <div className='comtainer p-8 m-8'>
  <SliderHome productId={parseInt(productId, 10)}/>

  </div>
   <div className='container pl-24'>
   <BanerService/>
   </div>
   <RelatedProducts  productId={parseInt(productId, 10)} />
   <BannerServices/>
    <WhereToBuy/>
   
 <br/>
 <br/>



 </div>
      </Fragment>
  );
};

export default Homepage;
