import React from "react";

const Social = ({ link, image }) => {
  return (
    <>
      <li className="h-[100%] hover:-translate-y-2 transition ease-in-out duration-200">
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
