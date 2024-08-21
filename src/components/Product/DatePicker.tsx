import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import moment from 'moment-jalaali'; // Import moment-jalaali for date conversion

interface CustomDatePickerProps {
  date: string;
  setDate: (date: string) => void;
  nextStep: () => void;
  bookedDates: string[];
  disabledDates: string[];
  availableDates: string[];
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ date, setDate, nextStep, bookedDates, disabledDates, availableDates }) => {
  const [warningMessage, setWarningMessage] = useState<string>('');

  // Convert date to Jalali format
  const toJalaliDate = (date: string) => moment(date, 'YYYY-MM-DD').format('jYYYY-jMM-jDD');
  
  // Convert Jalali date to Gregorian format
  const toGregorianDate = (date: string) => moment(date, 'jYYYY-jMM-jDD').format('YYYY-MM-DD');

  const getDayClassName = (day: DateObject) => {
    const formattedDate = day.format('jYYYY-jMM-jDD'); // Convert to Jalali format
    if (availableDates.includes(formattedDate)) return "bg-green-500 text-white rounded-full";
    return "bg-red-500 text-white rounded-full";
  };

  const mapDays = ({ date }: { date: DateObject }) => {
    const className = getDayClassName(date);
    return {
      className,
    };
  };

  const handleDateChange = (dateObject: DateObject | null) => {
    const selectedDate = dateObject ? dateObject.format('jYYYY-jMM-jDD') : '';
    setDate(selectedDate);

    // Check if selected date is available or not
    if (!availableDates.includes(selectedDate)) {
      setWarningMessage('این تاریخ قبلا رزرو شده است.');
    } else {
      setWarningMessage('');
    }
  };

  const isFormValid = () => date !== '' && warningMessage === '';

  return (
    <div>
      <h2 className="text-2xl mb-4">انتخاب تاریخ</h2>
      <DatePicker
        value={date ? new DateObject({ date, format: 'jYYYY-jMM-jDD', calendar: persian, locale: persian_fa }) : null}
        onChange={handleDateChange}
        calendar={persian}
        locale={persian_fa}
        inputClass="border p-2 mb-4 w-full"
        className="mb-4"
        mapDays={mapDays}
        render={(value: string, openCalendar: () => void, handleValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void) => (
          <div onClick={openCalendar} className="relative">
            <input
              type="text"
              value={value}
              onChange={handleValueChange}
              className="border p-2 w-full"
              placeholder="انتخاب تاریخ"
            />
            <div className="absolute top-0 right-0 p-2 cursor-pointer" onClick={openCalendar}>
              {/* Add your custom calendar icon or button */}
            </div>
          </div>
        )}
      />
      {warningMessage && <div className="text-red-500 mb-4">{warningMessage}</div>}
      <button
        onClick={nextStep}
        className={`bg-blue-500 text-white p-2 rounded ${isFormValid() ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isFormValid()}
      >
        مرحله بعد
      </button>
    </div>
  );
};

export default CustomDatePicker;
