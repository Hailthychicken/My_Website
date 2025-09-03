import React from "react";
import Homepic from "../Homepic";
import Hometext from "../Hometext";
const Home = () => {
  return (
    <section id="home" className="h-[60vh]">
      <div className="w-full h-full flex items-center justify-center mt-[9vh]">
        <Hometext />
        <Homepic />
      </div>
    </section>
  );
};

export default Home;
