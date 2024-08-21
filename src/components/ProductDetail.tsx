import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios, { AxiosResponse } from "axios";
import { IProduct } from "../interFace/product";


interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false); // State for collapsing description
  const customerId = "63b947669032e1274c1a0d24";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);

  const get = async (id: string): Promise<AxiosResponse<any>> => {
    const url = `https://back.pejvaq.com/odata/Product/GetProductDetail?key=${id}&customerId=${customerId}`;
    return await axios.get<any>(url);
  };

  const fetchProduct = async () => {
    try {
      const response = await get(productId);
      setProduct(response.data);
    } catch (error: any) {
      console.error("Error fetching product:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const images = product.PictureModels.map((image) => ({
    original: "https://back.pejvaq.com" + image.ImageUrl,
    thumbnail: "https://back.pejvaq.com" + image.ThumbImageUrl,
  }));

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="max-w-8xl mx-8 sm:grid-flow-col-dense  bg-white shadow-md rounded-md overflow-hidden p-10"
      data-aos="zoom-in-down"
      dir="rtl"
    >
      <h2 className="text-2xl font-bold mb-4 text-shadow" data-aos="fade-up">
        {product.Name}
      </h2>
      <div className="mb-4 h-50 w-100 p-2 content-center justify-between">
        <ImageGallery items={images} data-aos="flip-left" />
      </div>
      <div className="text-gray-700 justify-between w-full h-24 mb-4" data-aos="fade-up">
        <span
          dangerouslySetInnerHTML={{
            __html: product.ShortDescription || "",
          }}
        />
      </div>
      <h1 className="text-lg font-semibold mb-4" dir="rtl" data-aos="fade-up">
        {product.MetaTitle}
      </h1>
      <div className="text-lg font-semibold mb-4" dir="rtl" data-aos="fade-up">
        قیمت: {product.ProductPrice.Price}
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2" dir="rtl" data-aos="fade-up">
          توضیحات:
        </h3>
        <div
          className={`text-gray-700 font-serif text-xl ${isExpanded ? "max-h-full" : "max-h-20 overflow-hidden"}`}
          dangerouslySetInnerHTML={{
            __html: product.FullDescription || "",
          }}
          data-aos="flip-left"
        />
        <button
          className="text-orange-500 font-bold mt-2"
          onClick={toggleDescription}
        >
          {isExpanded ? "نمایش کمتر" : "ادامه مطلب"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
