import React from "react";

const Project = ({ title, description, link, coverimage }) => {
  return (
    <li className="w-full h-full flex-shrink-0 flex items-center justify-center">
      <div className="w-[50vw] h-full flex-col flex items-center p-4">
        <h1 className="text-[3vw] mb-6">{title}</h1>
        <h1 className="text-[1.2vw] mb-10">{description}</h1>
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

      <div className="w-[40vw] h-[90%] flex items-center justify-center border-2 border-solid border-black">
        <img className="w-full h-full object-cover" src={coverimage} alt="" />
      </div>
    </li>
  );
};

export default Project;
