import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { fetchRelatedProducts } from '../components/apiService';
import { useNavigate } from 'react-router-dom';
interface RelatedProductsProps {
  productId: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  let navigate = useNavigate();
  useEffect(() => {
    const getRelatedProducts = async () => {
      try {
        const data = await fetchRelatedProducts(productId);
        setProducts(data);
      } catch (error) {
        setError('Failed to load related products.');
      } finally {
        setLoading(false);
      }
    };

    getRelatedProducts();
  }, [productId]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {products.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={8}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 12,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.Id}>
              <div className="bg-white img-shadow justify-between w-full rounded-lg shadow-md overflow-hidden hover:border-2 hover:border-orange-500 transition-all duration-300 m-1">
                <img
                  src={"https://back.pejvaq.com" + product.DefaultPictureModel.FullSizeImageUrl}
                  alt={product.DefaultPictureModel.AlternateText || product.Name}
                  className="w-100 h-48 p-2 object-cover content-center justify-between transition-transform duration-300 hover:scale-105 m-3"
                  onClick={() => navigate(`/ProductDetailPage/${product.SeName}`)}/>
                <div className="p-2 text-sm">
                  <h2 className="font-semibold text-gray-800 text-center">{product.Name}</h2>
                  <p className="text-sm font-bold text-black-900 text-center mb-6 mt-2 ">
                    {product.ProductPrice?.Price || 'قیمت موجود نیست'}{/* نمایش قیمت محصول */}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
