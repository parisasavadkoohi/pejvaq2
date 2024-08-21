import React from 'react';

interface ConfirmationProps {
  date: string;
  time: string;
  customerInfo: { name: string; tel: string };
  prevStep: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ date, time, customerInfo, prevStep }) => {
  const handleSubmit = () => {
    // Submit the booking information
    console.log('Booking confirmed:', { date, time, customerInfo });
    alert('رزرو با موفقیت ثبت شد!');
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">تأیید نهایی</h2>
      <p>تاریخ: {date}</p>
      <p>ساعت: {time}</p>
      <p>نام: {customerInfo.name}</p>
      <p>شماره تماس: {customerInfo.tel}</p>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
          مرحله قبل
        </button>
        <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded">
          ثبت نهایی
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
