import React from 'react';

interface CustomerInfoProps {
  customerInfo: { name: string; tel: string };
  setCustomerInfo: (info: { name: string; tel: string }) => void;
  prevStep: () => void;
  nextStep: () => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ customerInfo, setCustomerInfo, prevStep, nextStep }) => {
  return (
    <div>
      <h2 className="text-2xl mb-4">اطلاعات مشتری</h2>
      <input
        type="text"
        placeholder="نام"
        value={customerInfo.name}
        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
        className="border p-2 mb-4 w-full"
        required />
      <input
        type="tel"
        placeholder="شماره تماس"
        value={customerInfo.tel}
        onChange={(e) => setCustomerInfo({ ...customerInfo, tel: e.target.value })}
        className="border p-2 mb-4 w-full"
        required />
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">
          مرحله قبل
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">
           ثبت نهایی
        </button>
      </div>
    </div>
  );
};

export default CustomerInfo;

