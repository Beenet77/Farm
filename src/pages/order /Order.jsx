import React, { useState } from "react";

const Order = () => {
  const [cartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  const [formData, setFormData] = useState({
    name: "",
    deliveryLocation: "",
    paymentOption: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const paymentOptionImages = {
    cod: "https://esewa.com.np/https://cdn.iconscout.com/icon/free/png-256/free-cash-on-delivery-1851649-1569374.png?f=webp/esewa_epay_logo.png",
    card: "https://example.com/card.png", // Replace with actual image URL
    online: "https://example.com/online.png", // Replace with actual image URL
  };

  return (
    <div className="p-4 min-h-[85vh] container mx-auto mt-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Order Details</h2>
          {cartData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-gray-500">Price: Rs. {item.price}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-800">Quantity: {item.quantity}</p>
                <p className="text-gray-500">
                  Subtotal: Rs. {item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="deliveryLocation"
              className="block text-sm font-bold mb-2"
            >
              Delivery Location:
            </label>
            <input
              type="text"
              id="deliveryLocation"
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="paymentOption"
              className="block text-sm font-bold mb-2"
            >
              Payment Option:
            </label>
            <select
              id="paymentOption"
              name="paymentOption"
              value={formData.paymentOption}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              required
            >
              <option value="">Select Payment Option</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="online">Online Payment</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-primary text-black px-4 py-2 rounded-md mt-6"
          >
            Confirm Order
          </button>
        </form>
      </div>

      {/* Display selected payment option image after confirmation */}
      {confirmed && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Selected Payment Option
          </h2>
          <img
            src={paymentOptionImages[formData.paymentOption]}
            alt="Payment Option"
            className="w-32 mx-auto"
          />
          <p className="text-center text-sm mt-2">
            Click{" "}
            <a
              href={paymentOptionImages[formData.paymentOption]}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            to proceed with the payment.
          </p>
        </div>
      )}
    </div>
  );
};

export default Order;
