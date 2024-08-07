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
  //https://back.pejvaq.com/odata/Product/GetProductDetail?key=%D8%B3%D8%A7%DB%8C%D9%87-oulanao&customerId=63b947669032e1274c1a0d24

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);

  const get = async (id: string): Promise<AxiosResponse<any>> => {
    //var CustomerId = getUserId() || SMService.GetItem("currentCustomer");
    return await axios.get<any>(
      `https://back.pejvaq.com/odata/Product/GetProductDetail?key=${id}&customerId=${customerId}`
    );
  };
  const fetchProduct = async () => {
    // try {
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
    original: "https://back.pejvaq.com"+image.ImageUrl,
    thumbnail: "https://back.pejvaq.com"+image.ThumbImageUrl,
  }));

  return (
    <div
      className="container max-w-4xl mx-auto bg-white shadow-md rounded-md overflow-hidden p-8"
      data-aos="zoom-in-down"
      dir="rtl"
    >
      <h2 className="text-2xl font-bold mb-4 text-shadow" data-aos="fade-up">
        {product.Name}
      </h2>
      <div className="mb-4">
        <ImageGallery items={images} data-aos="flip-left" />
      </div>
      <p className="text-gray-700 mb-4" data-aos="fade-up">
  
      </p>
      <h1 className="text-lg font-semibold mb-4" dir="rtl" data-aos="fade-up">
        {product.MetaTitle
        }
      </h1>
      <div className="text-lg font-semibold mb-4" dir="rtl" data-aos="fade-up">
        قیمت: {product.ProductPrice.Price} تومان
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2" dir="rtl" data-aos="fade-up">
          توضیحات:      {product.
FullDescription
}
        </h3>
        <ul className="list-disc list-inside" dir="rtl" data-aos="flip-left">
          <li>
            <strong>کارت بهداشت:</strong> 
            {/* {product.ProductSpecifications.FullDescription} */}
          </li>
          <li>
            <strong>گواهی تخصصی آرایشگری:</strong>{" "}
            {/* {product.ProductSpecifications.dimensions} */}
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;



//<li>
//<strong>نوع سرویس:</strong> {product.specifications.color}
//</li>
//<li>
//<strong>مدت زمان:</strong> {product.specifications.batteryLife}
//</li>