import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const routeNameMap: { [key: string]: string } = {
    '': 'خانه',
    'productList': 'لیست محصولات',
    'ProductDetailPage': 'جزئیات محصول',
    'store': 'فروشگاه'
};

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((item) => item);

  return (
    <nav aria-label="breadcrumb" className="text-right mb-4 font-bold">
      <ol className="list-none p-0 inline-flex">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">خانه</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = routeNameMap[name] || name; // استفاده از نام فارسی یا مسیر اصلی در صورت عدم وجود در نگاشت
          return (
            <li key={name} className="inline-flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{decodeURIComponent(displayName)}</span>
              ) : (
                <Link to={routeTo} className="text-black hover:underline">
                  {decodeURIComponent(displayName)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
