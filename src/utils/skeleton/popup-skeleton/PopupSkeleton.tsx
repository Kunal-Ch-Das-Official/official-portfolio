import React from "react";

const PopupSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col bg-slate-800  max-w-[500px] max-h-[600px] animate-pulse rounded-xl p-4 gap-4">
      <div className="flex flex-col gap-2">
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export default PopupSkeleton;
