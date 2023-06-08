import React from "react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/Const";
// import { logo, menu, close, basket } from "../public/images";
import { logo, menu, close, basket, logout } from "../../public/images";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { selectItems } from "../Slices/basketSlice";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const items = useSelector(selectItems);
  const [drop, setDrop] = useState(false);
  const dropdown = () => {
    setDrop(!drop);
  };

  return (
    <nav className="bg-[#F4E7D5] flex items-center  text-[#63341C]   sm:px-16 6 px-6 w-full h-[80px] z-[1000]  ">
      <div className="flex lg:w-1/3 w-full justify-between h-full  items-center max-w-6xl mx-auto ">
        <Image
          src={logo}
          className="w-[160px] h-[50px] bg-[#F4E7D5] object-contain "
          alt=""
        />
      </div>
      <ul className="w-1/3 list-none items-center  h-full justify-center hidden lg:flex flex-row gap-5 lg:gap-12 ">
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => setActive(link.title)}
            className={`${
              active === link.title ? "text-black inline  " : "text-[#63341C] "
            } font-medium cursor-pointer text-[18px] inline`}
          >
            {link.id === "Home" ? (
              <Link href="/">{link.title}</Link>
            ) : (
              <Link href={`${link.id}`}>{link.title}</Link>
            )}
          </li>
        ))}
      </ul>
      <div className="lg:flex w-1/3 gap-8 h-[50px] hidden justify-end items-center">
        <li
          onClick={session ? dropdown : signIn}
          className="text-[#63341C]  relative font-medium list-none cursor-pointer text-[18px] text-center"
        >
          {" "}
          {session ? "Account" : "Login"}
          {session ? (
            <ul
              className={`${
                drop ? "block" : "hidden"
              } p-5  bg-white shadow-lg min-w-[110px] z-[100] rounded-md absolute left-[-50%] top-[40px] `}
            >
              <li className="flex flex-col justify-start text-left text-[16px] items-start  ">
                <span className="text-[12px]">Hello ,</span> {session.user.name}{" "}
              </li>
              <li
                onClick={signOut}
                className="text-[#63341C]  text-[15px] flex items-center gap-1 mt-3 "
              >
                <Image src={logout} className="w-4 h-4" alt="logout" /> Logout
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <Link href="/Check">
          <Image
            src={basket}
            width={100}
            height={100}
            className="w-9  h-9 object-contain relative"
            alt="basket"
          />
          <div className="bg-white absolute top-[14px] right-[60px] rounded-full h-5 w-5 flex items-center justify-center">
            <p className="text-black">{items.length}</p>
          </div>
        </Link>
      </div>
      <div className="lg:hidden flex justify-end items-center">
        <Image
          width={100}
          height={100}
          src={menu}
          alt="menu"
          className="w-[28px] h-[28px] z-52 object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } z-51 rounded-xl absolute right-2 top-[60px] flex flex-col justify-center w-[160px] bg-white shadow-lg z-[1000]`}
        >
          <ul className=" list-none p-10 flex flex-col gap-5 items-center justify-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-black" : "text-[#63341C] "
                } font-medium cursor-pointer text-[18px]`}
              >
                {link.id === "Home" ? (
                  <Link href="/">{link.title}</Link>
                ) : (
                  <Link href={`${link.id}`}>{link.title}</Link>
                )}
              </li>
            ))}
            <li
              onClick={session ? dropdown : signIn}
              className="text-[#63341C]  account relative font-medium cursor-pointer text-[18px] text-center"
            >
              {" "}
              {session ? `Account` : "Login"}
              {session ? (
                <ul
                  className={`${
                    drop ? "block" : "hidden"
                  } p-5  bg-gray-100 min-w-[110px] rounded-md absolute top-[-50px] right-[100px] `}
                >
                  <li className="flex flex-col justify-start text-left text-[16px] items-start  ">
                    <span className="text-[12px]">Hello ,</span>{" "}
                    {session.user.name}{" "}
                  </li>
                  <li
                    onClick={signOut}
                    className="text-[#63341C]  text-[15px] flex items-center gap-1 mt-3 "
                  >
                    <Image src={logout} className="w-4 h-4" alt="logout" />{" "}
                    Logout
                  </li>
                </ul>
              ) : (
                " "
              )}
            </li>
            <Link href="/Check">
              <Image
                src={basket}
                width={100}
                height={100}
                className="w-9 h-9 object-contain relative"
                alt=""
              />
              <div className="bg-gray-200 absolute bottom-[63px] right-[53px] rounded-full h-5 w-5 flex items-center justify-center">
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
