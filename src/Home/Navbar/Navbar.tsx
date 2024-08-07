import React from "react";
import {GiHamburgerMenu} from "react-icons/gi"
interface NavbarProps {
    sideBar: boolean;
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Navbar:React.FC<NavbarProps>=({sideBar,setSideBar})=>{

    return(

<div className="absolote top-0 right-0 w-full py-2 z-20 text-white">
<div className="container">
<div className="flex justify-between items-center ">
    <h1 data-aos="flip-up" className="font-bold text-4xl">
        White
<span data-aos="flip-up" className="font-normal text-2xl"> Orange</span>
    </h1>
<ul className="lg:flex hidden space-x-4 text-xl gap-7" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
    <li><a className="hover:text-black font-bold" href="#">Home</a></li>
    <li><a className="hover:text-black font-bold" href="#">Services</a></li>
    <li><a className="hover:text-black font-bold" href="#">Contacts</a></li>
    <li><a className="hover:text-black font-bold" href="#">About</a></li>
</ul>
<div onClick={()=>setSideBar(!sideBar)}>
    <GiHamburgerMenu className="text-3xl cursor-pointer " />
</div>
</div>
</div>
</div>   
 )
}

export default Navbar