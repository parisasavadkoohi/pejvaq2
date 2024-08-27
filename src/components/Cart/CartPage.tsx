import React, { useState, useEffect } from "react";
import { IProduct } from "../../interFace/product";

interface CartItem extends IProduct {
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(savedCartItems);
  }, []);

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.Id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const removeItem = (productId: string) => {
    const updatedItems = cartItems.filter((item) => item.Id !== productId);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.ProductPrice.Price.replace(/[^0-9]/g, ""), 10);
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="container mx-auto mt-12 px-4 py-4" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">سبد خرید</h1>
      {cartItems.length === 0 ? (
        <div>سبد خرید شما خالی است</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.Id}
              className="bg-white shadow-md rounded-lg p-6 mb-4 flex justify-between items-center"
            >
              <div className="flex items-center">
                <img
                  src={`https://back.pejvaq.com${item.DefaultPictureModel?.ImageUrl}`}
                  alt={item.Name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-bold">{item.Name}</h2>
                  <p className="text-gray-600">قیمت: {item.ProductPrice.Price}</p>
                  <p className="text-gray-600">SKU: {item.Sku}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.Id, parseInt(e.target.value))
                  }
                  className="border border-gray-300 rounded w-16 text-center"
                />
                <button
                  onClick={() => removeItem(item.Id)}
                  className="text-red-500 ml-4"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <h2 className="text-2xl font-bold">مجموع: {calculateTotalPrice()} تومان</h2>
            <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4">
              ادامه خرید
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
