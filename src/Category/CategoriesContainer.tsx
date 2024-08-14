// ../Category/CategoriesContainer.tsx

import React, { useEffect, useState, useCallback } from 'react';
import { fetchCategories } from '../components/apiService';
import { Category } from '../type/Category';
import iconLipstics from '../assests/icons/iconLipstics.png'
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
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const iconMapping: Record<string, string> = {
    "آرایشی": "icon lipstics.png",
    "آرایشی وبهداشتی":"cleaner.png",


  };

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

  const handleCategoryClick = (categoryId: string) => {
    setExpandedCategory(prev => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="flex flex-row justify-center gap-4  shadow-sm rounded-md overflow-hidden  p-6">
      {categories.map(category => (
        <div key={category.Id} className="relative">
          <button
            onClick={() => handleCategoryClick(category.Id)}
            className="flex items-center justify-center bg-transparent border-none cursor-pointer transition-transform transform hover:scale-105"
          > <div key={category.Id} className="flex flex-col items-center">
          <img src={iconLipstics} alt={category.Name} className="w-16 h-16 border  border-orange-200 rounded-full object-contain " />
          <p className="mt-2 text-center text-sm font-medium text-gray-700">{category.Name}</p>
        </div>
          </button>
          {expandedCategory === category.Id && category.SubCategories.length > 0 && (
            <div className="mt-4">
              {category.SubCategories.map(subCategory => (
                <div
                  key={subCategory.Id}
                  className=" text-black font-bold py-2 px-4 mb-2 rounded-xl  transform skew-x-[-10deg] inline-block hover:text-blue-800 "dir='rtl'
                >
                  {subCategory.Name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
