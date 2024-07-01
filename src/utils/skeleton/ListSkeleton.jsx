import React from "react";

const ListSkeleton = () => {
  return (
    <div>
      <div className="border-2 border-gray-200 rounded-md bg-gray-200 overflow-hidden shadow-lg animate-pulse h-full w-full p-2">
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
      </div>
    </div>
  );
};

export default ListSkeleton;
