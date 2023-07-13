import React from "react";
import { test, insta, facebook, mail, twitter } from "../../public/images";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <div
        id="footer"
        className="bg-transparent mt-[100px] text-black justify-evenly relative w-100 h-[250px] z-[101] p-5 flex  items-center"
      >
        <div className="justify-center flex flex-col z-[100] items-center">
          <h2 className="lg:text-[35px] sm:text-[23px] text-[18px]  mb-1">
            The Meraki Corner
          </h2>
          <p className="text-xs lg:text-[16px] md:block hidden lg:min-w-[500px] text-center mb-6">
            Feel free to connect with us on any of the given platforms!
          </p>
          <div className="cursor-pointer gap-[9px] flex md:gap-10 ">
            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/themerakicorner/",
                  "blank"
                )
              }
            >
              <Image
                className="md:w-7 md:h-7 w-5 h-5"
                src={insta}
                alt="insta"
              />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://twitter.com/themerakicorner?t=m1XsG_7zgVKQDkMOjXjweA&s=08",
                  "blank"
                )
              }
            >
              <Image
                className="md:w-7 md:h-7 w-5 h-5"
                src={twitter}
                alt="twitter"
              />
            </div>{" "}
            <div
              onClick={() =>
                window.open("mailto:themerakicorner25@gmail.com", "blank")
              }
            >
              <Image className="md:w-7 md:h-7 w-5 h-5" src={mail} alt="email" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[10px] gap-[5px] md:gap-[10px] items-center text-[10px] md:text-[15px] text-black">
          <Link className="hover:underline" href="/customer_support">
            <div>Customer support </div>
          </Link>
          <Link className="hover:underline" href="/terms">
            <div>Terms Of Service </div>
          </Link>
          <Link className="hover:underline" href="/privacy_policy">
            <div>Privacy Policy </div>
          </Link>
          <Link className="hover:underline" href="/cancellation">
            <div>Cancellation & Refund Policy</div>
          </Link>
        </div>
      </div>
      <div className="w-full text-black flex justify-center pb-4 items-end bg-gradient-to-t mt-[-220px] from-[#F4E7D5] to-[#ffffff] h-[250px] bg-[#F4E7D5]">
        <p className="">
          Copywrite @{currentYear}. Developed by{" "}
          <span
            className="cursor-pointer hover:underline font-medium"
            onClick={() =>
              window.open(
                "https://portfolio-website-nu-liart.vercel.app/",
                "blank"
              )
            }
          >
            SUYASH
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
// F8F4E3
// F4E7D5
// FFF8F8
