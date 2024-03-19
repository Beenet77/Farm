import React from "react";
import Product from "../home/Product";
import { FARM_URL } from "../../apis/Api";

export default function MarketPlace() {
  return (
    <Product
      isFrom="marketplace"
      dataUrl={FARM_URL.marketplace}
      catUrl={FARM_URL.marketplaceCat}
    />
  );
}
