import React from 'react';
import Banner1 from '../../components/assets/images/banner4.png';
import googlePlay from '../../components/assets/images/googlePlay.png';
import sibApp from '../../components/assets/images/sibApp.png';

const AppBanner: React.FC = () => {
    return (
        <div className="relative w-full h-[35vh] sm:h-[50vh] lg:h-[100vh] p-5 overflow-hidden">
            <img
                src={Banner1}
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
          
        </div>
    );
}

export default AppBanner;
//<div className="relative flex flex-col justify-center items-center p-6 sm:p-10 lg:p-20 text-center text-white z-10">
//<h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4">
   
//</h1>
//<p className="hidden sm:block sm:px-28 mb-4" data-aos="fade-up" data-aos-delay="300">
   
//</p>
///<div className="flex flex-col sm:flex-row gap-2">
    //<a href="#">
        //<img className="max-w-[200px] sm:max-w-[120px] rounded" src={googlePlay} alt="Google Play" />
   /// </a>
   // <a href="#">
        //<img className="max-w-[200px] sm:max-w-[120px] rounded" src={sibApp} alt="SIB App" />
    //</a>
//</div>
//</div>