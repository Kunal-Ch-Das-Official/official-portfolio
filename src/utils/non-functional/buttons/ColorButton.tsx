import React, { ReactNode } from "react";
interface ButtonProps {
  btnType: "submit" | "reset" | "button" | undefined;
  eventHandler?: (() => void) | undefined;
  btnText: string;
  icon: ReactNode;
}

const ColorButton: React.FC<ButtonProps> = ({
  btnType,
  eventHandler,
  btnText,
  icon,
}) => {
  return (
    <button
      onClick={eventHandler}
      type={btnType}
      className="w-full my-3 text-black bg-[#66b65d] hover:bg-accent-color shadow-md hover:shadow-xl
      focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold
      rounded-lg text-md px-5 py-2 text-center inline-flex 
      justify-center  items-center transform translate-1 hover:scale-95"
    >
      <span>{btnText}</span>
      <span className="text-2xl ml-2">{icon}</span>
    </button>
  );
};

export default ColorButton;
