import React from "react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/Const";
import { logo, menu, close, basket } from "@/public";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { selectItems } from "../Slices/basketSlice";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const items = useSelector(selectItems);

  return (
    <nav className="bg-white flex items-center shadow top-0 fixed sm:px-16 py-6 px-6 w-full z-50 ">
      <div className="flex w-full justify-between items-center max-w-7xl mx-auto">
        <Image
          src={logo}
          width={100}
          height={100}
          className="w-20 h-9 object-contain"
          alt=""
        />
      </div>
      <ul className=" list-none items-center hidden sm:flex flex-row gap-12">
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => setActive(link.title)}
            className={`${
              active === link.title ? "text-gray-800   " : "text-black"
            } font-medium cursor-pointer text-[18px]`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
        <Link href="/Check">
          <Image
            src={basket}
            width={100}
            height={100}
            className="w-9 mr-10 h-9 object-contain relative"
            alt="basket"
          />
          <div className="bg-gray-200 absolute top-[15px] right-[61px] rounded-full h-5 w-5 flex items-center justify-center">
            <p className="text-black">{items.length}</p>
          </div>
        </Link>
      </ul>
      <div className="sm:hidden flex justify-end items-center">
        <Image
          width={100}
          height={100}
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] z-52 object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-51 rounded-xl absolute right-0 bottom-[-240px] bg-white shadow`}
        >
          <ul className=" list-none p-10 flex flex-col gap-5 items-center justify-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-black" : "text-black"
                } font-medium cursor-pointer text-[18px]`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}{" "}
            <Link href="/Check">
              <Image
                src={basket}
                width={100}
                height={100}
                className="w-9 h-9 object-contain relative"
                alt=""
              />
              <div className="bg-gray-200 absolute bottom-[65px] right-[50px] rounded-full h-5 w-5 flex items-center justify-center">
                <p className="text-black">{items.length}</p>
              </div>
            </Link>
          </ul>
        </div>
      </div>
      {/* <button onClick={()=> setItems(items+1)} className='w-10 h-5'>btn</button> */}
    </nav>
  );
}

export default Navbar;
