import Navbar from "@/Components/Navbar";
import React from "react";
import Link from "next/link";
import { tick } from "../../public/images";
import Image from "next/image";

function success() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <main className="mt-[100px] text-black max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center items-center p-10 bg-white shadow-md">
          <div className="flex font-medium justify-center gap-3 items-center spacex-2 mb-5">
            <Image className="w-[40px] h-[40px]" src={tick} alt="tick" />
            <h1 className="lg:text-[40px] text-[20px]">
              Thank You , your order has been confirmed !
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We will contact you soon for other
            details. If you would like to see your orders please click the velow
            button.
          </p>
          <Link href="/orders">
            <button className="w-[150px] h-9 mt-[50px] text-center bg-white border-black border-[1px]">
              See your Orders
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default success;
