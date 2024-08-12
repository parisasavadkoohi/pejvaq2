import React, { Fragment, useState } from 'react';
//import ShamsiCalendar from './Date/ShamsiCalendar';
import './index.css';
//import { DayValue } from 'react-modern-calendar-datepicker';
import AppointmentBooking from './Product/AppointmentBooking';
import ProductDetail from './components/ProductDetail';
//import DropdownMenu from './Reservedrop/DropodownMenue';


//import Hero from './Home/Hero/Hero';
//import Services from './Home/Services/ServicaData';
///import WhereToBuy from './Home/Wheretobuy/WhereToBuy';
//import AppBanner from './Home/AppBanner/AppBanner';
//import Footer from './Home/Footer/Footer';
import CategoriesContainer from './Category/CategoriesContainer';

//<Hero/>
//<Services/>
//<WhereToBuy/>
//<AppBanner/>
//<Footer/>

//<DropdownMenu/>
//<AppointmentBooking/>
//<ProductDetail productId={productId}/>
//<AppointmentBooking/>
//<ProductDetail productId={productId}/>
//<ProductDetail productId={1}/>
//<AppointmentBooking/>
//grid sm:grid-flow-col-dense w-full overflow-x-hidden
const App: React.FC = () => {
  
  const [productId, setProductId] = useState<number>(1);
  const storeId = "someStoreId"; // مقدار صحیح وارد کنید
  const keyword = "someKeyword"; // مقدار صحیح وارد کنید
  const categoryId = "someCategoryId"; // مقدار صحیح وارد کنید
  const subCategory = true;

  return (
 <Fragment>

<div className='grid grid-col-reverse gap-4 w-50 p-9'>
<CategoriesContainer 

storeId={storeId}
keyword={keyword}
categoryId={categoryId}
subCategory={subCategory} />
     </div>
     

<div className=' grid sm:grid-flow-col-dense w-full overflow-x-hidden' dir='rtl'>
<ProductDetail productId={productId}/>
<AppointmentBooking/>
 
</div>
</Fragment>
  );
};

export default App;