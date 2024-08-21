import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import './ProductList.css';
import { useNavigate } from 'react-router-dom';
import { IProduct } from "../../interFace/product";

interface PictureModel {
  ImageUrl: string | null;
  ThumbImageUrl: string | null;
  FullSizeImageUrl: string | null;
}



const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  let navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);

  const fetchProducts = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        "https://back.pejvaq.com/odata/Product/Search?keywords=&storeId=65e70c2a2c455ed1127d8492&pageNumber=1&pageSize=10&searchSku=false"
      );

      if (response.data && response.data.Data && response.data.Data.Products && Array.isArray(response.data.Data.Products)) {
        setProducts(response.data.Data.Products);
      } else {
        throw new Error("Unexpected data format");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-20">Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center mt-20">No products found</div>;
  }

  return (
    
    <div className="container mx-auto mt-12 px-4 py-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5" dir="rtl">
      {products.map((product) => (
        <div
          key={product.Id}
          data-aos="fade-up"
          className="border rounded-lg p-4  hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
        >
          <div className="md:m-1 pr-19 pl-19 mr-10 ml-10 sm:m-20 p-14 ">
          <img
            src={`https://back.pejvaq.com${product.DefaultPictureModel.ImageUrl}`}
            alt={product.Name}
            className="w-full h-48 justify-between rounded-md content-center  bg-transparent border-none cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => navigate(`/ProductDetailPage/${product.SeName}`)} />
            </div>
          <h2 className="text-lg font-bold mt-4 mb-2">{product.Name}</h2>
          <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: product.ShortDescription }} />
          <p className="text-sm text-gray-500 mt-2">SKU: {product.Sku}</p>

          <div className="mt-auto ">
            <p className="text-lg font-semibold mt-4 mb-2 btn" dir="rtl">{product.ProductPrice.Price}</p>
            <div className="flex justify-around items-center ">
              <button
                className="bg-red-200 text-white p-2 rounded-full hover:bg-red-600 transition-colors cursor-pointer img-shadow transform hover:scale-105"
              
              >
                ❤️
              </button>
              <button
                className="bg-green-200 text-white p-2 rounded-full hover:bg-green-600 transition-colors cursor-pointer img-shadow transform hover:scale-105"
                onClick={() => navigate(`/ProductDetailPage/${product.SeName}`)} 
              >
                🛒
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
