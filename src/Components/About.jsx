import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { useState } from "react";
import Footer from "./Footer";

function About() {
  const [showFullContent, setShowFullContent] = useState(true);
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b  mb-[-80px] from-[#F4E7D5] to-[#ffffff] h-[200px]"></div>
      <div className="text-black flex lg:my-[150px] mt-[100px] mb-[100px] lg:flex-row flex-col items-center lg:items-start justify-center gap-20 ">
        <div className="h-[600px] lg:h-[650px]  ">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1604881746800-c6aa1699dcf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwaXJpdHVhbGl0eXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />
        </div>
        <div className="w-[300px] lg:w-[550px]">
          <h1 className="text-[20px]">About Us</h1>
          <h3 className=" font-quattrocento lg:text-[40px] text-[40px] ">
            {" "}
            Welcome to The Meraki Corner!{" "}
          </h3>

          <p className=" mt-5 font-oswald">
            At The Meraki Corner, we believe in the power of love, soul, and
            creativity. My name is Komal Vishwakarma, and I am the proud owner
            of this small business that is fueled by passion and dedication. As
            a one-woman show, I pour my heart and soul into every handmade gift
            item we create.
          </p>
          <p className="mt-5 font-oswald">
            {"   "}
            Meraki, a word that holds a special place in our hearts,
            encapsulates the essence of our work. It signifies doing something
            with pure love, infusing each piece with soulful energy, and
            expressing boundless creativity. Every item you find here is
            meticulously crafted with immense attention to detail, making them
            truly unique and meaningful.
          </p>
          <p className="mt-5 font-oswald">
            {"   "}
            We take great pride in offering a diverse range of handmade gift
            items that are perfect for any occasion. Whether you're looking for
            a thoughtful present for a loved one or a special treat for
            yourself, The Meraki Corner has something just for you. From
            intricately designed jewelry to beautifully crafted home decor, each
            item reflects the love and care put into its creation.
          </p>
          <p className="mt-5 font-oswald">
            {"  "}
            What sets us apart is the personal touch we bring to every order. As
            the sole creator, I am involved in every step of the process,
            ensuring that each item meets our high standards of quality. Your
            satisfaction is of utmost importance to us, and we strive to exceed
            your expectations with every purchase.
          </p>
          {showFullContent ? (
            <p></p>
          ) : (
            <>
              <p className="mt-5 font-oswald">
                We invite you to explore our collection and discover the beauty
                of handmade treasures. By supporting The Meraki Corner, you are
                not only acquiring a truly special piece but also encouraging
                the growth of a small business driven by a deep passion for
                craftsmanship.
                <p className="mt-5 font-oswald">
                  Thank you for visiting The Meraki Corner. We hope our
                  creations bring joy, inspiration, and a touch of magic to your
                  life.
                </p>
                <br /> With love and creativity, <br />
                Komal Vishwakarma
              </p>
            </>
          )}
          <button
            className="mt-2 text-[#512915] font-medium underline"
            onClick={toggleContent}
          >
            {showFullContent ? "Read More" : "Read Less"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
