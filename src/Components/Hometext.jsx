import React from "react";

const Hometext = () => {
  return (
    <div className="w-[50%] h-[70%] flex items-center  flex-col">
      <div className="flex item-center justifiy-center w-[50%]">
        <h1 className="w-full  text-[4.5vw] font-bold ">
          Hello<span className="text-[5.5vw] text-blue-500">.</span>
        </h1>
      </div>

      <div className="w-[100%] flex   ">
        <div className=" w-[30%] border-b-[0.2rem] border-blue-500 box-border"></div>
        <h1 className="text-[2.5vw]">I'm Obioma</h1>
      </div>
      <h1 className="text-[3.5vw] mb-4">I'm a Software engineer</h1>
      <div className="w-[50%] flex items-center justify-around">
        <a
          href="https://github.com/Hailthychicken"
          target="_blank"
          className=" border-2 border-black-500 flex items-center justify-center hover:bg-gray-600"
        >
          <div className="flex items-center justify-center w-[10vw] h-[5vh]">
            Github
          </div>
        </a>
        <a
          href="/Resume.pdf"
          className=" border-2 border-blue-500  flex items-center justify-center hover:bg-blue-300"
          download
        >
          <div className="flex items-center justify-center w-[10vw] h-[5vh]">
            My Resume
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hometext;
