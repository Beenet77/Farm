import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ButtonPrimary from "../../components/ButtonPrimary";
import { HiSpeakerWave } from "react-icons/hi2"; // Import speak icon
// import { useSpeechSynthesis } from "react-speech-kit";

const ProductDetail = () => {
  const [detail, setDetail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productId, setProductId] = useState();
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const params = useParams();
  const synth = window.speechSynthesis;

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
    if (window.location.href.includes("marketplace")) {
      myurl = myurl + "marketplaceproducts/";
    }
    if (window.location.href.includes("government")) {
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const marketplaceParam = searchParams.get("marketplace");

  useEffect(() => {
    getDetails(params);
  }, [getUrlParam(getUrlParamName())]);

  useEffect(() => {
    detail && fetchRelatedProducts(detail);
  }, [detail]);

  useEffect(() => {
    setProductId(marketplaceParam);
    fetchRecommendedProducts(productId);
  }, [marketplaceParam, productId]);

  const fetchRecommendedProducts = async (id) => {
    try {
      let myurl = `http://127.0.0.1:8000/recommendations/${id}`;
      const response = await axios.get(myurl);
      setRecommendedProducts(response.data);
    } catch (error) {
      console.error("Error fetching recommended products:", error);
    }
  };

  const fetchRelatedProducts = async (a) => {
    try {
      let myurl = "http://127.0.0.1:8000/api/";
      if (window.location.href.includes("marketplace")) {
        myurl = myurl + "marketplaceproducts/";
      }
      if (window.location.href.includes("government")) {
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

  const speak = async (audioUrl) => {
    try {
      // Fetch the audio file
      const response = await axios.get(audioUrl, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "audio/mp3" });

      // Create an audio element
      const audio = new Audio(URL.createObjectURL(blob));

      // Play the audio
      audio.play();
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };
  // const speak = (text) => {
  //   if (synth.speaking) {
  //     console.error("Already speaking...");
  //     return;
  //   }
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   utterance.voice = synth
  //     .getVoices()
  //     .find(
  //       (voice) =>
  //         voice.name === "Microsoft Sagar Online (Natural) - Nepali (Nepal)"
  //     );
  //   synth.speak(utterance);
  // };
  // const { speak } = useSpeechSynthesis();

  const previousCartData = JSON.parse(localStorage.getItem("cartData")) || [];

  function addToCartHandler(data) {
    if (Boolean(previousCartData.find((el) => el.uuid === data.uuid))) {
      alert("Already added to cart");
    }
    if (
      data?.created_at &&
      !Boolean(previousCartData.find((el) => el.uuid === data.uuid))
    ) {
      let cartData = [data, ...previousCartData];
      localStorage.setItem("cartData", JSON.stringify(cartData));
      alert("Product is added to cart");
      window.location.reload(true);
    }
  }
  console.log(111, relatedProducts);
  // const vari = "who the hell are you";

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
                {/* <HiSpeakerWave
                  className="ml-2 cursor-pointer size-8"
                  onClick={() => speak(`मुल्य  ${detail?.price}`)}
                /> */}
              </p>
              <h1 className="">
                {detail?.name}
                {/* <HiSpeakerWave
                  className="ml-2 cursor-pointer size-8"
                  onClick={() => speak(`नाम ${detail?.name}`)}
                /> */}
                <HiSpeakerWave
                  className="ml-2 cursor-pointer size-8"
                  onClick={() =>
                    speak(
                      `http://127.0.0.1:8000/media/product_audio/${detail?.id}_ne.mp3`
                    )
                  }
                />
              </h1>
              <p>
                {detail?.description}
                {/* <HiSpeakerWave
                  className="ml-2 cursor-pointer size-8"
                  onClick={() => speak(`विवरण ${detail?.description}`)}
                /> */}
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
                      <p className="text-lg font-semibold text-green-500 mt-2">
                        रू {product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <h3>Recommended Products</h3>
          <div className="grid grid-cols-4 gap-4">
            {recommendedProducts.map((product) => (
              <div
                key={product.id}
                className=" bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <Link
                  to={`/products${
                    getUrlParamName() ? "?marketplace=" : "?government="
                  }${product.id}`}
                  className="group block overflow-hidden"
                  onClick={() => setProductId(product.id)}
                >
                  <img
                    src={`http://127.0.0.1:8000${product?.image}`}
                    alt={product.name}
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
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
