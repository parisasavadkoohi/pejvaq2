import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import { useNavigate } from 'react-router-dom';

import imageshop1 from '../../components/assets/images/images4_11zon.png';
import imageshop2 from '../../components/assets/images/images3_11zon.png';
import imageshop3 from '../../components/assets/images/images6_11zon.png';
import imageshop4 from '../../components/assets/images/عینک(1).png';
import imageshop5 from '../../components/assets/images/image2.png';
import imageshop6 from '../../components/assets/images/image2.png';

interface IProduct {
  Id: string;
  Name: string;
  ShortDescription: string;
  Sku: string;
  SeName: string;
  ProductPrice: {
    Price: string;
  };
  DefaultPictureModel: {
    ImageUrl: string;
  };
}

const ProductShop: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);

  // داده‌های استاتیک محصولات
  const products: IProduct[] = [
    {
      Id: "1",
      Name: "محصول ۱",
      ShortDescription: "این یک توضیحات کوتاه برای محصول ۱ است.",
      Sku: "SKU001",
      SeName: "product-1",
      ProductPrice: {
        Price: "100,000 تومان",
      },
      DefaultPictureModel: {
        ImageUrl: imageshop1,
      },
    },
    {
      Id: "3",
      Name: "محصول ۲",
      ShortDescription: "این یک توضیحات کوتاه برای محصول ۲ است.",
      Sku: "SKU002",
      SeName: "product-2",
      ProductPrice: {
        Price: "200,000 تومان",
      },
      DefaultPictureModel: {
        ImageUrl: imageshop3,
      },
    },
    {
      Id: "2",
      Name: "محصول ۲",
      ShortDescription: "این یک توضیحات کوتاه برای محصول ۲ است.",
      Sku: "SKU002",
      SeName: "product-2",
      ProductPrice: {
        Price: "200,000 تومان",
      },
      DefaultPictureModel: {
        ImageUrl: imageshop4,
      },
    },
    {
      Id: "4",
      Name: "محصول ۲",
      ShortDescription: "این یک توضیحات کوتاه برای محصول ۲ است.",
      Sku: "SKU002",
      SeName: "product-2",
      ProductPrice: {
        Price: "200,000 تومان",
      },
      DefaultPictureModel: {
        ImageUrl: imageshop2,
      },
    },
    // سایر محصولات به همین شکل اضافه می‌شوند...
  ];

  return (
    <div className="container mx-auto mt-12 px-4 py-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5" dir="rtl">
      {products.map((product) => (
        <div
          key={product.Id}
          data-aos="fade-up"
          className="border rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
        >
          <div className="md:m-1 pr-19 pl-19 mr-10 ml-10 sm:m-20 p-14 ">
            <img
              src={product.DefaultPictureModel.ImageUrl}
              alt={product.Name}
              className="w-full h-48 justify-between rounded-md content-center bg-transparent border-none cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => navigate(`/ProductDetailPage/${product.Id}`)} // تغییر به استفاده از Id
            />
          </div>
          <h2 className="text-lg font-bold mt-4 mb-2">{product.Name}</h2>
          <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: product.ShortDescription }} />
          <p className="text-sm text-gray-500 mt-2">SKU: {product.Sku}</p>

          <div className="mt-auto">
            <p className="text-lg font-semibold mt-4 mb-2 btn" dir="rtl">{product.ProductPrice.Price}</p>
            <div className="flex justify-around items-center">
              <button
                className="bg-red-200 text-white p-2 rounded-full hover:bg-red-600 transition-colors cursor-pointer img-shadow transform hover:scale-105"
              >
                ❤️
              </button>
              <button
                className="bg-green-200 text-white p-2 rounded-full hover:bg-green-600 transition-colors cursor-pointer img-shadow transform hover:scale-105"
                onClick={() => navigate(`/ProductDetailShop/${product.Id}`)} // تغییر به استفاده از Id
              >
                🛒
              </button>
              <button
                className="bg-green-200 text-white p-2 rounded-full hover:bg-green-600 transition-colors cursor-pointer img-shadow transform hover:scale-105"
                onClick={() => navigate(`/TryOnGlassesPage`)} // Navigate to TryOnGlassesPage
              >
                🕶️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShop;
