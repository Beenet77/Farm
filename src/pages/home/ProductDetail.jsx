import React, { useState, useEffect } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";

import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/ProductCard"; // Import the Card component
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProductDetail = ({ addToCart }) => {
  const [detail, setDetail] = useState(null);
  const [audiourl, setAudioUrl] = useState();
  // console.log(audiourl);
  const params = useParams();

  const getDetails = () => {
    try {
      axios
        .get(` http://10..5.3.253:8000/api/products/${params.productId}`)
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
    // try {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint that returns the sound file for the product
    const apiEndpoint = `http://10..5.3.253:8000/generate_text_to_speech/${productId}/ `;
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        playAudio(data.audio_url);
        setAudioUrl("http://10..5.3.253:8000/" + data.audio_url);
      })

      .catch((error) => console.error("Error fetching data:", error));

    // Fetch the sound file
    // const response = await fetch(apiEndpoint);
    // console.log("response", response.json());
    // const buffer = await response.arrayBuffer();

    // Create a Howl sound object with the buffer
    // const sound = new Howl({
    //   src: [buffer],
    //   format: ["mp3"], // Adjust the format based on your API response
    // });

    // Play the sound
    // sound.play();
  };

  // useEffect(() => {
  //   if (audiourl) {
  //     console.log("insideEffect", audiourl);
  //     // Create an audio element
  //     const audio = new Audio("http://192.168.1.84:8000/" + audiourl);

  //     // Event listener to play the audio when it can be played
  //     const playAudio = () => {
  //       audio.play();
  //     };

  //     // Attach the event listener
  //     audio.addEventListener("canplay", playAudio);

  //     // Clean up the event listener and audio element on component unmount
  //     // return () => {
  //     //   audio.removeEventListener("canplay", playAudio);
  //     //   audio.pause();
  //     //   audio.currentTime = 0;
  //     // };
  //   }
  // }, [audiourl]);

  // useEffect(() => {
  //   audiourl && playAudio(audiourl);
  // }, [audiourl]);

  async function playAudio(a) {
    console.log("insidefunction", a);
    if (a) {
      // Create an audio element
      const audio = new Audio(
        "http://192.168.1.84:8000/media/product_audio/1_ne.mp3"
      );

      // Event listener to play the audio when it can be played
      const playAudio = () => {
        audio.play();
      };

      // Attach the event listener
      audio.addEventListener("canplay", playAudio);
    }
  }

  return (
    <div>
      {detail ? (
        <>
          {/* Use the Card component to display product details */}
          <Navbar />
          <div className="flex mr-8 mb-5">
            <div class="flex-initial w-76 ...">
              <ProductCard products={detail} />
            </div>
            {/* Additional product details */}
            <div class="flex-initial w-36.. mt-12">
              <h3 className="font-bold">{detail.title}</h3>
              <br></br>
              <p>{detail.description}</p>

              <p>${detail.price}</p>
              <ButtonPrimary
                text="Add to Cart"
                onClick={() => addToCart(detail)}
              >
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
