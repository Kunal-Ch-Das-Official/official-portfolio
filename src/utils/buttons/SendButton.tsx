import React from "react";

interface ButtonProps {
  buttonType: "submit" | "reset" | "button" | undefined;
  buttonText: string;
  clickEventHandler?: () => void | undefined;
}
const SendButton: React.FC<ButtonProps> = ({
  buttonType,
  buttonText,
  clickEventHandler,
}) => {
  return (
    <button
      aria-label={buttonText}
      type={buttonType}
      onClick={clickEventHandler}
      className="flex gap-2 items-center  h-10 border-orange-400 border shadow-xl text-md bg-orange-500 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700  before:-right-full before:rounded-lg before:bg-gray-50  before:-z-10 before:aspect-square   relative z-10 px-4 py-2 overflow-hidden rounded-lg group
      
      lg:before:hover:duration-700 lg:hover:text-gray-700 lg:before:hover:w-full lg:before:hover:scale-150
      lg:before:hover:right-0  
      
      "
    >
      {buttonText}
      <svg
        className="w-[1.70rem] h-[1.70rem] justify-end lg:group-hover:rotate-90 lg:group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 lg:group-hover:border-none p-2 rotate-45"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-800 lg:group-hover:fill-gray-800"
        />
      </svg>
    </button>
  );
};

export default SendButton;
