import React from "react";
import Navlist from "./Navlist";
import Navname from "./Navname";
const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <nav className=" h-[9vh] w-full flex items-center justify-between px-10 border-y border-grey-100">
          <Navname />
          <Navlist />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
