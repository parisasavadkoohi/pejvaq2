import React, { Fragment, useState } from 'react';
import './index.css';

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './Home/Navbar/Navbar';


import Homepage from './pages/Homepage';
import ProductList from './components/ProductList/ProductList';
import Store from './components/Store/Store';
import Footer from './Home/Footer/Footer';

const App: React.FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);
  // تغییر نوع داده productId به number
  const [productId, setProductId] = useState<number>(1);
  const storeId = 'someStoreId';
  const keyword = 'someKeyword';
  const categoryId = 'someCategoryId';
  const subCategory = true;

  return (

  <Router>
    <Navbar/>
     <Routes>
    
      
      <Route path='/' element={<Homepage/>}/>
      <Route path="/productList" element={<ProductList />} />
      <Route path="/ProductDetailPage/:productId" element={<ProductDetailPage />} />
      <Route path='/Store'  element={<Store/>}  />
   
     </Routes>
  <Footer/>
      </Router>
  );
};

export default App;
