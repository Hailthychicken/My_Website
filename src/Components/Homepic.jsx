import React from "react";
import Profilepic from "./assets/graduation_bear.png";

const Homepic = () => {
  return (
    <>
      <div className="w-[50%] h-[100%]  flex items-center justify-center">
        <img className="h-[100%]" src={Profilepic} alt="Home" />
      </div>
    </>
  );
};

export default Homepic;
