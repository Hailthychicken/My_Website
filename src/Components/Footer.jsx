import React from "react";
import { useState } from "react";
import Social from "./Social";
import Socials from "../Socials.json";

const Footer = () => {
  const [socialLinks, setSocialLinks] = useState(Socials);
  return (
    <footer className="w-full h-[15vh] bg-black">
      <div className="w-full h-full text-white flex items-center justify-around gap-4">
        <h1 className="text-[2vw] sm:text-[1.5vw] lg:text-[0.8rem]">
          © 2025 ItsObioma. All rights reserved.
        </h1>
        <ul className="flex items-center justify-center w-[30%] sm:w-[20%] h-[20%] gap-4 ">
          {socialLinks.map((link, index) => (
            <Social key={index} link={link.url} image={link.image} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
