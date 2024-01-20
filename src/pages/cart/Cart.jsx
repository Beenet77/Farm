import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "50px" }}
              />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
