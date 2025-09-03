import React from "react";
import { useState } from "react";

const Navlist = () => {
  const [navlink, setNavlink] = useState([
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]);
  return (
    <>
      <ul className=" lg:flex align-center justify-center gap-10 text-lg font-medium sm:hidden">
        {navlink.map((link) => (
          <li
            key={link.name}
            className=" hover:border-b-3 hover:cursor-pointer hover:border-blue-500"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navlist;
