// TimePicker.tsx
import React from 'react';

interface TimeSlot {
  start: string;
  end: string;
}
interface TimePickerProps {
  time: string;
  setTime: (time: string) => void;
  prevStep: () => void;
  nextStep: () => void;
  availableTimes: string[];
}

const TimePicker: React.FC<TimePickerProps> = ({ time, setTime, prevStep, nextStep, availableTimes }) => {
  const isFormValid = () => time !== '';

  return (
    <div>
      <h2 className="text-2xl mb-4">انتخاب ساعت</h2>
      <div className="mb-4">
        {availableTimes.map((slot, index) => (
          <button
            key={index}
            onClick={() => setTime(slot)}
            className="block mb-2 bg-blue-500 text-white p-2 rounded"
          >
            {slot}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-300 text-black p-2 rounded">مرحله قبل</button>
        <button
          onClick={nextStep}
          className={`bg-blue-500 text-white p-2 rounded ${isFormValid() ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isFormValid()}
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default TimePicker;




