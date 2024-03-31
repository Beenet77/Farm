import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function Product(props) {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState([]);
  const [catName, setCatName] = useState("Product");

  const [catToggle, setCatToggle] = useState(true);

  useEffect(() => {
    fetchProducts(null);
  }, []);

  useEffect(() => {
    fetchCat();
  }, []);

  const fetchProducts = async (catid) => {
    try {
      const response = await axios.get(props.dataUrl);
      if (catid) {
        setProducts(response.data.filter((el) => el.category === catid));
      } else {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCat = async () => {
    try {
      const response = await axios.get(props.catUrl);
      setCat(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  function handleCatClick(a, b) {
    setCatToggle(!catToggle);
    setCatName(b);
    fetchProducts(a);
  }

  const productChunks = chunkArray(products, 4);

  return (
    <>
      {/* <div className="title text-center text-extrabold text-[24px]">
        Government Products
      </div> */}
      <div className="min-h-[85vh] container mx-auto mt-4 p-10">
        <div className="text-right">
          <button onClick={() => setCatToggle(!catToggle)}>CATEGORIES</button>
        </div>
        <div className={`${catToggle && "hidden"}`}>
          <ul className="text-right gap-4">
            {cat.map((el) => (
              <li
                className="cursor-pointer text-blue-500	underline underline-offset-1 uppercase"
                onClick={() => handleCatClick(el.id, el.product_name)}
              >
                {el.product_name}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="text-2xl font-semibold mb-4">{catName.toUpperCase()}</h1>
        <div>
          {productChunks.length > 0 ? (
            productChunks.map((chunk, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mb-4">
                {chunk.map((product) => (
                  <div
                    key={product.id}
                    className="  rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 bg-white"
                  >
                    <Link
                      to={`/products?${props.isFrom + "=" + product.id}`}
                      className="group block overflow-hidden"
                    >
                      <img
                        src={product?.image}
                        alt={product.title}
                        className="w-full h-[230px] object-cover transition duration-500 group-hover:scale-105 sm:w-[455px]"
                      />
                      <div className="relative bg-white pt-3">
                        <h2 className="text-lg font-semibold mt-2 group-hover:underline group-hover:underline-offset-4">
                          {product.name}
                        </h2>
                        <p className="text-lg font-semibold text-green-500 mt-2">
                          रू {product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="min-h-[50vh] flex justify-center items-center">
              Opps! no product found!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
