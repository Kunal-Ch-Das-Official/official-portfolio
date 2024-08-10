import React from "react";
import spinnerStyle from "./ComponentSpinner.module.css";
const ComponentSpinner = () => {
  return (
    <div
      className={`fixed inset-0 px-4 flex-wrap justify-center items-center w-full h-full z-[9999] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ${spinnerStyle.overlay}`}
    >
      <div className={`${spinnerStyle.loader} relative top-72 mx-auto`}></div>
    </div>
  );
};

export default ComponentSpinner;
