import React from 'react';
import image4 from '../../components/assets/images/image5.png';
import image5 from '../../components/assets/images/image10.png';
import image2 from '../../components/assets/images/image2.png';
import image10 from '../../components/assets/images/image4.png';
import image1 from '../../components/assets/images/b813c6c0f16731e400ee1362ce103accf246bfce_1669110838_11zon.png'
import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';

interface Service {
    id: number;
    image: string; 
    title: string;
    subtitle: string;
    aosDelay: string;
}

const ServiceData: Service[] = [
    {
        id: 1,
        image: image2, 
        title: "رژ لب ",
        subtitle: "قیمت:250000 تومان",
        aosDelay: "500"
    },
    {
        id: 2,
        image: image4,
        title: "سایه چشم",
        subtitle: "قیمت:15000تومان",
        aosDelay: "700"
    },
    {
        id: 3,
        image: image5,
        title: "کرم ضد آفتاب",
        subtitle: "قیمت:50000تومان",
        aosDelay: "800"
    },
    {
        id: 4,
        image: image10,
        title: "ریمل",
        subtitle: "قیمت :400000تومان",
        aosDelay: "900"
    },
    {
        id: 5,
        image: image1,
        title: "کرم آب رسان",
        subtitle: "قیمت :400000تومان",
        aosDelay: "900"
    },
]

const Services: React.FC = () => {
    let navigate = useNavigate();
    return (
        <Fragment>
            <div className='container   m-12'>
                <div className='text-center max-w-lg mx-auto space-y-2'>
                    <h1 data-aos="fade-left" className='text-2xl font-bold text-dark'>
                        Orange <span className='text-orange-500'>محصولات آرایشی و بهداشتی</span>
                        <p data-aos="fade-left" className='text-sm opacity-50 mt-2'></p>
                    </h1>
                </div>
             <div className='grid grid-cols-5 gap-8 sm:flex- place-items-center'>
{ServiceData.map((item) => (
  <div key={item.id} data-aos-delay={item.aosDelay} className='p-4 text-center space-y-4 '>
     <img className='max-w-[100px] mx-auto hover:scale-110 rounded-full transition-transform duration-300 bg-red-400 ' src={item.image} alt={item.title} onClick={() => { navigate("/ProductDetailPage") }}/>
     <h1  className='text-xl font-bold text-orange-400'>{item.title}</h1>
    </div>
))}
</div>
            </div>
        </Fragment>
    );
}

export default Services;
//<div>
         // 
         //<p data-aos="flip-left" className='text-dark opacity-80'>{item.subtitle}</p>
         // <button className="bg-orange-500 rounded-md shadow-orange-100 p-2 hover:bg-orange-600 transition-colors ">
          //   Add to Cart
       //  </button>
    //  </div>