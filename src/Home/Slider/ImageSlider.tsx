import React from 'react';
import Slider from 'react-slick';
import image1 from '../../components/assets/images/بنر کیف.png';
import image2 from '../../components/assets/images/بنرلوازم ارایش2.png';
import image3 from '../../components/assets/images/بنر لوازم ارایشی3.png';
import image4 from '../../components/assets/images/banner4.png';
const ImageSlider: React.FC = () => {
  const images = [
    image1,
    image2,
    image3,
    image4
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container mx-auto  w-full ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="w-100 h-74 object-cover rounded-lg" />
          </div>
        ))}

      </Slider>
      <div className="balloons-container">
    <div className="balloon balloon1"></div>
    <div className="balloon balloon2"></div>
    <div className="balloon balloon3"></div>
</div>

    </div>
  );
};

export default ImageSlider;
