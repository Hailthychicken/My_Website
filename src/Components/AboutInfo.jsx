import React from "react";

const AboutInfo = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-[50%] xl:w-[45%]  sm:w-[50%] sm:h-full ">
      <h1 className="text-[1rem] sm:text-[1.4rem] lg:text-[1.8rem] xl:text-[2.5rem] font-bold mb-4">
        About Me
      </h1>

      <p className="text-[0.5rem] sm:text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] text-justify px-4">
        I started my journey in game development with Unity and Godot, where I
        learned to blend creativity and code. From there, I moved into app
        development, building tools that are both functional and user-friendly.
        During my time as a Master's student at Brooklyn College, I focused on
        web development, bringing together my experience in games and apps to
        create modern, scalable projects.
      </p>
    </div>
  );
};

export default AboutInfo;
