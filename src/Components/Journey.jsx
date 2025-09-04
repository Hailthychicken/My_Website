import React from "react";
import journey from "../Journey.json";
import Journeyitem from "./Journeyitem";
import { useState } from "react";
const Journey = () => {
  const [journeyitem, setjourneyitem] = useState([]);
  return (
    <div className="w-full sm:w-[50%] sm:h-full h-[50%] xl:w[45%]  px-4 flex flex-col items-center justify-evenly ">
      {journey.map((item) => (
        <Journeyitem
          key={item.id}
          imageName={item.image_black}
          title={item.name}
          year={item.year}
        />
      ))}
    </div>
  );
};

export default Journey;
