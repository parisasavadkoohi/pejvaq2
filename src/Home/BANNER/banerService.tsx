import React from 'react';
import image4 from '../../components/assets/images/بنر رژ.png';
import image5 from '../../components/assets/images/Untitled-1.png';
import image2 from '../../components/assets/images/baner41.png';
import image10 from '../../components/assets/images/Untitled-2.png';
import image11 from '../../components/assets/images/bannermakeup.png';
import image12 from '../../components/assets/images/بنر لوازم آرایشی.png';
import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';

interface Service1 {
    id: number;
    image1: string; 
    
}

const ServiceData1: Service1[] = [
    {
        id: 5,
        image1: image11,
     
    },
    {
        id: 6,
        image1: image12,
     
    },
   
   
]

const BanerService: React.FC = () => {
    let navigate = useNavigate();
    return (
        <Fragment>
            <div className=' '>
                <div className='text-center'>
                   
                </div>
                <div className='grid lg:grid-cols-2 gap-4 sm:flex- place-items-center lg:ml-9 sm:grid-col-1 mr-20'>
                    {ServiceData1.map((item) => (
                        <div key={item.id}  className=' text-center space-y-4'>
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

export default BanerService;
