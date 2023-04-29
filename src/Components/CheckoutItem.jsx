import React from "react";
import Image from "next/image";
import { removeFromBasket } from "@/Slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutItem({ id, price, discription, category, title, image }) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div key={id} className="flex flex-row justify-center items-center my-5">
      <img src={image} height={200} width={200} alt="" srcset="" />
      {/* <Image className="w-15 h-15" height={200} width={200} src={image} /> */}
      <div className="col-sapn-3 mx-5">
        <p>{title}</p>
        <p>{category}</p>
        <p>{price}</p>
        <p className="text-xs line-clamp-3">{discription}</p>
      </div>
      <div className="flex flex-col justify-center items-center  ">
        <button className="button mt-auto" onClick={removeItemFromBasket}>
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
