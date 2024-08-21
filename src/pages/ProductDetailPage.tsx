import React, { Fragment, useState } from 'react';
import Appointment from '../components/Product/AppointmentBooking';
import ProductDetail from '../components/ProductDetail';
import CategoriesContainer from '../components/Category/CategoriesContainer';
import RelatedProducts from '../components/RelatedProducts';
import ShareIcon from '../components/ShareIcon';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import CommentSection from '../components/Comment/CommentSection';
import Breadcrumb from '../Home/Breadcrumb/Breadcrumb';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams(); // استفاده از productId به صورت string یا undefined
  const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false); // کنترل باز و بسته شدن پاپ‌آپ

  if (!productId) {
    return <div>Product not found</div>;
  }

  const storeId = 'someStoreId';
  const keyword = 'someKeyword';
  const categoryId = 'someCategoryId';
  const subCategory = true;

  const toggleCommentPopup = () => {
    setIsCommentPopupOpen(!isCommentPopupOpen); // باز و بسته شدن پاپ‌آپ با کلیک بر روی دکمه
  };

  return (
    <Fragment>
      <div className='w-150 h-20 '>
      <Header/>
      </div>
      <div className=" grid grid-col-reverse gap-5 w-50 p-9 img-shadow ">
        <CategoriesContainer
          storeId={storeId}
          keyword={keyword}
          categoryId={categoryId}
          subCategory={subCategory}
        />
      </div>
      
      <div>
        <Breadcrumb/>
      </div>
      <div className="grid sm:grid-flow-col-dense w-full overflow-x-hidden img-shadow" dir="rtl">
        <div className="flex">
          <ShareIcon />
          <div className="flex-grow max-w-100">
            <ProductDetail productId={productId} />
          </div>
        </div>
        <div className="m-10">
          <Appointment />
        </div>
      </div>
      <div className="app-container mx-auto p-4">
        <h1
          className="text-right p-3 text-3xl font-bold border-b-2 border-gray-500 sm:border-b-4 sm:border-orange-500"
          dir="rtl"
        >
          ثبت دیدگاه‌ها
        </h1>
        <div dir='rtl'>
          <button
            className='border border-gray-500 rounded-sm p-1 m-2 font-semibold text-right'
            dir='rtl'
            onClick={toggleCommentPopup} // رویداد کلیک برای باز کردن پاپ‌آپ
          >
            ثبت دیدگاه
          </button>
        </div>
      </div>
      <div className="app-container mx-auto p-4">
        <h1
          className="text-right p-3 text-3xl font-bold border-b-2 border-gray-500 sm:border-b-4 sm:border-blue-500"
          dir="rtl"
        >
          خدمات مرتبط
        </h1>
        <RelatedProducts productId={parseInt(productId, 10)} />
      </div>

      {/* پاپ‌آپ ثبت دیدگاه */}
      {isCommentPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">ثبت دیدگاه</h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleCommentPopup}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <CommentSection />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetailPage;
