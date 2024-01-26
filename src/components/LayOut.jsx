import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LayOut({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default LayOut;
