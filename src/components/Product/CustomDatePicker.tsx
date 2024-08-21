import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';

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

  const getDayClassName = (day: DateObject) => {
    const formattedDate = day.format('YYYY-MM-DD');

    if (disabledDates.includes(formattedDate)) {
      return "bg-gray-500 text-white rounded-full opacity-50 cursor-not-allowed";
    }
    if (availableDates.includes(formattedDate)) {
      return "bg-green-500 text-white rounded-full";
    }
    if (bookedDates.includes(formattedDate)) {
      return "bg-red-500 text-white rounded-full";
    }

    return "";
  };

  const mapDays = ({ date }: { date: DateObject }) => {
    const className = getDayClassName(date);
    const isDisabled = disabledDates.includes(date.format('YYYY-MM-DD'));

    return {
      className,
      disabled: isDisabled,
    };
  };

  const handleDateChange = (dateObject: DateObject | null) => {
    const selectedDate = dateObject ? dateObject.format('YYYY-MM-DD') : '';
    setDate(selectedDate);

    if (bookedDates.includes(selectedDate)) {
      setWarningMessage('This date is already booked.');
    } else {
      setWarningMessage('');
    }
  };

  const isFormValid = () => date !== '' && warningMessage === '';

  return (
    <div>
      <h2 className="text-2xl mb-4">انتخاب تاریخ</h2>
      <DatePicker
        value={date ? new DateObject({ date, format: 'YYYY-MM-DD' }) : null}
        onChange={handleDateChange}
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
              placeholder="Select Date"
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
