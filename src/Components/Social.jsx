import React from "react";

const Social = ({ link, image }) => {
  return (
    <>
      <li className="h-[100%]">
        <a
          className="flex items-center justify-center h-[100%]"
          href={link}
          target="_blank"
        >
          <img className="h-full" src={image} alt={link.name} />
        </a>
      </li>
    </>
  );
};

export default Social;
