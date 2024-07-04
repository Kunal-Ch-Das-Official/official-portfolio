import React from "react";
import style from "./ProjectTimeline.module.css";
import LaptopMockup from "@/utils/mockups/laptop/LaptopMockup";
import Image from "next/image";
import getProjectData from "@/apis/project-fetching/getProjectData";
// Technologies icon importing:
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { RiBootstrapFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
const ProjectTimeline = async () => {
  const ourProjects = await getProjectData();

  const technologiesIcon = [
    <IoLogoCss3 className="text-3xl text-blue-500 mx-auto mt-2" />,
    <SiJavascript className="text-3xl text-yellow-500 mx-auto mt-2" />,
    <SiTailwindcss className="text-3xl text-blue-500 mx-auto mt-2" />,
    <RiNextjsFill className="text-3xl text-white mx-auto mt-2" />,
    <RiReactjsLine className="text-3xl text-blue-300 mx-auto mt-2" />,
    <IoLogoNodejs className="text-3xl text-green-500 mx-auto mt-2" />,
    <SiExpress className="text-3xl text-white mx-auto mt-2" />,
    <SiMongodb className="text-3xl text-green-500 mx-auto mt-2" />,
  ];

  return (
    <main className={`my-28 ${style.timelineBody}`}>
      <div className="lg:flex justify-center items-center h-12 ">
        <button className="relative 2xl:flex xl:flex lg:flex lg:ml-0 ml-7 h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px]  hover:text-orange-600">
          <span className="relative z-10">Latest Projects</span>
        </button>
      </div>

      {ourProjects.map((projectInfo, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 ml-12 ${style.timeline}`}
        >
          {/* First Project Container Left-Side */}
          <div className={style.container} id={style.leftContainer}>
            <Image
              src={projectInfo.projectThumbnail}
              alt={projectInfo.projectName}
              className={style.projectLogo}
              width={30}
              height={30}
            />
            <div className={style.textBox}>
              <h2 className="text-2xl font-bold text-white text-center">
                {projectInfo.projectName}
              </h2>
              <h3 className="text-xl font-semibold text-white my-2 text-center">
                {projectInfo.author}
              </h3>
              <p className="text-base text-white text-center">
                {projectInfo.description}
              </p>

              <span className={style.leftContainerArrow}></span>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 mx-12 lg:mx-12 my-12 2xl:mx-12">
                {technologiesIcon.map((tech, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 mx-auto rounded-full technologyBg transition-transform hover:scale-110"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* First Project Container Right-Side  */}
          <div className={style.container} id={style.rightContainer}>
            <div className={style.imageBox}>
              <LaptopMockup imgsSrc={projectInfo.firstView} />
              <span
                className={`${style.rightContainerArrow} hidden lg:flex`}
              ></span>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProjectTimeline;
