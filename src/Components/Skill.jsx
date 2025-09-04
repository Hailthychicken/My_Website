import React from "react";

const Skill = ({ name }) => {
  return (
    <li className="h-[100%] w-[4rem] sm:w[8rem] flex items-center justify-center flex-shrink-0">
      <h1 className="cursor-pointer hover:-translate-y-1">{name}</h1>
    </li>
  );
};

export default Skill;
