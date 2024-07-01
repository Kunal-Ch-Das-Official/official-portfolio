import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="mt-36">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div className="h-96 rounded-lg bg-gray-200 shadow-lg animate-pulse"></div>
      <div className="h-96 rounded-lg shadow-lg animate-pulse">
      <div className="block mx-auto bg-gray-300 h-6 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-8 w-full my-2"></div>
        <div className="block mx-auto bg-gray-300 h-6 w-full my-2"></div>
      </div>
    </div>
    </div>
  );
};

export default ProductSkeleton;
