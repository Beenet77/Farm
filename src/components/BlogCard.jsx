import React from "react";
import { Link } from "react-router-dom";

import ButtonPrimary from "./ButtonPrimary";

const BlogCard = (props) => {
  return (
    <>
      <div className="w-60 sm:w-full bg-white border border-gray-200 rounded shadow p-[10px]">
        <img
          className="rounded-t-sm object-cover"
          src={props?.image}
          alt="blogpost"
        />
        <section className="py-[10px]">
          <Link to="/">
            <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900">
              {props.title}
            </h5>
          </Link>
          <p className="mb-3 text-base font-normal text-gray-700">
            {props.content}
          </p>
          <Link to={`/blogs/${props.id}`}>
            <ButtonPrimary text="Read more" maxLength={50} />
          </Link>
        </section>
      </div>
    </>
  );
};

export default BlogCard;
