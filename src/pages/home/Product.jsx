import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      formDataObj.append("productname", formData.productname);
      formDataObj.append("productdetail", formData.productdetail);
      formDataObj.append("category", formData.category);
      formDataObj.append("image", formData.image);
      await axios.post("http://127.0.0.1:8000/api/products/", formDataObj);
      setShowModal(false);
      setFormData({
        id: "",
        name: "",
        description: "",
        price: "",
        category: "",
        image: null,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const productChunks = chunkArray(products, 4);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <button
        className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={toggleModal}
      >
        Add Product
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
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
                  value={formData.name}
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
                  value={formData.description}
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
                  value={formData.price}
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
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
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
                  onClick={toggleModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div>
        {productChunks.map((chunk, index) => (
          <div key={index} className="grid grid-cols-4 gap-4">
            {chunk.map((product) => (
              <div
                key={product.id}
                className=" bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <Link
                  to={`/products/${product.id}`}
                  className="group block overflow-hidden"
                >
                  <img
                    src={product?.image}
                    alt={product.title}
                    className="w-full object-cover transition duration-500 group-hover:scale-105 sm:w-[455px]"
                  />
                  <div className="relative bg-white pt-3">
                    <h2 className="text-lg font-semibold mt-2 group-hover:underline group-hover:underline-offset-4">
                      {product.name}
                    </h2>
                    {/* <p className="text-gray-600">{product.category}</p> */}
                    <p className="text-lg font-semibold text-green-500 mt-2">
                      रू {product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
