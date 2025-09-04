import React from "react";
import { useState } from "react";
import menu from "../assets/icons8-menu.svg";

const Navlist = () => {
  const [navlink, setNavlink] = useState([
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  function handlemenu() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      <ul className=" md:flex align-center justify-center gap-10 text-lg font-medium hidden">
        {navlink.map((link) => (
          <li
            key={link.name}
            className=" hover:-translate-y-1 hover:cursor-pointer"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="md:hidden h-[45%] w-[10%] sm:w-[6%] sm:h-[50%] mr-5 flex items-center justify-start flex-col relative">
        <img
          className="w-full h-full mb-[5vw]"
          src={menu}
          alt=""
          onClick={handlemenu}
        />
        <ul
          className={`${
            isOpen
              ? "flex flex-col items-center justify-evenly w-[20vw] h-[15vw] rounded-2xl bg-white border-2 border-black absolute  top-[100%]"
              : "hidden"
          }`}
        >
          {navlink.map((link) => (
            <li
              key={link.name}
              className=" hover:-translate-y-1 hover:cursor-pointer h-[25%] w-full flex items-center justify-center   "
            >
              <a
                href={link.href}
                className="font-semibold text-[0.4rem] xs:text-[0.6rem] sm:text-[0.7rem] w-full h-full flex items-center justify-center hover:bg-gray-200 active:bg-gray-100 "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navlist;
