import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TitlePrimary from "../../components/TitlePrimary";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    const fetchBlogposts = async () => {
      const res = await fetch("http://192.168.1.84:8000/blog/posts/");
      const data = await res.json();
      setBlogposts(data);
      console.log(data);
    };
    fetchBlogposts();
  }, []);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  return (
    <div>
      <Navbar />
      <TitlePrimary text="Blogposts" />
      <div className="container mx-auto px-4 lg:px-10 flex flex-wrap justify-between">
        {blogposts.map((blogpost) => (
          <div className="w-full flex justify-center sm:w-1/2 md:w-1/3 p-[15px]">
            <BlogCard
              title={truncateText(blogpost.title, 50)}
              author={blogpost.author}
              date={blogpost.created_at}
              slug={blogpost.slug}
              content={truncateText(blogpost.content, 100)}
              category={blogpost.category}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
