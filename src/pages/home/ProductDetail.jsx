import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [detail, setDetail] = useState();
  const [productSound, setProductSound] = useState();
  const [cart, setCart] = useState([]);

  const params = useParams();

  const getDetails = () => {
    try {
      axios
        .get(`http://127.0.0.1:8000/products/${params.productId}`)
        .then((res) => {
          setDetail(res.data);
        });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getDetails(params);
    let fetchSound = async () => {
      try {
        let res = await fetch(
          `http://localhost:8000/generate_text_to_speech/${params.productId}`
        );
        let data = await res.json();
        setProductSound(data);
      } catch (error) {
        console.error("Error fetching product sound:", error);
      }
    };
    fetchSound();
  }, [params]);

  const addToCart = () => {
    setCart([...cart, detail]);
  };

  return (
    <>
      <Navbar />
      {detail ? (
        <>
          <div
            onMouseEnter={() =>
              productSound && new Audio(productSound.audio_url).play()
            }
          >
            {/* Product details */}
            <h1>{detail?.name}</h1>
            <p>{detail?.description}</p>
            <p>{detail?.title}</p>
            <img src={detail?.image} alt={detail?.name} />
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <h3 className="text-xl font-bold text-indigo-950">Loading...</h3>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductDetail;
