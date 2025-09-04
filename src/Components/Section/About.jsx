import React from "react";
import Journey from "../Journey";
import AboutInfo from "../AboutInfo";

const About = () => {
  return (
    <section id="about" className="h-[60vh]">
      <div className="w-full h-full  flex flex-col-reverse sm:flex-row items-center justify-center">
        <Journey />
        <AboutInfo />
      </div>
    </section>
  );
};

export default About;
