import React from "react";

const Project = ({ title, description, link, coverimage }) => {
  return (
    <li className="w-full h-full flex-shrink-0 flex items-center justify-center ">
      <div className="w-[50vw] h-[80%] flex-col flex items-center p-4">
        <h1 className="text-[3vw] mb-1 md:mb-2 md:text-[3.8vw] lg:mb-3 lg:text-[4vw] xl:text-[5vw] xl:mb-6">
          {title}
        </h1>
        <h1 className="text-[1.2vw] mb-1.5 md:mb-5 md:text-[1.4vw] lg:mb-7.5 lg:text-[1.5vw]">
          {description}
        </h1>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full w-[20%] h-[15%] border-3 border-solid border-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-300 hover:w-[21%]"
        >
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-[1.2vw]">View</h1>
          </div>
        </a>
      </div>

      <div className="w-[45vw] h-[30vw]  flex items-center justify-center">
        <div className="w-[90%] h-[90%] ">
          <img className="w-full h-full " src={coverimage} alt="" />
        </div>
      </div>
    </li>
  );
};

export default Project;
