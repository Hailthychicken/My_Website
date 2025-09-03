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
      <div>
        <ul className="skills-scrollbar flex items-center justify-start w-full h-[10vh] overflow-x-auto gap-4">
          {skills.map((item) => (
            <div key={item.name}>
              <Skill
                name={item.name}
                years={item.years}
                displaySkillDetails={() => displaySkillDetails(item)}
                undisplaySkillDetails={() => undisplaySkillDetails(item)}
              />
              <Skilldetail
                selectedSkill={item}
                classname={className}
                isActive={false}
              />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
