import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import storage from "../../storage";

const Order = () => {
  const [cartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  const [formData, setFormData] = useState({
    name: "",
    deliveryLocation: "",
    paymentOption: "",
  });

  console.log("form", formData.deliveryLocation);

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setConfirmed(true);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentOption) {
      redirectToPaymentURL(formData.paymentOption);
    } else {
      setConfirmed(true);
    }
  };

  const token = storage.getToken();

  const decoded = jwtDecode(token);

  // http://127.0.0.1:8000/api/marketplace-product-orders/

  const redirectToPaymentURL = (paymentOption) => {
    switch (paymentOption) {
      case "cod":
        window.location.href = "https://example.com/cod";
        break;
      case "card":
        window.location.href = "https://example.com/card";
        break;
      case "online":
        window.location.href = "https://example.com/online";
        break;
      default:
        break;
    }
  };

  const paymentOptionImages = {
    cod: "https://esewa.com.np/https://cdn.iconscout.com/icon/free/png-256/free-cash-on-delivery-1851649-1569374.png?f=webp/esewa_epay_logo.png",
    card: "https://esewa.com.np/https://cdn.iconscout.com/icon/free/png-256/free-cash-on-delivery-1851649-1569374.png?f=webp/esewa_epay_logo.png",
    online: "https://example.com/online.png", // Replace with actual image URL
  };

  let a = cartData.map((el) => {
    return {
      user: decoded.user_id,
      product: el.id,
      quantity: el.quantity,
      address: formData.deliveryLocation,
      total_price: el.quantity * +el.price,
    };
  });

  let final = {
    orders: a,
  };
  console.log("final", final);

  const handleSubmitOrder = async () => {
    await axios
      .post(`http://127.0.0.1:8000/api/marketplace-product-orders/`, final)
      .then(function (final) {
        console.log(final);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log("cartdata", cartData);

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
              {/* <option value="">Select Payment Option</option> */}
              <option value="cod">Cash on Delivery</option>
              <option value="card">Khalti</option>
              <option value="online">Esewa</option>
            </select>
          </div>
          <button
            onClick={handleSubmitOrder}
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

// {
//   "orders": [
//     {
//       "user": 1,
//       "product": 1,
//       "quantity": 2,
//       "total_price": 20.00,
//       "status": "Pending"
//     },
//     {
//       "user": 2,
//       "product": 3,
//       "quantity": 1,
//       "total_price": 15.00,
//       "status": "Pending"
//     },
//     ...
//   ]
// }

// let a = Array.map((el)=> {
//   return {
//     user: 3,
//     product: el.uuid,
//     quanity: el.quanity,
//     address: address,
//     total_price: el.quanity *  el.price,
//   }
// })

// let final = {
//   "orders" : a
// }
