import React from "react";
import Product from "./Product";
// import Cart from "./Cart";
import { useGlobalUserAuth } from "../../context/userAuthContext";

function Home() {
  const { loginUser, setLoginUser } = useGlobalUserAuth();
  console.log(loginUser);

  return (
    <div>
      <Product />

      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </div>
  );
}

export default Home;
