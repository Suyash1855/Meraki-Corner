import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import { selectItems } from "@/Slices/basketSlice";
import CheckoutItem from "./CheckoutItem";
import Navbar from "./Navbar";

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <main className="bg-gray-100 text-black flex min-h-screen flex-col items-center justify-between p-24">
      <h2>{items.length === 0 ? "Your Basket is empty " : "Your Basket"}</h2>
      <div className="bg-white flex flex-col">
        {items.map((item, i) => {
          return (
            <CheckoutItem
              key={i}
              id={item.id}
              price={item.price}
              discription={item.discription}
              category={item.category}
              image={item.image}
              title={item.title}
            />
          );
        })}
        {/* <div className="flex flex-col">
          <div className="flex justify-evenly items-center ">
            <p>Subtotal</p>
            <p>&#8377;{numeral("100").format("0,0.00")}</p>
          </div>
          <div className="flex justify-bwtween items-center ">
            <p>Shipping</p>
            <p>&#8377;{numeral("100").format("0,0.00")}</p>
          </div>
          <div className="flex justify-evenly items-center ">
            <p>Total</p>
            <p>&#8377;{numeral("100").format("0,0.00")}</p>
          </div>
        </div> */}
        <div>
          {items.length > 0 && (
            <>
              <h2 className="whitespace">
                Subtotal({items.length} items):
                <span className="font-bold">505</span>
              </h2>
              <button></button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Checkout;
