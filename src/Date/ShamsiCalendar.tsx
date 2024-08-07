import React, { useState, useEffect } from 'react';
import { Calendar, utils, DayValue } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

interface Reservation {
  id: number;
  date: string;
  time: string;
  name: string;
}

interface CustomDay {
  year: number;
  month: number;
  day: number;
  className: string;
}

interface ShamsiCalendarProps {
  onSelectDate: (date: DayValue) => void;
}

const ShamsiCalendar: React.FC<ShamsiCalendarProps> = ({ onSelectDate }) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayValue>(utils('fa').getToday());
  const [customDaysClassName, setCustomDaysClassName] = useState<CustomDay[]>([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    if (reservations.length > 0) {
      generateCustomDays();
    }
  }, [reservations]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/reservations');
      setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  const formatSelectedDay = (day: DayValue) => {
    if (!day) return '';
    return `${day.year}-${day.month.toString().padStart(2, '0')}-${day.day.toString().padStart(2, '0')}`;
  };

  const generateCustomDays = () => {
    const customDays: CustomDay[] = reservations.map((reservation) => {
      const [year, month, day] = reservation.date.split('-').map(Number);
      return {
        year,
        month,
        day,
        className: 'reserved'
      };
    });

    const allDays: CustomDay[] = [];
    for (let i = 1; i <= 31; i++) {
      allDays.push({
        year: selectedDay?.year || utils('fa').getToday().year,
        month: selectedDay?.month || utils('fa').getToday().month,
        day: i,
        className: customDays.some(d => d.day === i) ? 'reserved' : 'available'
      });
    }

    setCustomDaysClassName(allDays);
  };

  const handleDaySelect = (day: DayValue) => {
    setSelectedDay(day);
    onSelectDate(day);
  };

  const filteredReservations = reservations.filter(
    (reservation) => reservation.date === formatSelectedDay(selectedDay)
  );

  return (
    <div className="p-4 justify-center">
      <div className="mb-4">
        <Calendar
          value={selectedDay}
          onChange={handleDaySelect}
          shouldHighlightWeekends
          locale="fa"
          customDaysClassName={customDaysClassName}
        />
      </div>
      <div className="border p-4">
        <h2 className="text-lg font-bold mb-2">
          رزروها برای {formatSelectedDay(selectedDay)}
        </h2>
        {filteredReservations.length > 0 ? (
          filteredReservations.map((reservation) => (
            <div key={reservation.id} className="text-sm mb-1">
              {reservation.name}
            </div>
          ))
        ) : (
          <div>رزروی برای این تاریخ وجود ندارد.</div>
        )}
      </div>
      <div className="mt-4 p-4 border-t">
        <h3 className="text-md font-semibold"></h3>
        <div className="flex items-center mb-1">
          <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
          <p className="text-sm">رزرو شده</p>
        </div>
        <div className="flex items-center mb-1">
          <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
          <p className="text-sm">قابل رزرو</p>
        </div>
        <div className="flex items-center mb-1">
          <span className="w-4 h-4 rounded-full bg-gray-500 mr-2"></span>
          <p className="text-sm">غیر فعال</p>
        </div>
      </div>
    </div>
  );
};

export default ShamsiCalendar;
