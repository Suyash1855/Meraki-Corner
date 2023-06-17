import React from "react";
import { products } from "@/Const";
import numeral from "numeral";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../Slices/basketSlice";
import { Carousel } from "react-responsive-carousel";
import { tick } from "../../public/images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { close } from "../../public/images";
// Modal component

function Shop({ id, title, price, discription, category, image, slideData }) {
  const Modal = ({ message }) => (
    <div className="modal fixed h-[60px] w-[150px] text-white shadow-2xl justify-center items-center z-[1001] bg-black rounded-md left-4  bottom-4">
      <div className=" modal-content p-5">
        <Image
          className="w-2 h-2 top-2 right-2 flex justify-end absolute"
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
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleSlideChange = (index) => {
    index === slideData.length - 1 ? setActiveSlide(0) : setActiveSlide(index);
  };

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      discription,
      category,
      image,
      slideData,
    };
    dispatch(addToBasket(product));
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };
  return (
    <div
      key={id}
      className="p-5 flex flex-col bg-white mx-5 rounded-md px-5 mb-8 min-w-[200px] w-[390px] max-h-[700px]  shadow-md"
    >
      <Carousel
        selectedItem={activeSlide}
        onChange={handleSlideChange}
        showThumbs={false}
        className=" mb-4 "
      >
        {slideData.map((slide, index) => (
          <Image
            key={index}
            className="max-w-[350px] max-h-[350px]"
            src={slide.image}
            alt={slide.alt}
          />
        ))}
      </Carousel>
      <div className="flex text-xl font-medium justify-between items-center mb-2 ">
        {title}
        <h3 className=" text-[15px] text-slate-600 ">
          &#8377;{numeral(price).format("0,0.00")}
        </h3>
      </div>

      <button
        onClick={addItemToBasket}
        className="px-4 flex  justify-center py-2 text-xs border text-black "
      >
        Add to basket
      </button>
      {showModal && <Modal message="Added !" />}
    </div>
  );
}

export default Shop;
