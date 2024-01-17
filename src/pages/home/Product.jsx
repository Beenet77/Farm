import React, { useState, useEffect } from "react";
import { Link,  useParams } from "react-router-dom";

import ProductDetail from "./ProductDetail";

// import Home from "../home/Home";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your fake API here
    // Replace 'YOUR_API_URL_HERE' with the actual API URL
    fetch("http://127.0.0.1:8000/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
 console.log(fetch)
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const productChunks = chunkArray(products, 5);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {productChunks.map((chunk, index) => (
          <div key={index} className="grid grid-cols-1 gap-4">
            {chunk.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="text-lg font-semibold mt-2">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-gray-600">{product.category.product_name}</p>
                <p className="text-lg font-semibold text-green-500 mt-2">
                रू {product.price}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductDetailPage({ products }) {
  console.log(products);
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetail product={product} />;
}

export default Product;
