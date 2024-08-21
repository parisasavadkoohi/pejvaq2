import React, { useState } from 'react';
import { FaShareAlt, FaTelegramPlane, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';

const ShareIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    switch (platform) {
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${url}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${url}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, '_blank');
  };

  const handleFavorite = () => {
    alert("Added to favorites!");
  };

  return (
    <div className="relative p-1 inline-block z-20 w-4">
      
      <div
        className="cursor-pointer p-2 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaShareAlt size={25} className="text-gray-600 hover:text-orange-900 transition" />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2 flex flex-col items-center space-y-2">
          <button
            className="flex items-center p-2"
            onClick={() => handleShare('telegram')}
          >
            <FaTelegramPlane size={24} className="text-gray-600 hover:text-blue-700 transition" />
          </button>
          <button
            className="flex items-center p-2"
            onClick={() => handleShare('instagram')}
          >
            <FaInstagram size={24} className="text-gray-600 hover:text-pink-700 transition" />
          </button>
          <button
            className="flex items-center p-2"
            onClick={() => handleShare('whatsapp')}
          >
            <FaWhatsapp size={24} className="text-gray-600 hover:text-green-700 transition" />
          </button>
        </div>
      )}
      
      <div
        className="cursor-pointer p-2 transition mt-4 inline-block"
        onClick={handleFavorite}
      >
        <FaHeart size={25} className="text-gray-600 hover:text-red-600 transition" />
      </div>
    </div>
  );
};

export default ShareIcon;
