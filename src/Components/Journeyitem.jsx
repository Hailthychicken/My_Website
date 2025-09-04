import React from "react";

const Journeyitem = ({ imageName, title, year }) => {
  return (
    <div className="flex items-center justify-evenly h-[10%] w-[90%] ">
      <img className=" h-[100%] w-[10%] " src={imageName} alt="" />
      <h1 className="text-[2.8vw] sm:text-[1.5vw]">{title}</h1>
      <h1 className="text-[2.8vw] sm:text-[1.5vw]">{year}</h1>
    </div>
  );
};

export default Journeyitem;
