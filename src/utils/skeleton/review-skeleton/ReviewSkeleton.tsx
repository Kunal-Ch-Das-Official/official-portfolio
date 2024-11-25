import React from "react";

const ReviewSkeleton: React.FC = () => {
  return (
    <main
      className="flex lg:justify-center lg:items-center 
      lg:mx-auto mx-0 w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl"
    >
      <section
        className="flex flex-col gap-2 max-h-[300px] w-full shadow-xl
     bg-slate-900  mt-8 p-4  mx-6 lg:mx-0 lg:w-1/2 rounded-xl"
      >
        <div className="relative flex w-64 animate-pulse gap-2 p-4">
          <div className="h-12 w-12 rounded-full bg-slate-400" />

          <div className="flex-1">
            <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg" />
            <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm" />
          </div>
          <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400" />
          <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400" />
        </div>

        <div className="relative flex w-1/2 px-5 animate-pulse gap-2">
          <div className="flex-1">
            <div className="mb-1 h-5 full rounded-lg bg-slate-400 text-lg" />
          </div>
        </div>

        <div className="relative flex w-full animate-pulse gap-2 p-4">
          <div className="flex-1">
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
            <div className="h-2 mb-1 full rounded-lg bg-slate-400 text-lg" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewSkeleton;
