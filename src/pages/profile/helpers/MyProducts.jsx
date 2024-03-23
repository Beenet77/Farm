import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { FARM_URL } from "../../../apis/Api";
import storage from "../../../storage";
import { jwtDecode } from "jwt-decode";

export const MyProducts = ({ catOptions }) => {
  const [data, setData] = useState(null);
  const [product, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchProducts = async (catid) => {
    try {
      const response = await axios.get(FARM_URL.marketplace);
      if (catid) {
        setProducts(response.data.filter((el) => el.category === catid));
      } else {
        const token = storage.getToken();

        const decoded = jwtDecode(token);
        let item = response.data.filter(
          (el) => el.created_by === decoded.user_id
        );
        setProducts(item);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditClick = (item) => {
    setShowModal(true);
    setData(item);
  };

  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`${FARM_URL.marketplace}/${productId}/`);
      // Assuming product deletion is successful, update the UI
      setProducts(product.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <Modal
        catOptions={catOptions}
        setShowModal={setShowModal}
        showModal={showModal}
        data={data}
      />
      <ul className="bg-white px-10 py-3 my-5 container mx-auto text-blue-gray-900 rounded-lg">
        {product.map((item) => (
          <li key={item.id}>
            <div className="flex items-center mb-4 justify-between mt-1">
              <div className="flex items-center mb-4 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <p className="text-gray-600 ">{item.name}</p>
                  <p className="text-gray-600">Rs. {item.price}</p>
                  <p className="text-gray-600">{item.description}</p>
                  <button
                    onClick={() => handleDeleteClick(item.id)}
                    className="text-black px-2 py-1 rounded-md mt-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-4 ">
                <button
                  type="button"
                  onClick={() => handleEditClick(item)}
                  className="border bg-green-800 border-gray-300 rounded-md px-2 py-1 mt-2 mx-2 w-20 text-white"
                >
                  Edit
                </button>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
