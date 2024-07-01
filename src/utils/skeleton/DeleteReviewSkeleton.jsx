import React from "react";

const DeleteReviewSkeleton = () => {
  return (
    <div className="relative left-64">
      <div className="h-32 w-96 rounded-lg bg-gray-50 border-gray-100 pr-4">
        <div className="h-8 w-full rounded-lg bg-gray-300 shadow-lg animate-pulse my-2"></div>
        <div className="h-8 w-full rounded-lg bg-gray-300 shadow-lg animate-pulse my-2"></div>
        <div className="h-8 w-full rounded-lg bg-gray-300 shadow-lg animate-pulse my-2"></div>
      </div>

      <div className="ml-28">
        <div className="h-8 w-32 rounded-lg bg-gray-300 shadow-lg animate-pulse my-2"></div>
      </div>
    </div>
  );
};

export default DeleteReviewSkeleton;
