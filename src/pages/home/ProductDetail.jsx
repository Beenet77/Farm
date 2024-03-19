import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { useCart } from "../../context/CartContext";
import ButtonPrimary from "../../components/ButtonPrimary";
import { HiSpeakerWave } from "react-icons/hi2"; // Import speak icon

const ProductDetail = () => {
  const navigate = useNavigate();
  // const { cart, dispatch } = useCart();
  const [detail, setDetail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const url = window.location.href;
  console.log("url", url);
  console.log(url.includes("marketplace"));
  const [speaking, setSpeaking] = useState(false); // State to track speaking status
  const params = useParams();

  function getUrlParam(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
  }

  function getUrlParamName() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.keys().next().value;
  }

  const getDetails = () => {
    let myurl = "http://127.0.0.1:8000/api/";
    if (url.includes("marketplace")) {
      myurl = myurl + "marketplaceproducts/";
    }
    if (url.includes("government")) {
      myurl = myurl + "governmentproducts/";
    }
    try {
      axios.get(myurl + getUrlParam(getUrlParamName())).then((res) => {
        setDetail(res.data);
      });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getDetails(params);
  }, [url]);

  useEffect(() => {
    detail && fetchRelatedProducts(detail);
  }, [detail]);

  const fetchRelatedProducts = async (a) => {
    try {
      let myurl = "http://127.0.0.1:8000/api/";
      if (url.includes("marketplace")) {
        myurl = myurl + "marketplaceproducts/";
      }
      if (url.includes("government")) {
        myurl = myurl + "governmentproducts/";
      }
      const response = await axios.get(myurl);
      if (a) {
        setRelatedProducts(
          response.data.filter(
            (el) => el.category === a.category && a.id !== el.id
          )
        );
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const speak = (text) => {
    // Create a new speech synthesis instance
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Start speaking
    synth.speak(utterance);

    // Set speaking state to true
    setSpeaking(true);

    // Handle end of speaking
    utterance.onend = () => {
      // Set speaking state to false
      setSpeaking(false);
    };
  };

  const previousCartData = JSON.parse(localStorage.getItem("cartData")) || [];

  function addToCartHandler(data) {
    if (Boolean(previousCartData.find((el) => el.id === data.id))) {
      alert("Already added to cart");
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
    <div className="min-h-[85vh] container mx-auto mt-4">
      {detail ? (
        <>
          <div className="flex mr-8 mb-5 p-5">
            <div className="flex-initial w-400">
              <img className="w-96" src={detail?.image} alt="" />
            </div>
            <div className="flex-initial ml-5 ">
              {/* Additional product details */}
              <p style={{ color: "red" }}>
                Rs.{detail?.price}
                <HiSpeakerWave
                  className="ml-2 cursor-pointer size-8"
                  onClick={() => speak(`मुल्य  ${detail?.price}`)}
                />
              </p>
              <h1 className="">
                {detail?.name}
                <HiSpeakerWave
                  className="ml-2 cursor-pointer size-8"
                  onClick={() => speak(`नाम ${detail?.name}`)}
                />
              </h1>
              <p>
                {detail?.description}
                <HiSpeakerWave
                  className="ml-2 cursor-pointer size-8"
                  onClick={() => speak(`विवरण${detail?.description}`)}
                />
              </p>
              <ButtonPrimary
                text="Add to Cart"
                onClick={() => addToCartHandler(detail)}
              >
                Add to Cart
              </ButtonPrimary>
            </div>
          </div>
          <h3>Related Products</h3>
          <div>
            <div className="grid grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  className=" bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
                >
                  <Link
                    to={`/products${
                      getUrlParamName() ? "?marketplace=" : "?government="
                    }${product.id}`}
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
                      {/* <p className="text-gray-600">{product.category}</p> */}
                      <p className="text-lg font-semibold text-green-500 mt-2">
                        रू {product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
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
