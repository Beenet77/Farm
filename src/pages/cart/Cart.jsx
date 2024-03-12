import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const Cart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!map && mapContainerRef.current) {
      const instance = L.map(mapContainerRef.current).setView(
        [51.505, -0.09],
        13
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(instance);
      setMap(instance);
    }
  }, [map, mapContainerRef]);

  const removeFromCartHandler = (productId) => {
    if (productId) {
      alert("Are you sure you want to delete?");
      let updatedCartData = cartData.filter((el) => el.id !== productId);
      setCartData(updatedCartData);
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    }
  };

  const calculateTotalAmount = () => {
    let sum = 0;
    cartData.forEach((el) => {
      if (el.quantity) {
        sum = +el.price * el.quantity + sum;
      } else {
        sum = +el.price + sum;
      }
    });
    return sum;
  };

  const clearCartHandler = () => {
    localStorage.removeItem("cartData");
    setCartData([]);
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

  const placeOrderHandler = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4 min-h-[85vh] container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="bg-white p-10  my-5 container mx-auto   text-blue-gray-900 rounded-lg">
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
        <button
          onClick={placeOrderHandler}
          className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
        >
          Place order
        </button>
      </div>

      {/* Modal for placing order */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div
              ref={mapContainerRef}
              style={{ height: "400px", width: "100%" }}
            ></div>
            <p className="bg-black">
              Payment options:{" "}
              <img
                className="w-16"
                src="https://play-lh.googleusercontent.com/MRzMmiJAe0-xaEkDKB0MKwv1a3kjDieSfNuaIlRo750_EgqxjRFWKKF7xQyRSb4O95Y"
                alt="esewa"
              />
              <img
                className="w-16"
                src="https://play-lh.googleusercontent.com/Xh_OlrdkF1UnGCnMN__4z-yXffBAEl0eUDeVDPr4UthOERV4Fll9S-TozSfnlXDFzw"
                alt="khalti"
              />
              <img
                className="w-16"
                src="https://esewa.com.np/https://cdn.iconscout.com/icon/free/png-256/free-cash-on-delivery-1851649-1569374.png?f=webp/esewa_epay_logo.png"
                alt="COD"
              />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
