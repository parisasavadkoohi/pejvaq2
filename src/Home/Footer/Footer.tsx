import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";
import imgFooter from '../../components/assets/images/makeupImg2.png';

const Footer: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-red-500 to-red-400 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* First Column */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-center md:text-right">
                            White Orange
                        </h1>
                        <p className="text-center md:text-right text-xl max-w-[320px] mx-auto md:mr-0 md:ml-auto" data-aos="fade-up" data-aos-delay="300">
                            "با محصولات بی‌نظیر ما، زیبایی‌تان را به اوج برسانید! در فروشگاه ما، مجموعه‌ای از بهترین لوازم آرایشی و بهداشتی را با قیمت‌های ویژه پیدا کنید. کیفیت بالا، انتخاب متنوع و تخفیف‌های فوق‌العاده، همه در انتظار شماست. همین حالا خرید کنید و درخشندگی خود را دوچندان کنید!"
                        </p>
                    </div>

                    {/* Second Column */}
                    <div className="space-y-6 text-center md:text-right">
                        <h1 className="text-2xl font-bold">لینک‌ها</h1>
                        <ul className="space-y-5 font-bold">
                            <li>
                                <a href="#">خانه</a>
                            </li>
                            <li>
                                <a href="#">فروشگاه</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                            <li>
                                <a href="#">درباره ما</a>
                            </li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div className="space-y-6 text-center md:text-right">
                        <h1 className="text-2xl font-bold"dir="rtl">شرکت Orange</h1>
                        <div className="text-lg font-sans space-y-2">
                            <p className="text-sm">+983156478998</p>
                            <p className="text-sm">تهران-آزادی</p>
                        </div>
                        <div className="flex justify-center md:justify-end gap-3 pt-4">
                            <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                            <FaGoogle className="text-3xl hover:scale-105 duration-300" />
                            <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                            <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img src={imgFooter} alt="makeup" className="w-[200px] sm:w-[300px] md:w-[400px] img-shadow mt-4 mx-auto md:ml-0 md:mr-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
