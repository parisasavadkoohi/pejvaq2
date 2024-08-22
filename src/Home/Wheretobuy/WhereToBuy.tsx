import { Fragment } from "react/jsx-runtime";
import WorldMap from '../../components/assets/images/map.png';

const WhereToBuy: React.FC = () => {
    return (
        <Fragment>
            <div className="container my-12 px-4" dir="rtl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h1 className="font-bold text-2xl sm:text-3xl text-dark font-serif">
                            از کجا می توانید محصولات ما را پیدا کنید؟
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <input type="text" placeholder="کشور" className="input-style w-full sm:w-auto lg:w-[120px] border h-9 shadow" />
                    <input type="tel" placeholder="کد پستی" className="input-style w-full sm:w-auto lg:w-[120px] border shadow h-9" />
                    <button className="bg-orange-500 p-1 h-9 rounded-md w-full sm:w-auto">
                        جستجو...
                    </button>
                </div>
                <div className="mt-8 flex justify-center">
                    <img src={WorldMap} alt="world" className="w-full max-w-[300px] sm:max-w-[500px] mx-auto" />
                </div>
            </div>
        </Fragment>
    )
}

export default WhereToBuy;
