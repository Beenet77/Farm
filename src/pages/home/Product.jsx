import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Howl } from "howler";

import ProductDetail from "./ProductDetail";

// import Home from "../home/Home";

function Product() {
  const [products, setProducts] = useState([]);
  // const [audiourl, setAudioUrl] = useState();
  // console.log("audiourl", audiourl);
  useEffect(() => {
    // Fetch product data from your fake API here
    // Replace 'YOUR_API_URL_HERE' with the actual API URL
    fetch("http://10..5.3.253:8000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(fetch);
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  // const playSound = async (productId) => {
  //   // try {
  //   // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint that returns the sound file for the product
  //   const apiEndpoint = `http://192.168.1.84:8000/generate_text_to_speech/${productId}/ `;
  //   fetch(apiEndpoint)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAudioUrl(data.audio_url);
  //     })

  //     .catch((error) => console.error("Error fetching data:", error));

  //   // Fetch the sound file
  //   // const response = await fetch(apiEndpoint);
  //   // console.log("response", response.json());
  //   // const buffer = await response.arrayBuffer();

  //   // Create a Howl sound object with the buffer
  //   // const sound = new Howl({
  //   //   src: [buffer],
  //   //   format: ["mp3"], // Adjust the format based on your API response
  //   // });

  //   // Play the sound
  //   // sound.play();
  // };

  // useEffect(() => {
  //   if (audiourl) {
  //     console.log(audiourl);
  //     // Create an audio element
  //     const audio = new Audio("http://192.168.1.84:8000/" + audiourl);

  //     // Event listener to play the audio when it can be played
  //     const playAudio = () => {
  //       audio.play();
  //     };

  //     // Attach the event listener
  //     audio.addEventListener("canplay", playAudio);

  //     // Clean up the event listener and audio element on component unmount
  //     return () => {
  //       audio.removeEventListener("canplay", playAudio);
  //       audio.pause();
  //       audio.currentTime = 0;
  //     };
  //   }
  // }, [audiourl]);

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
                <Link
                  to={`/products/${product.id}`}
                  className="group block overflow-hidden"
                  // onClick={() => playSound(product.id)}
                >
                  <img
                    src={product?.image}
                    alt={product.title}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />
                  <div className="relative bg-white pt-3">
                    <h2 className="text-lg font-semibold mt-2 group-hover:underline group-hover:underline-offset-4">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">
                      {product.category.product_name}
                    </p>
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
