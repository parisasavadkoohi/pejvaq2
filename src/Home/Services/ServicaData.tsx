import image4 from '../../assests/image4.jfif';

import image5 from '../../assests/image5.jfif';
import image2 from '../../assests/image2.jfif';
import image10 from '../../assests/image10.jfif';
import { Fragment } from 'react/jsx-runtime';

interface Service {
    id: number;
    image: string; // Assuming image1 is a URL string or a path to the image
    title: string;
    subtitle: string;
    aosDelay: string;
  }

const ServiceData:Service[]=[
    {
        id: 1,
        image: image2, 
        title: "Strawberry",
        subtitle: "Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients.",
        aosDelay: "500"
      },
    {
        id:2,
        image:image4,
        title:"Fruits",
        subtitle:"Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients",
        aosDelay:"700"
    },
    {
        id:3,
        image:image5,
        title:"APPLE",
        subtitle:"Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients",
        aosDelay:"800"
    },
    {
        id:4,
        image:image10,
        title:"ORANGE",
        subtitle:"Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients",
        aosDelay:"900"
    },
]

const Services:React.FC=()=>{
    return(
        <Fragment>
        <div className='container my-16 space-y-4'>
            <div className='text-center max-w-lg mx-auto space-y-2'>
                <h1 data-aos="fade-left" className='text-2xl font-bold text-dark'>
                   Fruits <span className='text-orange-500'>
                   Fresh and delicious
                    </span>
                    <p  data-aos="fade-left" className='text-sm opacity-50 mt-2'>
                    Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients
                    </p>
                </h1>
    

            </div>
            <div className='grid grid-cols-4 place-item-center text-center sm:grid-cols-3 md:grid-cols-4  '>
                {ServiceData.map((item)=>(
                    <div key={item.id}  data-aos-delay={item.aosDelay} className='p-4 text-center space-y-4'>
                        <img  className='max-w-[200px] mx-auto hover:scale-110  rounded-md' src={item.image} alt='fruits'/>
                        <div>
                            <h1 data-aos="flip-left" className='text-2xl font-bold text-orange-400'>{item.title}</h1>
                            <p data-aos="flip-left" className='text-dark  opacity-80'>{item.subtitle}</p>
                            <button  data-aos="fade-up" className="bg-orange-500 rounded-md shadow-orange-100 p-2 hover:bg-orange-600">
Add to Cart
</button>
                        </div>
                        </div>
                ))}
           

        </div>
        </div>
        </Fragment>

    )
}

export default Services



