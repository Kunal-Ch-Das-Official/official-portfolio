import React from "react";
import errorImage from "../../assets/images/server-error-image.gif";
const ErrorComp: React.FC = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <img src={errorImage} alt="500 error" />
        <div
          className="text-center text-red-500 font-semibold text-lg md:text-xl lg:text-2xl 
        relative bottom-8 md:bottom-20"
        >
          Something went wrong. Please try again later
        </div>
      </div>
    </section>
  );
};

export default ErrorComp;
