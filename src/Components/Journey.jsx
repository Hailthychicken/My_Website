import React from "react";
import journey from "../Journey.json";
import Journeyitem from "./Journeyitem";
import { useState } from "react";
const Journey = () => {
  const [journeyitem, setjourneyitem] = useState([]);
  return (
    <div className="w-[45vw] h-full  p-4 flex items-center justify-center">
      <div className="flex flex-col gap-15 w-full h-[70%] ">
        {journey.map((item) => (
          <Journeyitem
            key={item.id}
            imageName={item.image_black}
            title={item.name}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Journey;
