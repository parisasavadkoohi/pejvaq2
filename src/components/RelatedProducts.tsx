import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { fetchRelatedProducts } from '../components/apiService';

interface RelatedProductsProps {
  productId: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
          spaceBetween={10}
          slidesPerView={5} 
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.Id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:border-2 hover:border-orange-500 transition-all duration-300">
                <img
                  src={"https://back.pejvaq.com" + product.DefaultPictureModel.FullSizeImageUrl}
                  alt={product.DefaultPictureModel.AlternateText || product.Name}
                  className="w-full h-35 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-2">
                  <h2 className="text-sm font-semibold text-gray-800 text-center">{product.Name}</h2>
                
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
//<p className="text-xs text-gray-600">{product.ShortDescription}</p>