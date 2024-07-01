import React from 'react';

const SingleReviewSkeleton = () => {
  return (
<div className="h-32 w-96 rounded-lg bg-gray-50 border-gray-100 pr-4">
    <div className="h-8 w-full rounded-lg bg-gray-300 shadow-lg animate-pulse my-2"></div>
    <div className="h-8 w-full rounded-lg bg-gray-300 shadow-lg animate-pulse my-2"></div>
    <div className="h-8 w-full rounded-lg bg-gray-300 shadow-lg animate-pulse my-2"></div>
</div>
  )
}

export default SingleReviewSkeleton;