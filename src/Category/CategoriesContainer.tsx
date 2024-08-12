import React, { useEffect, useState } from 'react';
import { getAdvancedSearchDD } from '../components/apiService';
import { AxiosResponse } from 'axios';
import { IAdvanceSearch, ICategory } from '../type/Category';
import './CategoriesContainer.css';

interface IProps {
  storeId: string;
  keyword: string;
  categoryId: string;
  subCategory: boolean;
  clickTree?: boolean;
  tagId?: string;
}

const CategoriesContainer: React.FC<IProps> = ({ storeId, keyword, categoryId, subCategory, clickTree = false, tagId }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response: AxiosResponse<IAdvanceSearch> = await getAdvancedSearchDD(keyword, storeId, categoryId, subCategory, clickTree, tagId);
        setCategories(response.data.categories);
      } catch (err) {
        setError('در بارگذاری دسته‌بندی‌ها خطا رخ داد');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [keyword, storeId, categoryId, subCategory, clickTree, tagId]);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="categories-container">
      {categories.map(category => (
        <div key={category.id} className="category-button">
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;
