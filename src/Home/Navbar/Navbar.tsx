import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrangeImg from '../../components/assets/icons/logonomy-1724336108542_11zon.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrolling, setScrolling] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // state برای نگهداری تعداد آیتم‌ها

  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
      setSearchTerm('');
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      searchRef.current && !searchRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    // دریافت تعداد آیتم‌ها از localStorage
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItemCount(savedCartItems.length);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white shadow-md z-40  ${scrolling ? 'shadow-lg' : ''}`} dir='rtl'>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* لوگو */}
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src={OrangeImg} alt="Logo" />
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8 gap-5 text-right" dir="rtl">
            <Link to="/" className="text-gray-500 hover:text-gray-700 font-bold">خانه</Link>
            <Link to="/store" className="text-gray-500 hover:text-gray-700 font-bold">فروشگاه</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-700 font-bold">درباره ما</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-700 font-bold">تماس با ما</Link>
          </div>
          {/* نوار جستجو برای هر دو حالت */}
          <div className="flex-1 flex items-center justify-center p-3 md:justify-end">
            <form onSubmit={handleSearchSubmit} className="w-full max-w-xs">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="جستجو در فروشگاه پرتقال..."
                className="w-full px-4 pr-2 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </form>
          </div>
          {/* دکمه منو برای نسخه موبایل */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none mr-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* سبد خرید برای هر دو حالت */}
          <div className="relative m-4 mb-1">
            <Link to="/CartPage" className="text-gray-500 hover:text-gray-700 focus:outline-none ml-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Link>
            {/* Badge */}
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* منوی کشویی برای نسخه موبایل */}
      <div ref={menuRef} className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-50 border-t border-gray-200`} dir="rtl">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-bold">خانه</Link>
          <Link to="/store" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-bold">فروشگاه</Link>
          <Link to="/about" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-bold">درباره ما</Link>
          <Link to="/contact" className="block text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-base font-bold">تماس با ما</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
