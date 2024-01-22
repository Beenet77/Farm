// Cart.jsx
import React from "react";
import { useCart } from "../../context/CartContex";

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
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCartHandler(item.id)}>
                Remove from Cart
              </button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantityHandler(item.id, e.target.value)}
              />
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={clearCartHandler}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
