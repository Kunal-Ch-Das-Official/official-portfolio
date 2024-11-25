import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
type IconTooltip = {
  tooltiptext: string;
  handleClick: () => void;
};
const IconTooltip: React.FC<IconTooltip> = ({ tooltiptext, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center"
    >
      <div
        className="flex justify-center items-center w-8 h-8 rounded-md
       bg-orange-600 transition-all duration-300 absolute top-0 group-hover:scale-105 mb-2
       group-hover:origin-top text-white"
      >
        <IoMdAddCircleOutline className="text-4xl text-black" />
      </div>
      <div
        className="absolute text-white px-4 rounded-lg z-1
       font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap
        transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0"
      >
        {tooltiptext}
      </div>
    </button>
  );
};

export default IconTooltip;
