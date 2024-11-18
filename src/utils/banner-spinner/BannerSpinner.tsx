import React from "react";
import bannerstyle from "./spinnerStyle.module.css";
import ownerImage from "../../assets/images/Banner-Image.jpg";
import { FaBootstrap, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import TypeWritter from "../typewriter/Typewriter";

const BannerSpinner: React.FC = () => {
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
      <div className="relative h-full w-full flex items-center justify-center">
        <div
          className={`${bannerstyle.spinner} profileCard_container relative p-10 
      rounded-full border-spacing-4`}
        >
          {/* Mongo db  */}
          <button
            className={` ${bannerstyle.reverse_spinner}  profile_item 
            left-[60px] -top-[4px] absolute rounded-full bg-cover
         cursor-pointer p-[2px] active:scale-95 hover:scale-95
         transition-all duration-500 ${bannerstyle.tooltip_top}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
              w-[70px] bg-green-600
               text-white left-[120%] text-xs
            
            `}
            >
              Mongodb
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all
           duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <BiLogoMongodb className="text-2xl text-green-600" />
            </span>
          </button>

          {/* React js  */}
          <button
            className={` ${bannerstyle.reverse_spinner} profile_item 
            right-[20px] -top-[-28px] 
            absolute 
            rounded-full bg-cover cursor-pointer
            ${bannerstyle.tooltip_top} p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-blue-600
               text-white left-[120%] text-xs
            
            `}
            >
              React js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all 
          duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaReact className="text-2xl text-blue-500" />
            </span>
          </button>

          {/* Express js  */}
          <button
            className={` ${bannerstyle.reverse_spinner} profile_item 
            -left-2 top-[62px] 
            absolute
         rounded-full bg-cover cursor-pointer p-[2px] active:scale-95
          hover:scale-95 transition-all duration-500 ${bannerstyle.tooltip_top}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-white
               text-gray-900 left-[120%] text-xs
            `}
            >
              Express js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all
           duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <SiExpress className="text-2xl text-white" />
            </span>
          </button>

          {/* Typescript  */}
          <button
            className={`profile_item -right-4 top-24 absolute rounded-full bg-cover cursor-pointer 
        ${bannerstyle.tooltip_top} p-[2px] active:scale-95 hover:scale-95 transition-all duration-500
        ${bannerstyle.reverse_spinner}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-blue-600
               text-white left-[120%] text-xs
            
            `}
            >
              Typescript
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <BiLogoTypescript className="text-2xl text-blue-600" />
            </span>
          </button>

          {/* Github */}
          <button
            className={` ${bannerstyle.reverse_spinner} profile_item ${bannerstyle.tooltip_top}
            -left-[16px] top-[9.5rem]
            absolute
         rounded-full bg-cover cursor-pointer p-[2px] active:scale-95
          hover:scale-95 transition-all duration-500`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-white
               text-gray-900 left-[120%] text-xs
               `}
            >
              Github
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all
           duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaGithub className="text-2xl text-white" />
            </span>
          </button>

          {/* Node js */}
          <button
            className={`profile_item -right-2 top-44 absolute rounded-full bg-cover cursor-pointer 
         p-[2px] active:scale-95 hover:scale-95 transition-all duration-500
        ${bannerstyle.reverse_spinner} ${bannerstyle.tooltip_top}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-green-600
               text-white left-[120%] text-xs`}
            >
              Node js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaNodeJs className="text-2xl text-green-600" />
            </span>
          </button>

          {/* Javascript  */}
          <button
            className={`${bannerstyle.reverse_spinner}
                     profile_item bottom-4 -left-[-30px] ${bannerstyle.tooltip_top}
            absolute rounded-full bg-cover cursor-pointer
         p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} 
            w-[70px] bg-yellow-600
               text-white left-[120%] text-xs
            `}
            >
              Javascript
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all 
          duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <RiJavascriptFill className="text-2xl text-yellow-500" />
            </span>
          </button>
          {/* Tailwind css  */}
          <button
            className={`${bannerstyle.reverse_spinner} profile_item
             bottom-1 -right-[-48px] absolute rounded-full
         bg-cover cursor-pointer p-[2px] active:scale-95 hover:scale-95 
         transition-all duration-500 ${bannerstyle.tooltip_top}`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-blue-600 
               text-white left-[120%] text-xs
            
            `}
            >
              Tailwind
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all 
          duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <RiTailwindCssFill className="text-2xl text-blue-500" />
            </span>
          </button>

          {/* Next js  */}
          <button
            className={`profile_item right-[48%] -bottom-4 absolute rounded-full bg-cover 
            ${bannerstyle.reverse_spinner} 
        cursor-pointer p-[2px] active:scale-95 hover:scale-95 transition-all 
        duration-500 ${bannerstyle.tooltip_top}`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} 
            w-[70px] bg-white
               text-black left-[120%] text-xs`}
            >
              Next js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <RiNextjsFill className="text-2xl text-white" />
            </span>
          </button>
          {/* Bootstrap */}
          <button
            className={`profile_item right-[34%] -top-4 absolute rounded-full bg-cover 
            ${bannerstyle.reverse_spinner}  
        cursor-pointer p-[2px] active:scale-95 hover:scale-95 transition-all 
        duration-500 ${bannerstyle.tooltip_top}`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} w-[70px] bg-purple-700
               text-white left-[120%] text-xs`}
            >
              Bootstrap
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaBootstrap className="text-2xl text-purple-500" />
            </span>
          </button>

          {/* Fake section  */}
          <button
            className="profile_item w-[200px] h-[200px] p-1 rounded-full
          cursor-pointer transition-all duration-500 z-0"
          ></button>
        </div>

        {/* Main profile picture  */}
        <button
          className={`${bannerstyle.tooltip_top} profile_item w-[200px] h-[200px] p-1 rounded-full
          cursor-pointer transition-all duration-500 absolute`}
        >
          <span
            className={`${bannerstyle.tooltiptext_top} w-[120px] left-[50%] bg-orange-500 text-white font-normal text-sm`}
          >
            About Me
          </span>
          <div
            className="w-full h-full flex items-center justify-center p-2 rounded-full
           active:scale-95 hover:scale-95 object-cover transition-all duration-500"
          >
            <img
              src={ownerImage}
              alt="kunal chandra das image"
              className={`${bannerstyle.imageStyle} rounded-full`}
            />
          </div>
        </button>

        <h1
          className="text-lg md:text-xl pt-6 text-center absolute top-80
        justify-center lg:text-2xl mb-4 text-white "
        >
          <p className="text-center">Hello,</p>
          <p className="text-orange-500 ml-2 text-center">
            <TypeWritter texts={texts} />
          </p>
        </h1>
      </div>
    </>
  );
};

export default BannerSpinner;
