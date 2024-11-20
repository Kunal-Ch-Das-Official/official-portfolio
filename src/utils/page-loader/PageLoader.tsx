import React from "react";
import loaderStyle from "./loaderStyle.module.css";
const PageLoader: React.FC = () => {
  return (
    <>
      <section
        className={`min-h-screen ${loaderStyle.overlay} fixed inset-0 px-4 flex-wrap justify-center items-center w-full h-full z-[9999] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto flex `}
      >
        <div className={loaderStyle.pyramidLoader}>
          <div className={loaderStyle.wrapper}>
            <span className={`${loaderStyle.side} ${loaderStyle.side1}`}></span>
            <span className={`${loaderStyle.side} ${loaderStyle.side2}`}></span>
            <span className={`${loaderStyle.side} ${loaderStyle.side3}`}></span>
            <span className={`${loaderStyle.side} ${loaderStyle.side4}`}></span>
            <span className={loaderStyle.shadow}></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageLoader;
