import React from "react";
import { useParams } from "react-router-dom";
import "tailwindcss/tailwind.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// همان داده‌های استاتیک که در ProductShop استفاده شده است
const products = [
  {
    Id: "1",
    Name: "محصول ۱",
    ShortDescription: "این یک توضیحات کوتاه برای محصول ۱ است.",
    FullDescription: "این یک توضیحات کامل برای محصول ۱ است.",
    Sku: "SKU001",
    SeName: "product-1",
    ProductPrice: {
      Price: "100,000 تومان",
    },
    DefaultPictureModel: {
      ImageUrl: '/path-to-image1.png',
    },
    PictureModels: [
      {
        ImageUrl: '/path-to-image1.png',
        ThumbImageUrl: '/path-to-image1-thumb.png',
      },
      // تصاویر بیشتر...
    ]
  },
  {
    Id: "2",
    Name: "محصول ۲",
    ShortDescription: "این یک توضیحات کوتاه برای محصول ۲ است.",
    FullDescription: "این یک توضیحات کامل برای محصول ۲ است.",
    Sku: "SKU002",
    SeName: "product-2",
    ProductPrice: {
      Price: "200,000 تومان",
    },
    DefaultPictureModel: {
      ImageUrl: '/path-to-image2.png',
    },
    PictureModels: [
      {
        ImageUrl: '/path-to-image2.png',
        ThumbImageUrl: '/path-to-image2-thumb.png',
      },
      // تصاویر بیشتر...
    ]
  },
  // سایر محصولات...
];

const ProductDetailShop: React.FC = () => {
  const { productId } = useParams<{ productId: string }>(); // دریافت productId از URL
  const product = products.find((p) => p.Id === productId); // پیدا کردن محصول بر اساس Id

  if (!product) {
    return <div>محصولی با این مشخصات یافت نشد</div>;
  }

  const images = product.PictureModels.map((image) => ({
    original: image.ImageUrl,
    thumbnail: image.ThumbImageUrl,
  }));

  return (
    <div className="container mx-auto mt-12 px-4 py-4" dir="rtl">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{product.Name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <ImageGallery items={images} />
          </div>
          <div>
            <p className="text-gray-600 mb-4">{product.FullDescription}</p>
            <p className="text-lg font-semibold mb-4">قیمت: {product.ProductPrice.Price}</p>
            <p className="text-sm text-gray-500 mb-2">SKU: {product.Sku}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailShop;
