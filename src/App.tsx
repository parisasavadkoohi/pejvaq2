import React, { Fragment, useState } from 'react';
import './index.css';
import AppointmentBooking from './Product/AppointmentBooking';
import ProductDetail from './components/ProductDetail';
import CategoriesContainer from './Category/CategoriesContainer';
import RelatedProducts from './components/RelatedProducts';

const App: React.FC = () => {
  // تغییر نوع داده productId به number
  const [productId, setProductId] = useState<number>(1);
  const storeId = 'someStoreId';
  const keyword = 'someKeyword';
  const categoryId = 'someCategoryId';
  const subCategory = true;

  return (
    <Fragment>
      <div className="grid grid-col-reverse gap-4 w-50 p-9 img-shadow">
        <CategoriesContainer
          storeId={storeId}
          keyword={keyword}
          categoryId={categoryId}
          subCategory={subCategory}
        />
      </div>

      <div className="grid sm:grid-flow-col-dense w-full overflow-x-hidden img-shadow" dir="rtl">
        <ProductDetail productId={productId} />
        <AppointmentBooking />
      </div>

      <div className="app-container mx-auto p-4">
        <h1 className="text-center text-3xl font-bold mb-8">خدمات مرتبط</h1>
        <RelatedProducts productId={productId} />
      </div>
    </Fragment>
  );
};

export default App;
