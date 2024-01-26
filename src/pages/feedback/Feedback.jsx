import React from "react";
import Footer from "../../components/Footer";
import ButtonPrimary from "../../components/ButtonPrimary";
import Navbar from "../../components/Navbar";

const Feedback = () => {
  return (
    <>
      <div classNameName="container mx-auto">
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300 shadow">
            {/* <img src={} alt="" /> */}
          </div>
          <div className="justify-center container px-68  flex  ">
            <form className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md ">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                प्रतिक्रिया
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600"></p>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  छोटकरीमा बताउनुहोस्
                </label>
                <input
                  type="text"
                  id="text"
                  name="title"
                  className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  सन्देश
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <ButtonPrimary text="Submit" />
              <p className="text-xs text-gray-500 mt-3">
                हाम्रो टोलीले सकेसम्म चाँडो जवाफ दिनेछ।
              </p>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Feedback;
