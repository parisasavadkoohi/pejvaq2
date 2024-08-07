import React from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

interface CustomDatePickerProps {
  date: string;
  setDate: (date: string) => void;
  nextStep: () => void;
  bookedDates: string[];
  disabledDates: string[];
  availableDates: string[];
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ date, setDate, nextStep, bookedDates, disabledDates, availableDates }) => {
  const getDayClassName = (day: DateObject) => {
    const formattedDate = day.format('YYYY-MM-DD');
    if (bookedDates.includes(formattedDate)) return "bg-green-500 text-white rounded-full";
    return "";
  };

  const renderDay = (day: DateObject) => {
    const className = getDayClassName(day);
    return (
      <span className={`relative ${className}`}>
        {day.format('D')}
        {className && <span className={className}></span>}
      </span>
    );
  };

  const isFormValid = () => date !== '';

  return (
    <div>
      <h2 className="text-2xl mb-4">انتخاب تاریخ</h2>
      <DatePicker
        value={date ? new DateObject({ date, format: 'YYYY-MM-DD', calendar: persian, locale: persian_fa }) : null}
        onChange={(dateObject) => setDate(dateObject ? dateObject.format('YYYY-MM-DD') : '')}
        calendar={persian}
        locale={persian_fa}
        inputClass="border p-2 mb-4 w-full"
        className="mb-4"
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
