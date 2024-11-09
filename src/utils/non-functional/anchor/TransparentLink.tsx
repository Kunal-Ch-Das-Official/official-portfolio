import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TLinkProps {
  path: string;
  linkText: string;
  icon: ReactNode;
}
const TransparentLink: React.FC<TLinkProps> = ({ path, linkText, icon }) => {
  return (
    <Link
      to={path}
      className="w-full my-0 md:my-3 hover:text-gray-700 text-gray-600 bg-white 
       hover:bg-gray-200 border border-gray-200 shadow-md font-semibold
      focus:ring-2 focus:outline-none focus:ring-gray-500 
      rounded-lg text-md px-5 py-2 text-center inline-flex justify-center hover:shadow-xl items-center transform translate-1 hover:scale-95"
    >
      <span>{linkText}</span>
      <span className="text-2xl ml-2">{icon}</span>
    </Link>
  );
};

export default TransparentLink;
