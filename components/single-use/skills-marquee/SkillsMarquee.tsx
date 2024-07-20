import React from "react";
import marqueeAnimation from "./SkillsMarquee.module.css";
import Image from "next/image";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";

import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

const SkillsMarquee = () => {
  const skillSet1: any = [
   {
    name: "#html",
    color: "text-orange-500",
    icon: <ImHtmlFive className="text-4xl text-orange-500" />
   },
   {
    name: "#css",
    color: "text-blue-500",
    icon:  <SiCss3 className="text-4xl text-blue-500" />
   },
   {
    name: "#bootstrap",
    color: "text-purple-500",
    icon: <FaBootstrap className="text-4xl text-purple-500" />
   },
   {
    name: "#tailwind",
    color: "text-blue-500",
    icon: <SiTailwindcss className="text-4xl text-blue-500" />
   },
   {
    name: "#javascript",
    color: "text-yellow-500",
    icon: <SiJavascript className="text-4xl text-yellow-500" />
   },
   {
    name: "#jquery",
    color: "text-blue-500",
    icon: <SiJquery className="text-4xl text-blue-500" />
   },
   {
    name: "#git",
    color: "text-orange-500",
    icon: <FaGitAlt className="text-4xl text-orange-500" />
   },
   {
    name: "#github",
    color: "text-white",
    icon: <FaGithub className="text-4xl text-white" />
   },
   {
    name: "#reactjs",
    color: "text-blue-500",
    icon: <FaReact className="text-4xl text-blue-500" />
   },
   {
    name: "#redux",
    color: "text-purple-500",
    icon: <TbBrandRedux className="text-4xl text-purple-500" />
   },


  ];
  const skillSet2: any = [
    {
     name: "#nextjs",
     color: "text-white",
     icon: <SiNextdotjs className="text-4xl text-white" />
    },
    {
     name: "#nodejs",
     color: "text-green-500",
     icon:  <FaNodeJs className="text-4xl text-green-500" />
    },
    {
     name: "#expressjs",
     color: "text-white",
     icon: <SiExpress className="text-4xl text-white" />
    },
    {
     name: "#cloudinary",
     color: "text-blue-500",
     icon: <SiCloudinary className="text-4xl text-blue-500" />
    },
    {
     name: "#mongodb",
     color: "text-green-500",
     icon: <BiLogoMongodb className="text-4xl text-green-500" />
    },
    {
     name: "#postgres",
     color: "text-blue-500",
     icon: <SiPostgresql className="text-4xl text-blue-500" />
    },
    {
     name: "#nginx",
     color: "text-green-500",
     icon: <SiNginx className="text-4xl text-green-500" />
    },
    {
     name: "#aws-ec2",
     color: "text-orange-500",
     icon: <FaAws className="text-4xl text-orange-500" />
    },
    {
     name: "#docker",
     color: "text-blue-500",
     icon: <FaDocker className="text-4xl text-blue-500" />
    },
    {
     name: "#canva",
     color: "text-purple-500",
     icon: <SiCanva className="text-4xl text-purple-500" />
    },
 
 
   ];
  return (
    <>
      <div className={` ${marqueeAnimation.logos}`}>
        <div className={marqueeAnimation.logosSlides}>
          {skillSet1.map((item:any, index: number) => (
            <div key={index} className={`inline-flex items-center ${marqueeAnimation.brandLogos}`}>
              <div className="mr-2">
              {item.icon}
              </div>
              <div className={`font-bold ${item.color}`}>
                {item.name}
              </div>
            </div>
          ))}
 
        {skillSet2.map((item:any, index: number) => (
            <div key={index} className={`inline-flex items-center ${marqueeAnimation.brandLogos}`}>
              <div className="mr-2">
              {item.icon}
              </div>
              <div className={`font-bold ${item.color}`}>
                {item.name}
              </div>
            </div>
          ))}
                    {skillSet1.map((item:any, index: number) => (
            <div key={index} className={`inline-flex items-center ${marqueeAnimation.brandLogos}`}>
              <div className="mr-2">
              {item.icon}
              </div>
              <div className={`font-bold ${item.color}`}>
                {item.name}
              </div>
            </div>
          ))}
 
        {skillSet2.map((item:any, index: number) => (
            <div key={index} className={`inline-flex items-center ${marqueeAnimation.brandLogos}`}>
              <div className="mr-2">
              {item.icon}
              </div>
              <div className={`font-bold ${item.color}`}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsMarquee;
