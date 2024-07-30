import React from 'react';
import ShamsiCalendar from './Date/ShamsiCalendar';
import 'tailwindcss/tailwind.css';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">تقویم شمسی رزرو</h1>
      <ShamsiCalendar />
    </div>
  );
};

export default App;