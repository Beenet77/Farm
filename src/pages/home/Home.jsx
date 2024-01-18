import React from "react";
import Product from "./Product";
// import Cart from "./Cart";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useGlobalUserAuth } from "../../context/userAuthContext";

function Home() {
  const { loginUser, setLoginUser } = useGlobalUserAuth();
  console.log(loginUser);

  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </div>
  );
}

export default Home;
