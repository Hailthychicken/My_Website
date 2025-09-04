import React from "react";
import Homepic from "../Homepic";
import Hometext from "../Hometext";
const Home = () => {
  return (
    <section id="home" className="mt-[9vh] ">
      <div className="w-full h-full flex sm:flex-row flex-col items-center justify-center ">
        <Hometext />
        <Homepic />
      </div>
    </section>
  );
};

export default Home;
