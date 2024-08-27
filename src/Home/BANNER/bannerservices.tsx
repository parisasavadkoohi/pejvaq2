import React from 'react';
import image4 from '../../components/assets/images/بنر رژ.png';
import image5 from '../../components/assets/images/Untitled-1.png';
import image2 from '../../components/assets/images/baner41.png';
import image10 from '../../components/assets/images/Untitled-2.png';

import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';

interface Service1 {
    id: number;
    image1: string; 
    
}

const ServiceData1: Service1[] = [
    
    {
        id: 1,
        image1: image2, 
       
    },
    {
        id: 2,
        image1: image4,
      
    },
    {
        id: 3,
        image1: image5,
     
    },
    {
        id: 4,
        image1: image10,
     
    },
   
]

const BannerServices: React.FC = () => {
    let navigate = useNavigate();
    return (
        <Fragment>
            <div className='container  space-y-3'>
                <div className='text-center  space-y-2'>
                   
                </div>
                <div className='grid grid-cols-2 gap-2 sm:flex- place-items-center'>
                    {ServiceData1.map((item) => (
                        <div key={item.id}  className='p-4 text-center space-y-4'>
                            <img className=' mx-auto hover:scale-110 transition-transform duration-300 rounded-xl'  onClick={() => { navigate("/ProductDetailPage") }} src={item.image1} />
                            <div>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default BannerServices;
