// ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import ButtonPrimary from "../../components/ButtonPrimary";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  const [detail, setDetail] = useState(null);
  const [audiourl, setAudioUrl] = useState();
  const params = useParams();

  const getDetails = () => {
    try {
      axios
        .get(`http://127.0.0.1:8000/api/products/${params.productId}`)
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
    const apiEndpoint = `http://127.0.0.1:8000/generate_text_to_speech/${productId}/`;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        playAudio(data.audio_url);
        setAudioUrl(
          "http://127.0.0.1:8000/generate_text_to_speech/media/product_audio/1_ne.mp3"
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  async function playAudio(a) {
    if (a) {
      const audio = new Audio(
        "http://127.0.0.1:8000/generate_text_to_speech/media/product_audio/1_ne.mp3"
      );
      const playAudio = () => {
        audio.play();
      };
      audio.addEventListener("canplay", playAudio);
    }
  }

  const previousCartData = JSON.parse(localStorage.getItem("cartData")) || [];

  function addToCartHandler(data) {
    if (Boolean(previousCartData.find((el) => el.id === data.id))) {
      alert(" Already added to cart");
    }
    if (
      data?.created_at &&
      !Boolean(previousCartData.find((el) => el.id === data.id))
    ) {
      let cartData = [data, ...previousCartData];
      localStorage.setItem("cartData", JSON.stringify(cartData));
      alert("product is added to cart");
      window.location.reload(true);
    }
  }

  return (
    <div>
      {detail ? (
        <>
          <div className="flex mr-8 mb-5 p-5">
            <div className="flex-initial w-76">
              <img width="400px" src={detail?.image} alt="" />
            </div>
            <div className="flex-initial ml-5 ">
              {/* Additional product details */}
              <p style={{ color: "red" }}>Rs.{detail?.price}</p>
              <h1 className=""> {detail?.name}</h1>
              <p>{detail?.description}</p>
              {/* <p>${detail.price}</p> */}
              <ButtonPrimary
                text="Add to Cart"
                onClick={() => addToCartHandler(detail)}
              >
                Add to Cart
              </ButtonPrimary>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
