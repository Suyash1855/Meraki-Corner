import React from "react";
import { useSelector } from "react-redux";
import numeral from "numeral";
import { selectItems, selectPrice } from "@/Slices/basketSlice";
import CheckoutItem from "./CheckoutItem";
import Navbar from "./Navbar";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectPrice);
  return (
    <div className="bg-gray-100">
      <main className=" text-black lg:flex flex-row max-w-screen-2xl mx-auto ">
        <div className="flex-grow m-5 shadow-sm">
          <img
            objectFit="contain"
            width={1500}
            src="https://links.papareact.com/ikj"
          />
          <div className="flex flex-col p-5 space-y-10  bg-white">
            <h2 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Basket is empty " : "Your Basket"}
            </h2>

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
          </div>
        </div>
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            {items.length > 0 && (
              <>
                <h2 className="whitespace">
                  Subtotal({items.length} items):
                  <span className="font-bold">&#8377;{total}</span>
                </h2>
                <button>Proceed To Checkout</button>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Checkout;
