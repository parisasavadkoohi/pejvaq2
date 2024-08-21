import React, { useEffect, useState, useCallback } from 'react';
import { fetchCategories } from '../apiService';
import { Category } from '../../type/Category';
import iconLipstics from '../assets/icons/iconLipstics.png';

interface IProps {
  storeId: string;
  keyword: string;
  categoryId: string;
  subCategory: boolean;
  clickTree?: boolean;
  tagId?: string;
}

const CategoriesContainer: React.FC<IProps> = ({ storeId, keyword, categoryId, subCategory, clickTree = false, tagId }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const memoizedFetchCategories = useCallback(async () => {
    try {
      const response = await fetchCategories();
      setCategories(response.Categories);
    } catch (err) {
      setError('در بارگذاری دسته‌بندی‌ها خطا رخ داد');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    memoizedFetchCategories();
  }, [memoizedFetchCategories]);

  if (loading) return <div className="text-center text-lg">در حال بارگذاری...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="relative flex flex-row justify-center gap-4 shadow-sm rounded-md overflow-visible p-6">
      {categories.map(category => (
        <div key={category.Id} className="relative group">
          <button
            className="flex items-center justify-center bg-transparent border-none cursor-pointer transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <img src={iconLipstics} alt={category.Name} className="w-16 h-16 border border-orange-200 rounded-full object-contain" />
              <p className="mt-2 text-center text-sm font-medium text-gray-700">{category.Name}</p>
            </div>
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-0  flex-row gap-2 z-50 hidden group-hover:flex whitespace-nowrap transition-all duration-300">
            {category.SubCategories.map(subCategory => (
              <div
                key={subCategory.Id}
                className="text-black font-bold py-2 px-1 rounded-lg transform hover:text-blue-800"
              >
                {subCategory.Name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
