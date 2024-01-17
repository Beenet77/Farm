import React from "react";
import Product from "./Product";
// import Cart from "./Cart";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Home() {
  

  
  return (
    <div>
      <Navbar />
      <Product />
      <Footer/>
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </div>
  );
}

export default Home;