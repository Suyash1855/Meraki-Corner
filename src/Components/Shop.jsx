import React from "react";
import { products } from "@/Const";
import numeral from "numeral";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../Slices/basketSlice";

function Shop({ id, title, price, discription, category, image }) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      discription,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div
      key={id}
      className="p-5 flex flex-col bg-white mx-5 rounded-xl w-full md:w-1/4 lg:w-1/5 px-4 mb-8 min-w-[200px] max-h-[400px] max-w-[250px]"
    >
      <img className="rounded-xl" src={image} alt="img" />
      <h2>{title}</h2>
      <h2>{discription}</h2>
      <h3>&#8377;{numeral(price).format("0,0.00")}</h3>
      <p>{category}</p>
      <button onClick={addItemToBasket}>Add to basket</button>
    </div>
  );
}

export default Shop;
