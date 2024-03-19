import React from "react";
import Product from "./Product";
import { FARM_URL } from "../../apis/Api";

function Home() {
  return (
    <div>
      <Product
        isFrom="government"
        dataUrl={FARM_URL.govProduct}
        catUrl={FARM_URL.govProductCat}
      />
    </div>
  );
}

export default Home;
