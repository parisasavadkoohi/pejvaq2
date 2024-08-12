import axios, { AxiosResponse } from 'axios';
import { IAdvanceSearch, Category } from '../type/Category';

const BASE_URL = 'http://pejvaq.posginger.com/odata/ProductReservation';
const CATEGORY_BASE_URL = 'http://pejvaq.posginger.com/odata/Product/GetAdvancedSearchDD';

const http = axios.create({
  baseURL: CATEGORY_BASE_URL,
});

// Fetch booked dates
export const fetchBookedDates = async (): Promise<string[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/ListReservations?productId=66a9dedce877793cc44eec66`);
    const reservations = response.data.Data;
    const bookedDates = reservations.map((reservation: any) => new Date(reservation.Date).toISOString().split('T')[0]);
    return bookedDates;
  } catch (error) {
    console.error('Error fetching booked dates:', error);
    throw error;
  }
};

// Fetch available times for a specific date
export const fetchAvailableTimes = async (selectedDate: string): Promise<string[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/ListReservations?productId=66a9dedce877793cc44eec66`);
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

    return availableIntervals;
  } catch (error) {
    console.error(`Error fetching available times for date ${selectedDate}:`, error);
    throw error;
  }
};

// Generate all time intervals
const generateAllTimeIntervals = (): string[] => {
  const intervals = [];
  for (let hour = 15; hour < 18; hour++) {
    const startTime = `${hour.toString().padStart(2, '0')}:00`;
    const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
    intervals.push(`${startTime} - ${endTime}`);
  }
  return intervals;
};

// Fetch categories
export const fetchCategories = async (): Promise<{ Categories: Category[] }> => {
  try {
    const response = await http.post('', {
      keyword: '',
      storeId: '647d0b08d8d3b935cc246e64',
      categoryId: '',
      tagId: '',
      adminRoute: false,
      subCategory: true,
      clickTree: true
    });
    return { Categories: response.data.Data };
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getAdvancedSearchDD = async (
  keyword: string,
  storeId: string,
  categoryId: string,
  subCategory: boolean,
  clickTree: boolean,
  tagId?: string
): Promise<AxiosResponse<IAdvanceSearch>> => {
  try {
    return await http.post('', {
      keyword,
      storeId,
      categoryId,
      tagId,
      adminRoute: false,
      subCategory,
      clickTree
    });
  } catch (error) {
    console.error('Error fetching advanced search data:', error);
    throw error;
  }
};
