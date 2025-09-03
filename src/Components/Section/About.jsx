import React from "react";
import Journey from "../Journey";
import AboutInfo from "../AboutInfo";

const About = () => {
  return (
    <section id="about" className="h-[60vh] border-b border-gray-300 mb-10">
      <div className="w-full h-full  flex items-center justify-center">
        <Journey />
        <AboutInfo />
      </div>
    </section>
  );
};

export default About;
