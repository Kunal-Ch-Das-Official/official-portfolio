"use client";
import Image from "next/image";
import React, { memo, useCallback, useState } from "react";
import BannerIllustration from "@/public/images/about/Skills-Illustration.webp";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import SkillSet from "../skill-set/SkillSet";

const AboutBanner = () => {
  const [skillVisable, setSkillVisable] = useState<boolean>(false);

  
  const handleSkillOpenAndClose = useCallback(() => {
    skillVisable === false ? setSkillVisable(true) : setSkillVisable(false);
  }, [skillVisable]);
  return (
    <section className="text-gray-100 body-font pt-24 mb-10 lg:mb-10">
      <div className="container mx-auto flex px-5 py-24 lg:flex-row md:flex-col flex-col justify-between items-center w-full">
        <div className=" text-center lg:text-left lg:w-1/2 md:w-3/4 w-full mt-10">
          {skillVisable === true ? (
            <SkillSet />
          ) : (
            <div id="about_text">
              <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-white">
                <span className="text-orange-700 mb-2">
                  Discover my journey,{" "}
                </span>
                <span className="text-orange-500 mb-2"> passion, </span>
                <span className="text-orange-400 mb-2">
                  {" "}
                  and the expertise,{" "}
                </span>
                <br className="hidden lg:inline-block" />
                that drives my creativity
              </h1>
              <p className="flex flex-col lg:w-3/4 md:w-full w-full text-sm md:text-sm lg:text-md">
                From early inspirations to professional milestones, learn about
                my experiences, skills, and the dedication I bring to every
                project. Join me on a journey through my career and creative
                endeavors.
              </p>
            </div>
          )}

          <div className="flex justify-center flex-col lg:flex-row lg:justify-normal mt-8 mx-12 lg:mx-0">
            <a
              rel="noopener"
              href="#getResume"
              className="relative 2xl:flex xl:flex lg:flex w-50 items-center justify-center overflow-hidden bg-tranparent hover:bg-transparent border-2 border-orange-500 text-black shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold bg-orange-500 hover:shadow-orange-600 hover:text-orange-500 rounded-lg inline-flex mb-4 lg:mb-0 lg:mr-8 h-[40px] w-45 text-sm md:text-md md:h-[45px] md:w-50 lg:text-lg lg:h-[50px] lg:w-50"
            >
              <span className="relative z-0 ml-4">Download Resume</span>
              <FaPersonWalkingArrowRight className="text-2xl font-bold mx-4 relative z-0" />
            </a>

            <button
              onClick={handleSkillOpenAndClose}
              className="relative 2xl:flex xl:flex lg:flex w-50 items-center justify-center overflow-hidden bg-tranparent hover:bg-orange-500 border-2 border-orange-500 text-orange-500 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold  hover:shadow-orange-600 hover:text-black rounded-lg inline-flex
                h-[40px] w-45 text-sm md:text-md md:h-[45px] md:w-50 lg:text-lg lg:h-[50px] lg:w-50"
            >
              <span className="relative z-0 ml-4">
                {skillVisable === true ? "Close ": "Skills"}
                </span>
              <FaArrowRightFromBracket className="text-2xl font-bold mx-4 relative z-0" />
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-5/6 flex justify-center lg:justify-end mb-28 lg:mb-0 mt-12 lg:mt-8">
          <Image
            className="object-cover object-center"
            alt="Kunal-Chandra-Das-Photo"
            height={430}
            width={430}
            priority
            quality={60}
            loading="eager"
            src={BannerIllustration}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(AboutBanner);
