import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomDatePicker from './CustomDatePicker';
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
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  const fetchBookedDates = async () => {
    try {
      const response = await axios.post('http://pejvaq.posginger.com/odata/ProductReservation/ListReservations?productId=66a9dedce877793cc44eec66');
      const reservations = response.data.Data;
      const bookedDates = reservations.map((reservation: any) => new Date(reservation.Date).toISOString().split('T')[0]);

      setBookedDates(bookedDates);
      setDisabledDates(bookedDates);

      const allDates = generateAvailableDates(bookedDates);
      setAvailableDates(allDates);

      if (allDates.length > 0) {
        setDate(allDates[0]); // Select the first available date
      }

    } catch (error) {
      console.error('Error fetching booked dates:', error);
      alert('مشکلی در دریافت اطلاعات رزروها وجود دارد. لطفاً مجدداً تلاش کنید.');
    }
  };

  const generateAvailableDates = (bookedDates: string[]): string[] => {
    const availableDates: string[] = [];
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + 30);

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      const date = new Date(d).toISOString().split('T')[0];
      if (!bookedDates.includes(date)) {
        availableDates.push(date);
      }
    }
    return availableDates;
  };

  const generateAllTimeIntervals = (): string[] => {
    const intervals = [];
    for (let hour = 15; hour < 18; hour++) {
      const startTime = `${hour.toString().padStart(2, '0')}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
      intervals.push(`${startTime} تا ${endTime}`);
    }
    return intervals;
  };

  const fetchAvailableTimes = async (selectedDate: string) => {
    try {
      const response = await axios.post(`http://pejvaq.posginger.com/odata/ProductReservation/ListReservations?productId=66a9dedce877793cc44eec66`);
      const reservations = response.data.Data;
      const reservedIntervals = reservations
        .filter((reservation: any) => reservation.Date.startsWith(selectedDate))
        .map((reservation: any) => {
          const startTime = new Date(reservation.Date).toISOString().split('T')[1].substring(0, 5);
          const endTime = `${(parseInt(startTime.split(':')[0]) + 1).toString().padStart(2, '0')}:00`;
          return `${startTime} تا ${endTime}`;
        });

      const allTimeIntervals = generateAllTimeIntervals();
      const availableIntervals = allTimeIntervals.filter((interval) => !reservedIntervals.includes(interval));

      setAvailableTimes(availableIntervals);

    } catch (error) {
      console.error(`Error fetching available times for date ${selectedDate}:`, error);
      setAvailableTimes([]); // Reset available times on error
    }
  };

  useEffect(() => {
    fetchBookedDates();
  }, []);

  useEffect(() => {
    if (date) {
      fetchAvailableTimes(date);
    }
  }, [date]);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFinalConfirmation = () => {
    alert('رزرو شما با موفقیت ثبت شد');
    setActiveIndex(null); // Reset the accordion
  };

  return (
    <div className="space-y-4 border-white shadow-orange-800 img-shadow pt-9 p-8">
      <div>
        <button className="w-full hover:text-white bg-orange-500 rounded-xl font-bold text-right p-4" onClick={() => toggleIndex(0)}>
          انتخاب تاریخ
        </button>
        {activeIndex === 0 && (
          <div className="p-4 border pt-9 font-serif text-right border-gray-200">
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
        <button className="w-full hover:text-white bg-orange-500 border-white rounded-xl font-bold text-right p-4" onClick={() => toggleIndex(1)}>
          انتخاب ساعت
        </button>
        {activeIndex === 1 && (
          <div className="p-4 border text-right font-serif border-gray-200">
            <TimePicker
              time={time}
              setTime={setTime}
              prevStep={() => setActiveIndex(0)}
              nextStep={() => setActiveIndex(2)}
              availableTimes={availableTimes} // Pass available times from API
            />
          </div>
        )}
      </div>

      <div>
        <button className="w-full font-bold hover:text-white bg-orange-500 rounded-xl text-right p-4" onClick={() => toggleIndex(2)}>
          اطلاعات مشتری
        </button>
        {activeIndex === 2 && (
          <div className="p-5 border text-right font-serif border-gray-300">
            <CustomerInfo
              customerInfo={customerInfo}
              setCustomerInfo={setCustomerInfo}
              prevStep={() => setActiveIndex(1)}
              nextStep={() => setActiveIndex(3)} // Move to confirmation step
            />
          </div>
        )}
      </div>

      {/* Confirmation Step */}
      <div>
        <button className="w-full font-bold hover:text-white bg-orange-500 rounded-xl text-right p-4" onClick={() => toggleIndex(3)}>
          تأیید نهایی
        </button>
        {activeIndex === 3 && (
          <div className="p-5 border text-right font-serif border-gray-300">
            <h3 className="font-bold mb-2">لطفاً اطلاعات زیر را تأیید کنید:</h3>
            <p><strong>نام:</strong> {customerInfo.name}</p>
            <p><strong>تلفن:</strong> {customerInfo.tel}</p>
            <p><strong>تاریخ انتخاب شده:</strong> {date}</p>
            <p><strong>ساعت انتخاب شده:</strong> {time}</p>
            <button className="mt-4 w-full bg-green-500 text-white font-bold rounded-lg p-2" onClick={handleFinalConfirmation}>
              تأیید و ثبت نهایی
            </button>
            <button className="mt-2 w-full bg-red-500 text-white font-bold rounded-lg p-2" onClick={() => setActiveIndex(2)}>
              بازگشت به مرحله قبل
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
