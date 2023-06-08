import React from "react";
import { test, insta, facebook, mail, twitter } from "../../public/images";
import Image from "next/image";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div
      id="footer"
      className="bg-white mt-[100px] text-black relative w-100 h-[250px] p-5 flex flex-col items-center"
    >
      <h2 className="lg:text-[35px] text-[30px] mb-1">The Meraki Corner</h2>
      <p className="text-xs lg:text-[16px] lg:min-w-[500px] text-center mb-6">
        Feel free to connect with me on any of the given platforms!
      </p>
      <div className="cursor-pointer flex gap-10">
        <div
          onClick={() =>
            window.open("https://www.instagram.com/themerakicorner/", "blank")
          }
        >
          <Image className="w-7 h-7" src={insta} alt="insta" />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://twitter.com/themerakicorner?t=m1XsG_7zgVKQDkMOjXjweA&s=08",
              "blank"
            )
          }
        >
          <Image className="w-7 h-7" src={twitter} alt="twitter" />
        </div>{" "}
        {/* <div
          onClick={() =>
            window.open("https://www.instagram.com/themerakicorner/", "blank")
          }
        >
          <Image className="w-7 h-7" src={facebook} alt="facebook" />
        </div>{" "} */}
        <div
          onClick={() =>
            window.open("mailto:themerakicorner25@gmail.com", "blank")
          }
        >
          <Image className="w-7 h-7" src={mail} alt="email" />
        </div>
      </div>
      <div className="w-full h-[50px] absolute bottom-0 text-black flex justify-center items-center bg-[#F4E7D5]">
        <p>
          Copywrite @{currentYear}. Developed by{" "}
          <span
            className="cursor-pointer font-medium"
            onClick={() =>
              window.open("https://www.instagram.com/themerakicorner/", "blank")
            }
          >
            SUYASH
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
// F8F4E3
// F4E7D5
// FFF8F8
