// Cart.jsx
import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCartHandler = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  };

  const updateQuantityHandler = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };

  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex items-center mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <button
                onClick={() => removeFromCartHandler(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md mt-2"
              >
                Remove from Cart
              </button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantityHandler(item.id, e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-1 mt-2"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          onClick={clearCartHandler}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
