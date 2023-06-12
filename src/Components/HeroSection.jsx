import React from "react";
import Image from "next/image";
import {
  ButterFly,
  ButterFly1,
  img2,
  gift,
  variety,
  handmade,
  diamond,
} from "../../public/images";
// import { Greatvibes } from "@next/font/google";

// const greatVibes = Greatvibes({
//   subsets: ["cursive"],
//   weight: ["400"],
// });

function HeroSection() {
  return (
    <main>
      <div className=" bg-[#F4E7D5] relative mt-[0px] text-white justify-center lg:h-[640px] w-full items-center flex flex-col lg:flex-row">
        <div className="md:hidden  w-full h-[200px] z-0">
          <Image
            className="lg:w-[600px] lg:h-[590px] w-full h-full"
            src={ButterFly1}
            alt="butterfly"
          />
        </div>
        <div className="hidden md:block lg:w-[739px] w-full  lg:h-full md:h-[400px] z-0">
          <Image className=" w-full h-full" src={ButterFly} alt="butterfly" />
        </div>
        <div className="rounded-tl-[200px] min-w-[220px] min-h-[250px] rounded-tr-[200px] border-[#F4E7D5] lg:mt-[0px] md:mt-[-100px] mt-[-50px] lg:border-[15px] border-[8px] lg:ml-[-100px]  lg:w-1/3  z-[2] ">
          <Image
            className="rounded-tl-[200px] min-w-[220px] min-h-[270px] rounded-tr-[200px] lg:w-[350px] lg:h-[400px] md:w-[400px] md:h-[400px] w-[200px] h-[240px]  "
            src={img2}
            alt="img"
          />
        </div>
        <div className=" justify-center items-center text-center md:text-start lg:w-2/3 w-full text-[#63341C] font-quattrocento h-full flex z-20 ">
          <div className=" lg:text-[70px] md:text-[60px]  font-extralight text-[40px]">
            <p className="">
              <span className="text-[#63341C] md:text-[80px] text-[55px] font-bold font-oswald">
                Making
              </span>{" "}
              it an
            </p>
            <p className="mt-[-16px]">
              easy{" "}
              <span className="text-[#63341C] md:text-[80px] text-[55px]  font-bold font-oswald">
                gifting
                <br />
              </span>{" "}
            </p>
            <p className="mt-[-5px]">without fuss and chaos!</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b mb-[-600px]  from-[#F4E7D5] to-[#ffffff] h-[600px]"></div>
      <h1 className="text-black text-[50px] text-center  mt-[120px]">
        What we do!
      </h1>
      <div className="flex  flex-wrap text-black gap-6 lg:gap-[100px] items-center justify-center mt-[60px]">
        <div className="flex sm:pl-0 pl-[25px] sm:flex-col sm:justify-center items-center  gap-3 w-full sm:w-[200px]">
          <div className="md:h-[200px] md:w-[200px] h-[100px] flex justify-center items-center w-[100px] rounded-full bg-[#b9c6d9]">
            <Image
              className="md:w-[84px] md:h-[84px] w-[60px] h-[60px]"
              alt="gift"
              src={gift}
            />
          </div>
          <p className="max-w-[200px] font-oswald lg:text-[16px] text-center">
            One stop solution to all your handmade gifting curiosity.
          </p>
        </div>
        <div className="flex sm:pl-0 pr-[25px] justify-end sm:flex-col sm:justify-center items-center  gap-3 w-full sm:w-[200px]">
          <p className="max-w-[200px] font-oswald  lg:text-[16px]  text-center">
            Provide wide variety of personalized and unique gifts.
          </p>
          <div className="md:h-[200px] md:w-[200px] h-[100px] w-[100px] rounded-full flex justify-center items-center  bg-[#b9c6d9]">
            <Image
              className="md:w-[84px] md:h-[84px] w-[60px] h-[60px]"
              alt="gift"
              src={variety}
            />
          </div>
        </div>
        <div className="flex sm:pl-0 pl-[25px] sm:flex-col sm:justify-center items-center  gap-3 w-full sm:w-[200px]">
          <div className="md:h-[200px] md:w-[200px] h-[100px] w-[100px] rounded-full flex justify-center items-center  bg-[#b9c6d9]">
            <Image
              className="md:w-[84px] md:h-[84px] w-[60px] h-[60px]"
              alt="gift"
              src={diamond}
            />
          </div>
          <p className="max-w-[200px] font-oswald lg:text-[16px]  text-center">
            Work on your products beyond your expectations with quality
            cutomization.{" "}
          </p>
        </div>
        <div className="flex sm:pl-0 pr-[25px] justify-end sm:flex-col sm:justify-center items-center  gap-3 w-full sm:w-[200px]">
          <p className="max-w-[200px] font-oswald lg:text-[16px] text-center">
            All the products are handcraft with immmense love and creativity.
          </p>
          <div className="md:h-[200px] md:w-[200px] h-[100px] w-[100px] rounded-full flex justify-center items-center  bg-[#b9c6d9]">
            <Image
              className="md:w-[84px] md:h-[84px] w-[60px] h-[60px]"
              alt="gift"
              src={handmade}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-[100px] items-center justify-center text-black mt-[30px] text-center"></div>
    </main>
  );
}

export default HeroSection;
