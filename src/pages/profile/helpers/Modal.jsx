import Select from "react-select";
import axios from "axios";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import storage from "../../../storage";

export default function Modal({ data, ...props }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });
  const token = storage.getToken();

  const decoded = jwtDecode(token);
  const handleSubmit = async (e) => {
    let url = "http://127.0.0.1:8000/api/marketplaceproducts/";

    // if (data.id) {
    //   url = "http://127.0.0.1:8000/api/marketplaceproducts/" + data.id + "/";
    // }
    try {
      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("description", formData.description);
      formDataObj.append("price", formData.price);
      formDataObj.append("category", formData.category);
      formDataObj.append("image", formData.image);
      formDataObj.append("created_by", decoded.user_id);
      await axios.post(url, formDataObj);
      props.setShowModal(false);
      setFormData({
        id: "",
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
      window.location.reload(true);
    } catch (error) {
      console.error("Error adding product: dfghgjhgdfghyuyhgfd", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormData({ ...formData, category: e.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  return (
    <>
      {props.showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={data?.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Detail
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={data?.description}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <textarea
                  id="price"
                  name="price"
                  defaultValue={data?.price}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <Select
                  options={props?.catOptions}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => props.setShowModal(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmit()}
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
