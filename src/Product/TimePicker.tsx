import React from 'react';

interface TimePickerProps {
  time: string;
  setTime: (time: string) => void;
  prevStep: () => void;
  nextStep: () => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ time, setTime, prevStep, nextStep }) => {
  return (
    <div>
      <h2 className="text-2xl mb-4">انتخاب ساعت</h2>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
          مرحله قبل
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
          مرحله بعد
        </button>
      </div>
    </div>
  );
};

export default TimePicker;
