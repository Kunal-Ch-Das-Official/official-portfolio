// import React from "react";
import React from "react";
import { FiMenu } from "react-icons/fi";
interface MobileNavProps {
  opnCloseHandler: () => void;
  isSidebarVisable: boolean;
}
const MobileNav: React.FC<MobileNavProps> = ({
  opnCloseHandler,
  isSidebarVisable,
}) => {
  return (
    <nav
      className={`${
        isSidebarVisable === true && "hidden"
      } pt-2 pl-2 fixed top-0 left-0  bg-white shadow-md z-[1000]
         items-center justify-between pr-10 border-b-[1px] border-gray-200 pb-2 w-full md:hidden`}
    >
      <div className=" inline-flex items-center ">
        <FiMenu
          className="text-[1.6rem] font-bold text-gray-700 hover:text-black cursor-pointer transition-transform hover:scale-125 "
          onClick={opnCloseHandler}
        />
      </div>
    </nav>
  );
};

export default MobileNav;
