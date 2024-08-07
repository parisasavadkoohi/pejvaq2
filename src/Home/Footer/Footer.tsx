import { FaFacebook,FaGoogle,FaInstagram,FaTelegram } from "react-icons/fa"


const Footer:React.FC=()=>{
    return(
       <div className="grid grid-cols-1">
        
        <div className="bg-gradient-to-r flex gap-3 from-orange-600 to-orange-400 pt-12 pb-2 text-white">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                <div className="space-y-6">
                   
                    <h1 className="text-4xl font-bold" >
White Orange
                    </h1>
                    <p className="text-center text-xl sm:px-28 mx-w-[320px]" data-aos="fade-up" data-aos-delay="300" >
                    Fruits and vegetables are one of the four basic food groups that occupy a special place among the nutrients. These groups have a number of benefits that the consumer should recommend to maintain health. Similarly,
                    </p>
                    <div className="text-4xl font-bold">
                       

                       

                    
                    </div>
                  
                    

                    </div>
                    <div className=" grid-cols-2 flex gap-3 ">
                    <h1 className="text-2xl font-bold pb-9   text-center  ">
                            LINKS
                        </h1>
                        <div className="space-y-6 grid grid-cols-2 gap-3 text-center pt-10">
                            <ul className="space-y-6 font-bold ">
                                <li >
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Contacts</a>
                                </li>
                                <li>
                                    <a href="#">AboutUs</a>
                                </li>
                            </ul>
                        </div>
                        <div>

                        </div>
                        <div className="space-y-6 pt-10 pl-9">
                            <ul className="space-y-6 font-bold">
                                <li >
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Contacts</a>
                                </li>
                                <li>
                                    <a href="#">AboutUs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-2xl font-bold pl-5 space-y-5 space-x-10 ">
                            <h1 className="text-center ">
                            accompany us
                            </h1>
                            <div className="text-center text-1xl font-sans">
                                <p className="text-left text-sm" >+983156478998</p>
                                <p className=" text-sm text-left">tehran-azadi</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                                <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
                                <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
                                <FaTelegram className="text-3xl hover:scale-105 duration-300"/>


                            </div>

                        </div>
                        
</div>
        </div>
        </div>
        </div>
        </div>

    )
}
export default Footer