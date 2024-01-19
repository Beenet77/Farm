import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Avatar from "../../images/agric.jpg";
import Banner from "../../images/agriculture-products.jpg";
import TitlePrimary from "../../components/TitlePrimary";
import BlogCard from "../../components/BlogCard";

const Blogpost = () => {
  const [blogposts, setblogposts] = useState(null);

  useEffect(() => {
    // Replace with the actual API endpoint for fetching blog post data
    Axios.get("https://kt.esewi.com/blog/posts/")
      .then((response) => {
        setblogposts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog post data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <figure>
        <img src={Banner} className="object-cover w-full" alt="" />
      </figure>
      <div className="container mx-auto px-20 py-5">
        {blogposts && (
          <>
            <h1 className="font-bold text-4xl">{blogposts.title}</h1>
            <span className="blogpost_details flex items-center color-black font-md text-md justify-between py-3">
              <div className="details text-xs font-base text-gray-700 px-1">
                <div className="flex flex-row">
                  <div className="author_image_container flex items-center">
                    <img
                      src={Avatar}
                      alt=""
                      className="h-10 w-10 object-cover rounded"
                    />
                  </div>
                  <div className="flex flex-col pl-3">
                    <div className="author_name">{blogposts.author}</div>
                    <div className="date mt-1">
                      {blogposts.date} . {blogposts.time}
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <section className="font_cabin">{blogposts.content}</section>
          </>
        )}
      </div>

      <TitlePrimary text="Other Articles" />
      <section className="blog-card-row container mx-auto px-20">
        <div className="flex flex-row overflow-x-scroll container-snap sm:flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3  p-[15px]">
            <BlogCard />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  p-[15px]">
            <BlogCard />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3  p-[15px]">
            <BlogCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogpost;
