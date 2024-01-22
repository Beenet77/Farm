// ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import ButtonPrimary from "../../components/ButtonPrimary";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProductDetail = () => {
  const { cart, dispatch } = useCart();
  const [detail, setDetail] = useState(null);
  const [audiourl, setAudioUrl] = useState();
  const params = useParams();

  const getDetails = () => {
    try {
      axios
        .get(`http://10.5.3.253:8000/api/products/${params.productId}`)
        .then((res) => {
          setDetail(res.data);
        });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getDetails(params);
    playSound(params.productId);
  }, [params]);

  const playSound = async (productId) => {
    const apiEndpoint = `http://10.5.3.253:8000/generate_text_to_speech/${productId}/`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        playAudio(data.audio_url);
        setAudioUrl("http://10.5.3.253:8000/" + data.audio_url);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  async function playAudio(a) {
    if (a) {
      const audio = new Audio(
        "http://192.168.1.84:8000/media/product_audio/1_ne.mp3"
      );
      const playAudio = () => {
        audio.play();
      };
      audio.addEventListener("canplay", playAudio);
    }
  }

  const addToCartHandler = () => {
    dispatch({ type: "ADD_TO_CART", payload: detail });
  };

  return (
    <div>
      {detail ? (
        <>
          <Navbar />
          <div className="flex mr-8 mb-5">
            <div className="flex-initial w-76">
              {/* Display product details */}
            </div>
            <div className="flex-initial w-36 mt-12">
              {/* Additional product details */}
              <h3 className="font-bold">{detail.title}</h3>
              <br />
              <p>{detail.description}</p>
              <p>${detail.price}</p>
              <ButtonPrimary text="Add to Cart" onClick={addToCartHandler}>
                Add to Cart
              </ButtonPrimary>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
