"use client";
import React, { useEffect } from "react";
import "./ProjectBanner.css";
import Image from "next/image";
import BannerImage from "@/public/images/project/project-banner-img.webp";
const ProjectBanner: React.FC = () => {
  useEffect(() => {
    const bannerBody: Element | null | any =
      document.querySelector(".projectBanner");
    const spark = (event: MouseEvent) => {
      const effects = document.createElement("effects");
      // Set the position of the element based on the mouse event
      effects.style.left = event.pageX + "px";
      effects.style.top = event.pageY + "px";

      // Randomly scale the element
      effects.style.transform = `scale(${Math.random() * 2 + 1})`;

      // Set random transition values
      effects.style.setProperty("--x", getRandomTransitionValue());
      effects.style.setProperty("--y", getRandomTransitionValue());

      if (bannerBody) {
        bannerBody.appendChild(effects);
        // Remove the element after 2 seconds
        setTimeout(() => {
          bannerBody.removeChild(effects);
        }, 2000);
      }
    };

    const getRandomTransitionValue = () => {
      // Generate a random value between -200 and 200 pixels
      return `${Math.random() * 400 - 200}px`;
    };

    // Add event listener to track mouse movements and create spark effect
    bannerBody.addEventListener("mousemove", spark);

    // Cleanup the event listener on component unmount
    return () => {
      bannerBody.removeEventListener("mousemove", spark);
    };
  }, []);

  return (
    <main className="h-full w-full pb-12 mt-8 lg:mt-0 projectBanner">
      <section className="text-gray-100 body-font pt-12 mb-10 lg:mb-10">
        <div className="container mx-auto flex px-5 py-24 lg:flex-row md:flex-col flex-col justify-between items-center w-full">
          <div className="lg:w-1/2 md:w-1/2 w-5/6 flex justify-center lg:justify-start lg:mb-0 mt-12 lg:mt-8 order-last lg:order-none ">
            <Image
              className="object-cover object-center rounded-full shadow-custom-glow perspectiveBox mt-16 lg:mb-0"
              alt="Kunal-Chandra-Das-Photo"
              height={430}
              width={430}
              priority
              quality={75}
              loading="eager"
              src={BannerImage}
            />
          </div>

          <div className=" text-center lg:justify-center lg:text-center lg:w-1/2 md:w-3/4 w-full mt-10">
            <h1 className="text-2xl md:text-3xl lg:inline-block lg:w-full lg:text-4xl mb-4 font-bold text-white">
              <span className="text-orange-700 mb-2">All </span>
              <span className="text-orange-500 mb-2"> My </span>
              <span className="text-orange-400 mb-2"> Creative </span>
              <span className="text-orange-400 mb-2"> Odyssey </span>
              <br className="hidden lg:inline-block" />
              Of Web Development
            </h1>
            <p className="flex flex-col lg:w-full md:w-full w-full text-sm md:text-sm lg:text-md lg:text-center">
              I help business owners and busy web developers to design & develop
              creative websites that fits their vision and attracts the visitors
              to stay for ever. Technologies and tools that I use to create such
              awesome websites.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectBanner;
