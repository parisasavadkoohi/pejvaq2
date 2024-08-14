import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios, { AxiosResponse } from "axios";
import { IProduct } from "../interFace/product";

interface ProductDetailProps {
  productId: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  var id = "سایه-oulanao";
  var customerId = "63b947669032e1274c1a0d24";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);

  const get = async (id: string): Promise<AxiosResponse<any>> => {
    return await axios.get<any>(
      `https://back.pejvaq.com/odata/Product/GetProductDetail?key=${id}&customerId=${customerId}`
    );
  };

  const fetchProduct = async () => {
    await get(id)
      .then((response) => setProduct(response.data))
      .catch((error: any) => setError(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

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

  return (
    <div
      className="container max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden p-8"
      data-aos="zoom-in-down"
      dir="rtl"
    >
      <h2 className="text-2xl font-bold mb-4  text-shadow" data-aos="fade-up">
        {product.Name}
      </h2>
      <div className="mb-4 h-100 ">
        <ImageGallery items={images} data-aos="flip-left" />
      </div>
      <div className="text-gray-700 mb-4" data-aos="fade-up">
        <span
          dangerouslySetInnerHTML={{
            __html: product?.ShortDescription || "",
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
          className="text-gray-700 font-serif text-xl"
          dangerouslySetInnerHTML={{
            __html: product?.FullDescription || "",
          }}
          data-aos="flip-left"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
