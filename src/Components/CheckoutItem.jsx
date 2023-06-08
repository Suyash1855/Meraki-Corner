import React from "react";
import Image from "next/image";
import { addToBasket, removeFromBasket } from "@/Slices/basketSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import numeral from "numeral";
import { tick } from "../../public/images";
import { close } from "../../public/images";
function CheckoutItem({
  id,
  price,
  discription,
  category,
  title,
  image,
  slideData,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };
  const Modal = ({ message }) => (
    <div className="modal fixed h-[60px] w-[150px] text-white  shadow-2xl justify-center items-center z-[1001] bg-[#000000] rounded-md left-4  bottom-4">
      <div className=" modal-content p-5">
        <Image
          className="w-2 h-2 top-2 right-2  flex justify-end absolute"
          src={close}
          alt="close"
          onClick={() => setShowModal(false)}
        />
        <div className="flex justify-center gap-2 items-center">
          <Image className="w-5 h-5" src={tick} alt="tick" />
          <p className="font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
  const [showModal, setShowModal] = useState(false);
  const addItemToBasket = () => {
    const product = {
      id,
      price,
      discription,
      category,
      title,
      image,
      slideData,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div key={id} className="flex  bg-white">
      <Image
        className="w-[126px] h-[126px] md:w-[150px] md:h-[150px]"
        src={slideData[0].image}
        alt={slideData[0].alt}
      />

      <div className=" flex flex-col justify-between lg:mx-5 ml-5 lg:w-[550px]">
        <h4 className="text-[25px] ">
          {title}
          <p className="text-xs font-oswald mt-2 line-clamp-3">{discription}</p>
        </h4>

        <div className="flex mt-4  justify-between items-center">
          <div>
            <button
              className="button border font-bold w-10"
              onClick={removeItemFromBasket}
            >
              -
            </button>
            <button
              className="button border font-bold  w-10"
              onClick={addItemToBasket}
            >
              +
            </button>
          </div>
          <p className="flex justify-center items-end">
            &#8377;{numeral(price).format("0,0.00")}
          </p>
        </div>
      </div>
      {showModal && <Modal message="Removed!" />}
    </div>
  );
}

export default CheckoutItem;
