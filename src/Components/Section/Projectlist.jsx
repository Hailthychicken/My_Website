import React, { useState } from "react";
import Project from "./Project";

const Projectlist = ({ projects }) => {
  const [projectIndex, setProjectIndex] = useState(0);

  function nextproject() {
    setProjectIndex((index) => (index === projects.length - 1 ? 0 : index + 1));
  }

  function previousproject() {
    setProjectIndex((index) => (index === 0 ? projects.length - 1 : index - 1));
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <ul
        className={`flex items-center h-full transition-transform duration-300`}
        style={{ transform: `translateX(-${100 * projectIndex}%)` }}
      >
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            coverimage={project.coverimage}
          />
        ))}
      </ul>

      <button
        onClick={nextproject}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-500 px-4 py-2 rounded-full h-[3.5vw] w-[3.5vw] flex items-center justify-center hover:bg-gray-300 active:bg-gray-500 "
      >
        <img src="/right-arrow.svg" alt="" srcset="" />
      </button>

      <button
        onClick={previousproject}
        className="absolute left-2 top-1/2 bg-gray-500 -translate-y-1/2 z-10  px-4 py-2 rounded-full h-[3.5vw] w-[3.5vw] flex items-center justify-center hover:bg-gray-300 active:bg-gray-500  "
      >
        <img className="w-full h-full" src="/left-arrow.svg" alt="" srcset="" />
      </button>
    </div>
  );
};

export default Projectlist;
