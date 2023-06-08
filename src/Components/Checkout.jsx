import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectPrice } from "@/Slices/basketSlice";
import CheckoutItem from "./CheckoutItem";
import { header } from "../../public/images";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import { arrow } from "../../public/images";
import { useSession } from "next-auth/react";
import axios from "axios";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectPrice);
  const { data: session } = useSession();
  const alertMsg = () => {
    alert("Login to continue");
  };
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });
    // redirecting
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <main className=" ">
      <div className="bg-gradient-to-b  mb-[-500px] from-[#F4E7D5] to-[#ffffff] h-[500px]"></div>

      <div className=" ">
        <main className=" text-black  lg:flex flex-col max-w-screen-md mx-auto ">
          <div className="flex-grow shadow-lg lg:mt-5 mt-[0px] ">
            {/* <Image width={1500} src={header} /> */}
            <div className="flex flex-col p-5 space-y-10  bg-white">
              <h2 className="flex justify-between items-center  text-3xl border-b pb-4">
                {items.length === 0 ? "Cart is empty " : "Your Cart"}
                <Link
                  className="text-[10px] gap-1 flex justify-center items-center"
                  href={"/"}
                >
                  <Image className="lg:w-4 lg:h-4 h-3 w-3" src={arrow} />
                  Back to home page
                </Link>
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
                    slideData={item.slideData}
                  />
                );
              })}
            </div>
          </div>
          {items.length > 0 && (
            <div className="flex flex-col my-5 items-center bg-white p-5 shadow-lg">
              {items.length > 0 && (
                <>
                  <h2 className="whitespace text-center">
                    Subtotal ({items.length}{" "}
                    {items.length === 1 ? "item" : "items"}):{" "}
                    <span className="font-bold">&#8377;{total}</span>
                  </h2>
                  <button
                    className="my-3 border-black border-[1px]  h-[35px] w-[200px]"
                    role="link"
                    onClick={session ? createCheckoutSession : alertMsg}
                  >
                    Proceed To Checkout
                  </button>
                </>
              )}
            </div>
          )}
        </main>
      </div>
    </main>
  );
}

export default Checkout;
