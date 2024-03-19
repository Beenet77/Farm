import React, { useEffect, useState } from "react";
import TitlePrimary from "../../components/TitlePrimary";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    const fetchBlogposts = async () => {
      const res = await fetch("http://127.0.0.1:8000/blog/posts");
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
    <div className="min-h-[85vh] container mx-auto mt-4">
      <TitlePrimary text="Blogposts" />
      <div className="container mx-auto px-4 lg:px-10 flex flex-wrap justify-between">
        {blogposts.map((blogpost) => (
          <div className="w-full flex justify-center sm:w-1/2 md:w-1/3 p-[15px]">
            <BlogCard
              image={blogpost.image}
              video={blogpost.video}
              title={truncateText(blogpost.title, 50)}
              author={blogpost.author}
              date={blogpost.created_at}
              slug={blogpost.slug}
              content={truncateText(blogpost.content, 100)}
              category={blogpost.category}
              id={blogpost.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
