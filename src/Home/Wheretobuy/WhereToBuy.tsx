import { Fragment } from "react/jsx-runtime"
import WorldMap from '../../components/assets/images/map.png';


const WhereToBuy:React.FC=()=>{
    return(
        <Fragment>
            <div className="container my-36 " dir="rtl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8  ">
                    <div>
                        <h1 data-aos="flip-left" className="font-bold text-3xl text-dark font-serif">از کجا می توانید محصولات ما را پیدا کنید؟</h1>
                    </div>

                </div>
                <div className="flex item-center gap-4">
                    <input type="text" placeholder="کشور" className="input-style w-full lg:w-[120px] border h-9 shadow "/>
                    <input type="tel" placeholder="کد پستی" className="input-style w-full lg:w-[120px] border shadow h-9"/>
                    <button className="bg-orange-500 p-1 mt-2 h-9 rounded-md">
جستجو...
                </button>
                    <div >
                    <img data-aos="flip-left" src={WorldMap} alt="world" className="w-100 sm:w-[500px] mx-20  "/>
                    </div>
          
                </div>
    
              
               
                
                
            </div>
            
        </Fragment>

    )
}

export default WhereToBuy 