import React from "react";
import Projectlist from "./Projectlist";
import Projectdata from "../../Projects.json";
import { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(Projectdata || []);
  return (
    <section id="projects" className="h-[80vh] w-[100%] bg-red-500">
      <div className=" h-[100%] flex flex-col items-center justify-evenly">
        <div className="w-[20%] h-[20%] flex items-center justify-center  mb-10">
          <h1 className="text-[3.5vw] font-bold text-center">Projects</h1>
          <div className="h-full w-full  flex items-end justify-center ">
            <img className=" h-[50%]" src="/arrow_brd_black.svg" alt="" />
          </div>
        </div>

        <Projectlist projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
