import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { fetchRelatedProducts } from '../../components/apiService';
import { useNavigate } from 'react-router-dom';
import images from '../../components/assets/images/image12.jfif'
interface RelatedProductsProps {
  productId: number;
}

const SliderHome: React.FC<RelatedProductsProps> = ({ productId }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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
    return <div className="text-center text-red-500 ">{error}</div>;
  }

  return (
    <div className="bg-blue-800 lg:p-20  lg:mx-4 lg:my-8 rounded-lg shadow-lg">
      
      <div className="container mx-auto lg:p-2 lg:m-2">
      
        {products.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 35,
              },
            }}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.Id} className="grid justify-center">
                <div className="bg-white border  border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-xs w-full p-2">
                  <img
                    src={"https://back.pejvaq.com" + product.DefaultPictureModel.FullSizeImageUrl}
                    alt={product.DefaultPictureModel.AlternateText || product.Name}
                    className="w-100 h-48 p-2  object-cover content-center justify-between transition-transform duration-300 hover:scale-105 m-5"
                    onClick={() => navigate(`/ProductDetailPage/${product.SeName}`)}
                  />
                  <div className="p-4 text-center bg-white">
                    <h2 className="lg:text-lg sm:text-sm text-black font-semibold mb-2 truncate">{product.Name}</h2>
                    <p className="text-sm font-bold text-black p-3"dir='rtl'>
                      {product.ProductPrice?.Price || 'قیمت موجود نیست'}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500 ">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default SliderHome;
