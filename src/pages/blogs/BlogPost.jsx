import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";

const Blogpost = () => {
  const [blogpost, setBlogpost] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const params = useParams();
  const synthesis = window.speechSynthesis;

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/blog/posts/${params.id}`)
      .then((response) => {
        setBlogpost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog post data:", error);
      });
  }, [params.id]);

  const handleSpeak = () => {
    if (blogpost && synthesis) {
      const utterance = new SpeechSynthesisUtterance(blogpost.content);
      synthesis.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
      };
    }
  };

  return (
    <>
      <div className="min-h-[85vh] container mx-auto mt-4 px-20 py-5 relative">
        {isSpeaking && (
          <BiVolumeMute
            className="absolute top-4 right-4 text-gray-500 cursor-pointer"
            size={24}
            onClick={() => {
              synthesis.cancel();
              setIsSpeaking(false);
            }}
          />
        )}
        <div className="absolute top-0 right-0">
          {!isSpeaking && (
            <BiVolumeFull
              className="text-gray-500 cursor-pointer"
              size={24}
              onClick={handleSpeak}
            />
          )}
        </div>
        {blogpost && (
          <>
            <h1 className="font-bold text-4xl">{blogpost.title}</h1>
            <span className="blogpost_details flex items-center color-black font-md text-md justify-between py-3">
              <div className="details text-xs font-base text-gray-700 px-1">
                <div className="flex flex-row">
                  <div className="author_image_container flex items-center">
                    <img src={blogpost.image} alt="" />
                  </div>
                  <div className="flex flex-col pl-3">
                    <div className="author_name">{blogpost.author}</div>
                    <div className="date mt-1">
                      {blogpost.date} . {blogpost.time}
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <section className="font_cabin">{blogpost.content}</section>
          </>
        )}
      </div>
    </>
  );
};

export default Blogpost;
