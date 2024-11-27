import React from "react";
import Tv from "./Tv";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Tv />
      <h2 className="relative bottom-10 text-orange-800 text-lg md:text-xl lg:text-2xl text-center leading-2 font-semibold ">
        The page you are trying to get access is dosen't exist, 404.
      </h2>
      <Link
        to={"/"}
        className="text-lg font-semibold rounded-md bg-orange-500 h-10 w-28 
        text-center flex  justify-center items-center border border-gray-200
          transform translate-x hover:scale-110"
      >
        &larr; Back
      </Link>
    </div>
  );
};

export default NotFound;
