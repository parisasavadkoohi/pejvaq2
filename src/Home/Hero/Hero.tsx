import React, { useEffect, useState } from "react";
import OrangeImg from "../../assests/OrangeImg.png";
import Navbar from "../Navbar/Navbar";
import {FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
// dir="rtl"برای فارسی نوشتن
import AOS from "aos";
import 'aos/dist/aos.css';
const Hero:React.FC=()=>{
useEffect(()=>{
    AOS.init({
        duration:1000,
        delay:100,
        easing:"ease-in-cubic"
    });
},[]);

const [sideBar,setSideBar]=useState<boolean>(false)


    return(

<main className="md:px-12 md:py-6 bg-orange-700 w-full   ">
    <section  className="relative grid-cols-1  min-h[650px] bg-gradient-to-tr from-orange-700 to-amber-400 w-full md:rounded-xl shadow-md">
        <div className="container  ">
            <Navbar sideBar={sideBar} setSideBar={setSideBar}/>
            <div className="grid flex-col-reverse grid-cols-1 md:grid-cols-2 place-items-center min-h-[650px] ">
                <div className="text-white mt-[100px] md:mt-0 p-4 space-y-6" >
<h1 data-aos="fade-up" className="text-3xl pr-6 md:pr-14" >
   
</h1>

<h1 data-aos="zoom-in-down" className="text-5xl font-bold  text-shadow">
FRUITS</h1>
<p className="text-sm ">
Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients. These groups have a number of benefits that the consumer should recommend to maintain health. Similarly, many of the fruits in individuals' dietary programs are considered the most basic elements of the dietary diet. They have high nutritional value and their presence is essential in every home.
</p>
<button  data-aos="fade-up" className="bg-orange-500 rounded-md shadow-orange-100 p-2 hover:bg-orange-600">
Buy them now
</button>
<h1 data-aos="zoom-in-down" className="text-center text-[90px] sm:text-[120] md:text-[150] xl:text-[120] text:white font-bold absolute buttom-0 w-full  text-shadow img-shadow z-10">
       ORANGE
    </h1>
    {
        sideBar &&
        (
            <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-orange-600 to-amber-400 z-10">
                <div className="w-full h-full flex justify-center items-center ">
                    <div className="text-white flex flex-col justify-center items-center  gap-6">
                    <div className="w-[1px] h-[70px] bg-white"></div>
                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                            <FaFacebookF className="text-2xl" />
                        </div>
                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                            <FaLinkedinIn className="text-2xl"/>
                        </div>
                        <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                            <FaInstagram className="text-2xl"/>
                        </div>
                        
                         
                    </div>
                    </div>
                    
            </div>
        )
    }

<div>

    <img  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"src={OrangeImg} alt="No image" className="relative z-10 flex-row-reverse w-[400px] img-shadow "/>
  
   
</div>

<div>
    
</div>

                </div>

            </div>
        </div>
      
    </section>
</main>
    )

}
export default Hero;