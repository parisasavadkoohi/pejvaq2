
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import CustomDatePicker from './DatePicker';
import TimePicker from './TimePicker';
import CustomerInfo from './CustomerInfo';

interface CustomerInfoType {
  name: string;
  tel: string;
}

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfoType>({ name: '', tel: '' });
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [disabledDates, setDisabledDates] = useState<string[]>([]);
  const [availableDates, setAvailableDates] = useState<string[]>([]);
 
  const fetchBookedDates = async () => {
    try {
      const response = await get();
      const bookedDates = response.data.Data.map((reservation: any) => reservation.Date);
      setBookedDates(bookedDates);
      setDate(bookedDates[0]);
      console.log(date);

    } catch (error) {
      console.error('Error fetching booked dates:', error);
    }
  };
  const get = async (): Promise<AxiosResponse<any>> => {
    //var CustomerId = getUserId() || SMService.GetItem("currentCustomer");
    return await axios.post<any>(
      'http://pejvaq.posginger.com/odata/ProductReservation/ListReservations?productId=66a9dedce877793cc44eec66'

    );
  };

  useEffect(() => {
   
    fetchBookedDates();
  }, []);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 img-shadow p-9 mt-9 rounded-lg">
      <div>
        <button className="w-full text-white bg-orange-400 font-bold text-right p-4" onClick={() => toggleIndex(0)}>
          انتخاب تاریخ
        </button>
        {activeIndex === 0 && (
          <div className="p-4 border text-white text-right rounded-xl border-gray-200">
            <CustomDatePicker
              date={date}
              setDate={setDate}
              nextStep={() => setActiveIndex(1)}
              bookedDates={bookedDates}
              disabledDates={disabledDates}
              availableDates={availableDates}
            />
          </div>
        )}
      </div>

      <div>
        <button className="w-full bg-orange-400 text-white font-bold text-right p-4" onClick={() => toggleIndex(1)}>
          انتخاب ساعت
        </button>
        {activeIndex === 1 && (
          <div className="p-4 border  text-right border-gray-200">
            <TimePicker
              time={time}
              setTime={setTime}
              prevStep={() => setActiveIndex(0)}
              nextStep={() => setActiveIndex(2)}
            />
          </div>
        )}
      </div>

      <div>
        <button className="w-full bg-orange-400 text-white font-bold text-right p-4" onClick={() => toggleIndex(2)}>
          اطلاعات مشتری
        </button>
        {activeIndex === 2 && (
          <div className="p-4 border border-gray-200 text-white text-right">
            <CustomerInfo
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
              prevStep={() => setActiveIndex(1)}
              nextStep={() => {
                alert('رزرو شما با موفقیت ثبت شد');
                setActiveIndex(null);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
