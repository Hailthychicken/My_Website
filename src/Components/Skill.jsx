import React from "react";

const Skill = ({ name, years, displaySkillDetails, undisplaySkillDetails }) => {
  return (
    <li className="h-[100%] min-w-[8em] flex items-center justify-center  flex-shrink-0">
      <h1
        className="cursor-pointer  hover:text-[1.5em]"
        onMouseOver={displaySkillDetails}
        onMouseOut={undisplaySkillDetails}
      >
        {name}
      </h1>
    </li>
  );
};

export default Skill;
