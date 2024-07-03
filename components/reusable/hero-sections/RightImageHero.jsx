"use client";
import React, { useState } from "react";
import LaptopMockup from "@/utils/mockups/laptop/LaptopMockup";
import moduleName from "@/assets/images/Banner-Image.jpg";

const RightImageHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltipHandler = () => setIsVisible(true);
  const hideTooltipHandler = () => setIsVisible(false);

  return (
    <main>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
        <div className="order-last lg:order-first h-full border-r-0 lg:border-r-8 lg:border-orange-500 py-0 lg:py-24">
          <div className="text-center mx-20 mt-4 lg:mt-12 2xl:mx-40">
            <h2 className="text-2xl font-bold ">Kunal Chandra Das Project</h2>
            <h3 className="text-xl font-semibold my-2">
              My Profassional portfolio
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              aperiam rerum vero delectus eius ex deserunt alias, nesciunt
              provident iure quam aspernatur placeat eveniet perspiciatis, minus
              nulla voluptatem officia id!
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto lg:mx-24 my-12 2xl:mx-44">
            <div className="badge border-white border-2 text-center rounded-full w-20">
              default
            </div>
            <div className="badge border-white border-2 text-center rounded-full w-20">
              default
            </div>
            <div className="badge border-white border-2 text-center rounded-full w-20">
              default
            </div>
            <div className="badge border-white border-2 text-center rounded-full w-20">
              default
            </div>
            <div className="badge border-white border-2 text-center rounded-full w-20">
              default
            </div>
            <div className="badge border-white border-2 text-center rounded-full w-20">
              default
            </div>
          </div>
        </div>

        <div className="h-full py-0 lg:py-24 ">
          <span
            onMouseOver={showTooltipHandler}
            onMouseOut={hideTooltipHandler}
          >
            <LaptopMockup imgsSrc={moduleName} />
            <div
              className={`${
                isVisible === true ? "flex" : "hidden"
              } flex-col justify-center items-center relative bottom-60 cursor-pointer`}
            >
              <span className="inline-block whitespace-nowrap rounded-full text-gray-500 bg-green-300 px-12 py-2 text-center align-baseline text-md font-bold leading-none mb-4">
                Primary
              </span>

              <span className="inline-block whitespace-nowrap rounded-full text-white bg-blue-500 px-12 py-2 text-center align-baseline text-md font-bold leading-none">
                Primary
              </span>
            </div>
          </span>
        </div>
      </div>
      <div className="hidden md:hidden sm:hidden lg:mx-[400px] xl:mx-[500px] 2xl-[mx-1200px] lg:flex justify-center items-center border-b-2 border-orange-500 h-0 "></div>
    </main>
  );
};

export default RightImageHero;
