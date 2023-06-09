import React from "react";
import { products } from "@/Const";
import Shop from "./Shop";
import Link from "next/link";

function ProductFeed() {
  return (
    <div className="mt-[100px] bg-[#b9c6d9]">
      <div className="relative mt-[100px] bg-[#b9c6d9] h-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full" style={{ transform: "scaleY(-1)" }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0,30 C150,310 350,0 500,60 L500,150 L0,150 Z"
                style={{ fill: "currentColor" }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex my-[15px] justify-center">
        <h1 className="lg:text-[50px] text-[30px]   text-black">
          Our Customer Favourite
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center  p-10 text-black">
        {products.map((product) =>
          product.id === 1 || product.id === 2 || product.id === 3 ? (
            <Shop
              key={product.id}
              price={product.price}
              discription={product.discription}
              category={product.category}
              image={product.image}
              title={product.title}
              slideData={product.slideData}
            />
          ) : (
            <div></div>
          )
        )}
      </div>
      <Link href="/Shop">
        <div className="flex mt-[-25px] mb-[100px]  justify-center items-center">
          <p className="flex justify-center items-center hover:bg-slate-200 transition-colors duration-300 ease-in-out  text-black border border-black w-[150px] h-[50px]">
            View More
          </p>
        </div>
      </Link>

      <div className="relative rotate-180  bg-[#b9c6d9] h-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full" style={{ transform: "scaleY(-1)" }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0,30 C150,310 350,0 500,60 L500,150 L0,150 Z"
                style={{ fill: "currentColor" }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeed;
