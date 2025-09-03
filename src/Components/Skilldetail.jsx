import React from "react";

const Skilldetail = ({ selectedSkill, isActive }) => {
  return (
    <span
      className={`${
        isActive ? "w-[300px] border-2 border-solid border-black p-4" : "hidden"
      }`}
    >
      <h1> Skill: {selectedSkill.name}</h1>
      <h1> Year: {selectedSkill.years} years</h1>
      <h1> Proficiency: {selectedSkill.proficiency}</h1>
    </span>
  );
};

export default Skilldetail;
