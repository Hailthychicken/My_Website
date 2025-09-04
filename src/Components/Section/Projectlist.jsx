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
        className="flex items-center h-full transition-transform duration-300"
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
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[url('/right-arrow.svg')] bg-no-repeat bg-center bg-cover py-2 px-2 sm:w-[4vw]  "
      ></button>

      <button
        onClick={previousproject}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[url('/left-arrow.svg')] bg-no-repeat bg-center bg-cover  px-2 py-2 sm:w-[4vw] "
      ></button>
    </div>
  );
};

export default Projectlist;
