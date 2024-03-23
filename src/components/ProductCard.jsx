import React from "react";

export default function ProductCard({ products, ...props }) {

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }

  // Check if products and images array exist
  const imageSource = products?.images?.length ? products.images[0] : "";

  return (
    // <div className="cardContainer p-2 w-300">
    //   <a
    //     href={`/product-detail?id=${products.id}`}
    //     className="text-decoration-none"
    //   >
    //     <div className="imageWrapper text-center mb-10 h-200 w-300">
    //       <img
    //         className="object-cover"
    //         height="300px"
    //         width="350px"
    //         src={products?.image}
    //         alt={products?.title}
    //       />
    //     </div>
    //     <h5 className="price text-orange-500 font-bold">
    //       Rs.{products?.price}
    //     </h5>
    //     <h5 className="title text-gray-700 font-bold leading-5">
    //       {products?.title}
    //     </h5>
    //     <p className="description text-gray-500 text-sm leading-5">
    //       {truncate(products?.description, 42)}
    //     </p>
    //   </a>
    //   <hr />
    // </div>
  );
}
