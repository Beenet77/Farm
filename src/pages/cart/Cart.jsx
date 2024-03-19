import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  const removeFromCartHandler = (productId) => {
    if (productId) {
      alert("Are you sure you want to delete?");
      let updatedCartData = cartData.filter((el) => el.id !== productId);
      setCartData(updatedCartData);
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    }
  };
  const calculateTotalAmount = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleInputChange = (id, e) => {
    let updatedCartData = cartData.map((el) => {
      if (el.id === id) {
        return { ...el, quantity: parseInt(e.target.value) };
      }
      return el;
    });
    setCartData(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  };

  const clearCartHandler = () => {
    localStorage.removeItem("cartData");
    setCartData([]);
  };

  return (
    <div className="p-4 min-h-[85vh] container mx-auto mt-4">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <ul className="bg-white p-10 my-5 container mx-auto text-blue-gray-900 rounded-lg">
          {cartData.map((item) => (
            <li key={item.id}>
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p className="text-gray-600">{item.name}</p>
                    <p className="text-gray-600">Rs. {item.price}</p>
                    <button
                      onClick={() => removeFromCartHandler(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md mt-2"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    defaultValue={1}
                    value={item.quantity}
                    onChange={(e) => handleInputChange(item.id, e)}
                    className="border border-gray-300 rounded-md px-2 py-1 mt-2 mx-2 w-20"
                  />
                </div>
              </div>
              <hr />
            </li>
          ))}
          <div className="text-right">
            <p className="mx-2">TOTAL : Rs. {calculateTotalAmount()}</p>
          </div>
        </ul>
        <div className="flex justify-between mt-4">
          <button
            onClick={clearCartHandler}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Clear Cart
          </button>
          <Link
            to={{
              pathname: "/order",
              cartData: cartData, // Pass cartData as state
            }}
          >
            <button className="bg-green-500 text-white px-4 py-2 rounded-md mx-2">
              Place order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
