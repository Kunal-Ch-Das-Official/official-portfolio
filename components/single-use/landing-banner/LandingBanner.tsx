import Image from "next/image";
import "./bannercard.css";
import React from "react";
import BannerImage from "@/public/Banner-Image.webp";
import { FaBootstrap, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiHtml5 } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import TypeWritter from "@/utils/typewriter/Typewritter";

const LandingBanner: React.FC = () => {
  const texts: string[] = [
    "I'm Kunal Chandra Das",
    "Welcome To My Portfolio",
    "I'm a Mern Stack Developer",
    "I'm a Web Designer",
    "I'm A Tech Enthusiast",
    "Enjoy Your Stay",
  ];
  return (
    <>
      <section className="bannerBackground mx-auto overflow-y-hidden relative top-0 pb-48 md:pb-28 ">
        {/* Falling line one */}
        <div className="stars_one z-1">
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
        </div>

        {/* Spinner  */}
        <div
          className="relative h-full w-full flex items-center pt-12 lg:pt-28 min-h-screen
      justify-center z-[10001]"
        >
          <div
            className="profileCard_container relative p-10 rounded-full 
         anim"
          >
            {/* React  */}
            <button
              id="React_js"
              className="contentAnim profile_item left-[45px] -top-[-5px] absolute
             rounded-full bg-cover cursor-pointer border border-blue-600
             p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 
            "
            >
              <span
                className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]
             bg-slate-800 p-1"
              >
                <FaReact className="text-3xl text-blue-600" />
              </span>
            </button>

            {/* Express  */}
            <button
              id="express_js"
              className="contentAnim profile_item right-[40px] -top-[-4px] absolute rounded-full 
            bg-cover cursor-pointer border border-white p-[2px] active:scale-95 
            hover:scale-95 transition-all duration-500"
            >
              <span
                className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2]
             bg-slate-800 p-1"
              >
                <SiExpress className="text-3xl text-white" />
              </span>
            </button>
            {/* Node js  */}
            <button
              id="node_js"
              className="contentAnim profile_item -left-4 top-20 absolute rounded-full 
            bg-cover cursor-pointer border border-green-600 p-[2px] active:scale-95
             hover:scale-95 transition-all duration-500"
            >
              <span
                className="flex justify-center items-center w-[40px] h-[40px] 
            transition-all duration-500 rounded-full z-[2] bg-slate-800 p-1"
              >
                <FaNodeJs className="text-3xl text-green-500" />
              </span>
            </button>

            {/* Mongo db  */}
            <button
              id="mongo_db"
              className="contentAnim profile_item -right-4 top-20 absolute rounded-full border-green-600
             bg-cover cursor-pointer border  p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-slate-800 p-1">
                <BiLogoMongodb className="text-3xl text-green-700 " />
              </span>
            </button>

            {/* Html  */}
            <button
              id="html"
              className="contentAnim profile_item bottom-4 -right-[-32] absolute rounded-full bg-cover
             cursor-pointer border border-orange-600 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="flex justify-center  items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-slate-800 p-1">
                <SiHtml5 className="text-[1.6rem] text-orange-600" />
              </span>
            </button>

            {/* Next js */}
            <button
              id="next_js"
              className="contentAnim profile_item bottom-28 -left-6 absolute rounded-full
             bg-cover cursor-pointer border border-white p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span
                className="flex justify-center items-center w-[40px] h-[40px] transition-all
             duration-500 rounded-full z-[2] bg-slate-800 p-1"
              >
                <RiNextjsFill className="text-3xl text-white" />
              </span>
            </button>

            {/* Bootstrap  */}
            <button
              id="bootstrap"
              className="contentAnim profile_item bottom-28 -right-6 
            absolute rounded-full bg-cover cursor-pointer border border-purple-600 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-slate-800 p-1">
                <FaBootstrap className="text-3xl text-purple-600" />
              </span>
            </button>

            {/* Tailwind  */}
            <button
              id="tailwind"
              className=" contentAnim profile_item right-[42%] -bottom-6 absolute rounded-full
             bg-cover cursor-pointer border border-blue-600 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-slate-800 p-1">
                <RiTailwindCssFill className="text-3xl text-blue-600" />
              </span>
            </button>
            {/* css  */}
            <button
              id="css"
              className="contentAnim profile_item right-[42%] -top-6 absolute 
            rounded-full bg-cover cursor-pointer border border-blue-600 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-slate-800 p-1">
                <FaCss3 className="text-[1.6rem] text-blue-600" />
              </span>
            </button>
            {/* Javascript        */}
            <button
              id="javascript"
              className="contentAnim profile_item bottom-4 left-[249px] absolute rounded-full
             bg-cover cursor-pointer border border-yellow-500 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="flex justify-center items-center w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-slate-800 p-1">
                <RiJavascriptFill className="text-3xl text-yellow-500" />
              </span>
            </button>
            {/* Profile pic  */}
            <button
              className=" profile_item w-[250px] h-[250px] rounded-full
            cursor-pointer transition-all duration-500 z-0"
            >
              <div className="w-full h-full flex items-center justify-center rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                <span className="w-[180px] h-[180px] inline-block "></span>
              </div>
            </button>
          </div>

          <button
            id="profile_picture"
            className="profile_item w-[250px] h-[250px] rounded-full 
          
            cursor-pointer transition-all duration-500 z-0 absolute"
          >
            <div className="w-full h-full flex items-center justify-center rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
              <span className="w-[180px] h-[180px] md:w-[230px] md:h-[230px] inline-block ">
                <Image
                  src={BannerImage}
                  alt="Kunal Chandra Das Profile Picture"
                  className="rounded-full bgStyle z-[10001]"
                  priority
                />
              </span>
            </div>
          </button>
        </div>

        {/* Falling line two  */}
        <div className="stars_two z-1">
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
          <div className="mx-[5rem] star"></div>
        </div>
      </section>
      <section className=" relative bottom-28 blurBackgroundLight ">
        <h2
          className="text-lg md:text-xl pt-6 text-center 
        justify-center lg:text-2xl mb-4 text-white "
        >
          <p className="text-center">Hello,</p>
          <p className="text-orange-500 ml-2 text-center">
            <TypeWritter texts={texts} />
          </p>
        </h2>
      </section>
    </>
  );
};

export default LandingBanner;
