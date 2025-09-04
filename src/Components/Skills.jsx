import React, { useState, useEffect, useMemo } from "react";
import Skill from "./Skill";
import skillsData from "../skills.json";
import Skilldetail from "./Skilldetail";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState({});
  const [className, setClassName] = useState(
    " w-[300px] border-2 border-solid border-black p-4 hidden"
  );
  function displaySkillDetails(element) {
    element.isActive = true;
  }
  function undisplaySkillDetails(element) {
    element.isActive = false;
  }

  const skills = useMemo(() => skillsData, []);

  return (
    <>
      <div className="w-full">
        <ul className="skills-scrollbar flex items-center justify-start w-full h-full overflow-x-auto gap-8 sm:gap-12 lg:gap-15 xl:gap-18">
          {skills.map((item) => (
            <Skill
              key={item.name}
              name={item.name}
              years={item.years}
              displaySkillDetails={() => displaySkillDetails(item)}
              undisplaySkillDetails={() => undisplaySkillDetails(item)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
