import React, { useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  const removeFromCartHandler = (productId) => {
    if (productId) {
      alert("are you sure you want to delete");
      let a = cartData.filter((el) => el.id !== productId);
      localStorage.setItem("cartData", JSON.stringify(a));
      window.location.reload(true);
    }
  };

  const calculateTotalAmount = () => {
    let sum = 0;
    cartData.map((el) => {
      if (el.quantity) {
        sum = +el.price * el.quantity + sum;
      } else {
        sum = +el.price + sum;
      }
    });
    return sum;
  };

  const clearCartHandler = () => {
    localStorage.setItem("cartData", JSON.stringify(null));
    window.location.reload(true);
  };

  const handleInputChange = (id, e) => {
    let a = cartData.map((el) => {
      if (el.id === id) {
        el.quantity = e.target.value;
        return el;
      } else {
        return el;
      }
    });
    setCartData(a);
  };

  return (
    <div className="p-4 min-h-[85vh]	container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {cartData.map((item) => (
          <li key={item.id}>
            <div className="flex items-center mb-4 justify-between">
              <div className="flex items-center mb-4 ">
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
              <div className="flex items-center mb-4 ">
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
        <p className="float-right	mx-2">TOTAL : Rs. {calculateTotalAmount()}</p>
      </ul>
      <div className="mt-4">
        <button
          onClick={clearCartHandler}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Clear Cart
        </button>
        <button
          // onClick={clearCartHandler}
          className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default Cart;
