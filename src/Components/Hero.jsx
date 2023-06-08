import React from "react";
import Navbar from "./Navbar";
import Shop from "./Shop";
import { useState } from "react";

function Hero() {
  const [count, setCtn] = useState(0);

  const basketIncrement = () => {
    setCtn(count + 1);
    console.log("Added to cart");
  };

  return (
    <div className=" flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar count={count} />
      <Shop increment={basketIncrement} />
    </div>
  );
}

export default Hero;
