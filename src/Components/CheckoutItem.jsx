import React from "react";
import Image from "next/image";
import { removeFromBasket } from "@/Slices/basketSlice";
import { useDispatch } from "react-redux";
import numeral from "numeral";

function CheckoutItem({ id, price, discription, category, title, image }) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div key={id} className="grid grid-cols-5">
      <img
        src={image}
        objetctFit="contain"
        className=""
        height={200}
        width={200}
        alt=""
      />
      {/* <Image className="w-15 h-15" height={200} width={200} src={image} /> */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <p className="text-xs my-2 line-clamp-3">{discription}</p>
        <p>{category}</p>
        <p>&#8377;{numeral(price).format("0,0.00")}</p>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end items-center">
        <button
          className="button mt-auto bg-slate-300 sm:w-40 sm:h-10 w-auto text-sm lg:text-md rounded-lg hover:bg-slate-400"
          onClick={removeItemFromBasket}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
