import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Herosection from "../../components/Herosecton";
import axios from "axios";
// import { API_URL } from "../../utils/constants";
import { BsCloudUpload } from "react-icons/bs";

const MarketPlace = () => {
  // const API_URL = "https://kt.esewi.com/";
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  // const handleAddProduct = () => {
  //   const product = {
  //     image: image,
  //     price: price,
  //     detail: detail,
  //   };
  //   console.log(product);

  //   axios
  //     .post(API_URL + "products", product)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       console.log("Product Added Successfully!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("Error in Adding Product!");
  //     });
  // };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-3xl font-bold">Add Product</h1>
          <div>
            <label htmlFor="image">
              Image:
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                hidden
              />
              <div className="bg-blue-500 ml-4 px-4 py-2 mt-2 rounded-md text-white flex gap-2 items-center">
                <BsCloudUpload size={20} /> Upload Image
              </div>
            </label>
            {image && <img src={image} alt="Product Preview" />}
          </div>
          <div>
            <label htmlFor="price" className="my-2">
              Price:
            </label>
            <input
              className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-lg"
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="detail" className="my-2">
              Detail:
            </label>
            <textarea
              className="w-full rounded-lg border-gray-300 p-4 pr-12 text-sm shadow-lg"
              id="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <button
            // onClick={handleAddProduct}
            className="bg-green-700 px-4 py-2 rounded-md text-white"
          >
            Add Product
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
