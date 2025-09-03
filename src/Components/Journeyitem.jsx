import React from "react";

const Journeyitem = ({ imageName, title, year }) => {
  return (
    <div className="flex items-center justify-evenly ">
      <img className=" h-[100%] w-[10%]" src={imageName} alt="" />
      <h1 className="text-[1vw]">{title}</h1>
      <h1 className="text-[1vw]">{year}</h1>
    </div>
  );
};

export default Journeyitem;
