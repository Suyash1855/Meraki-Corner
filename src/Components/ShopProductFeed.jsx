import React from "react";
import { products } from "@/Const";
import Shop from "./Shop";

function ShopProductFeed() {
  return (
    <main className="">
      <div className="bg-gradient-to-b  mb-[-100px] from-[#F4E7D5] to-[#ffffff] h-[200px]"></div>

      <h1 className="text-black text-center mb-[40px] lg:text-[50px] text-[30px] ">
        All Products
      </h1>
      <div className="relative   bg-[#b9c6d9] h-24">
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
      <div className="flex flex-wrap items-center bg-[#b9c6d9] justify-center p-10 text-black">
        {products.map((product) => (
          <Shop
            key={product.id}
            price={product.price}
            discription={product.discription}
            category={product.category}
            image={product.image}
            title={product.title}
            slideData={product.slideData}
          />
        ))}
      </div>

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
    </main>
  );
}

export default ShopProductFeed;
