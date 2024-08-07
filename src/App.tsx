import React, { useState } from 'react';
//import ShamsiCalendar from './Date/ShamsiCalendar';
import './index.css';
//import { DayValue } from 'react-modern-calendar-datepicker';
import AppointmentBooking from './Product/AppointmentBooking';
import ProductDetail from './components/ProductDetail';
//import DropdownMenu from './Reservedrop/DropodownMenue';


import Hero from './Home/Hero/Hero';
import Services from './Home/Services/ServicaData';
import WhereToBuy from './Home/Wheretobuy/WhereToBuy';
import AppBanner from './Home/AppBanner/AppBanner';
import Footer from './Home/Footer/Footer';

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

  return (
 
<div className=' grid sm:grid-flow-col-dense w-full overflow-x-hidden'>
<ProductDetail productId={productId}/>
<AppointmentBooking/>
 

</div>
  
  );
};

export default App;