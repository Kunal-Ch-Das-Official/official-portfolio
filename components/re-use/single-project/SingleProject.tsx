"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsExclamationOctagonFill } from "react-icons/bs";
import Link from "next/link";
import { FaUsersViewfinder } from "react-icons/fa6";
import { ImHtmlFive } from "react-icons/im";
import { SiEjs } from "react-icons/si";
import { PiFileJsxBold } from "react-icons/pi";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { BiLogoFlask } from "react-icons/bi";
import { SiSpring } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";
import { SiRubyonrails } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { IoArrowBackCircleSharp } from "react-icons/io5";

interface SingleProjectProps {
  projectId: string;
  projectName: string;
  projectAuthor: string;
  projectType: string;
  projectOwner: string;
  projectDescription: string;
  projectThumbnail: string;
  firstPageView: string;
  secondPageView: string;
  thirdPageView: string;
  githubLink: string;
  usedStack: string[];
}

const SingleProject: React.FC<SingleProjectProps> = ({
  projectId,
  projectName,
  projectAuthor,
  projectType,
  projectOwner,
  projectDescription,
  projectThumbnail,
  firstPageView,
  secondPageView,
  thirdPageView,
  githubLink,
  usedStack,
}) => {
  const [isClick, setClick] = useState<number>(1);
  const [imgClick, setImgClick] = useState<number>(1);

  const handleDescriptionTab = (id: number) => {
    setClick(id);
  };

  const handleImgClick = (id: number) => {
    setImgClick(id);
  };

  const renderTechnologyIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "html":
        return <ImHtmlFive className="text-4xl text-orange-500" />;
      case "ejs":
        return <SiEjs className="text-4xl text-red-400" />;
      case "jsx":
        return <PiFileJsxBold className="text-4xl text-blue-300" />;
      case "css":
        return <IoLogoCss3 className="text-4xl text-blue-500" />;
      case "bootstrap":
        return <FaBootstrap className="text-4xl text-purple-500" />;
      case "tailwind":
        return <SiTailwindcss className="text-4xl text-blue-400" />;
      case "react":
        return <RiReactjsLine className="text-4xl text-blue-300" />;
      case "angular":
        return <FaAngular className="text-4xl text-red-500" />;
      case "vue":
        return <FaVuejs className="text-4xl text-green-500" />;
      case "next":
        return <SiNextdotjs className="text-4xl text-black" />;
      case "vite":
        return <SiVite className="text-4xl text-purple-500" />;
      case "node":
        return <FaNodeJs className="text-4xl text-green-500" />;
      case "javascript":
        return <SiJavascript className="text-4xl text-yellow-500" />;
      case "typescript":
        return <SiTypescript className="text-4xl text-blue-600" />;
      case "java":
        return <FaJava className="text-4xl text-orange-300" />;
      case "python":
        return <SiPython className="text-4xl text-yellow-500" />;
      case "php":
        return <SiPhp className="text-4xl text-violet-800" />;
      case "ruby":
        return <DiRuby className="text-4xl text-red-600" />;
      case "express":
        return <SiExpress className="text-4xl text-black" />;
      case "cloudflare":
        return <FaCloudflare className="text-4xl text-orange-500" />;
      case "prisma":
        return (
          <SiPrisma className="text-4xl text-gray-900 bg-white rounded-3xl" />
        );
      case "django":
        return <DiDjango className="text-4xl text-green-900" />;
      case "flusk":
        return <BiLogoFlask className="text-4xl text-black" />;
      case "spring":
        return <SiSpring className="text-4xl text-green-600" />;
      case "laravel":
        return <TbBrandLaravel className="text-4xl text-red-600" />;
      case "rails":
        return <SiRubyonrails className="text-4xl text-red-600" />;
      case "mongodb":
        return <SiMongodb className="text-4xl text-green-500" />;
      case "mysql":
        return <SiMysql className="text-4xl text-blue-500" />;
      case "postgres":
        return <BiLogoPostgresql className="text-4xl text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <main className="py-36 blurBackgroundItem">
      <div className="font-sans">
        <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
          <Link href={"/"} className="bottomTooltip">
            <IoArrowBackCircleSharp className="text-white text-5xl mb-6 hover:text-orange-500 cursor-pointer" />
            <span className="bottomTooltipText mt-3 cursor-pointer">
              Back To Home
            </span>
          </Link>
          <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full lg:sticky top-0 flex gap-3">
              <Image
                src={
                  imgClick === 1
                    ? firstPageView
                    : imgClick === 2
                    ? secondPageView
                    : thirdPageView
                }
                alt="Product"
                height={500}
                quality={50}
                width={500}
                className="w-3/4 rounded-xl object-cover"
                priority
                loading="eager"
              />
              <div className="w-20 flex flex-col max-sm:mb-4 gap-3">
                <Image
                  priority
                  loading="eager"
                  src={firstPageView}
                  alt="Product1"
                  height={500}
                  quality={50}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(1)}
                />
                <Image
                  priority
                  loading="eager"
                  src={secondPageView}
                  quality={50}
                  alt="Product2"
                  height={500}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(2)}
                />
                <Image
                  priority
                  loading="eager"
                  src={thirdPageView}
                  quality={50}
                  alt="Product3"
                  height={500}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(3)}
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl max-sm:text-2xl font-bold text-orange-500 inline-flex items-center">
                <Image
                  src={projectThumbnail}
                  alt={projectId}
                  height={50}
                  width={50}
                  quality={50}
                  className="rounded-full mr-4"
                  priority
                  loading="eager"
                />
                {projectName}
              </h2>

              <div>
                If you like my work, please do not forget to leave a review. If
                you are interested in hiring me, feel free to send an email. I
                will get in touch with you via email or WhatsApp shortly.
              </div>
              <div className="mt-10 flex flex-col lg:flex-row gap-4">
                <Link
                  href="/hire"
                  className="relative 2xl:flex xl:flex lg:flex h-[50px] w-50 items-center justify-between px-8 overflow-hidden bg-tranparent hover:bg-transparent border-2 border-orange-500 text-black shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold bg-orange-500 hover:shadow-orange-600 hover:text-orange-500 rounded-lg inline-flex mx-auto lg:mx-0"
                >
                  <span className="relative z-10 inline-flex">
                    <FaUsersViewfinder className="w-6 h-6 cursor-pointer fill-current inline-flex mr-3" />
                    Hire Me
                  </span>
                </Link>

                <Link
                  href="/about"
                  className="mx-auto lg:mx-0 relative 2xl:flex xl:flex lg:flex h-[50px] w-56 items-center justify-center overflow-hidden bg-tranparent hover:bg-orange-500 border-2 border-orange-500 text-orange-500 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold hover:shadow-orange-600 hover:text-black rounded-lg inline-flex"
                >
                  <span className="relative z-10 inline-flex">
                    <BsExclamationOctagonFill className="w-6 h-6 cursor-pointer fill-current inline-flex mr-3" />
                    About Me
                  </span>
                </Link>
              </div>

              <ul className="grid grid-cols-2 mt-10">
                <li
                  className={`font-semibold text-base text-center py-3 px-4 border-b-2 ${
                    isClick === 1
                      ? "border-gray-800 bg-gray-50 text-black"
                      : "text-gray-50"
                  } cursor-pointer`}
                  onClick={() => handleDescriptionTab(1)}
                >
                  Technology Used
                </li>
                <li
                  className={`font-semibold text-base text-center py-3 px-4 border-b-2 ${
                    isClick === 2
                      ? "border-gray-800 bg-gray-50 text-black"
                      : "text-gray-50"
                  } cursor-pointer`}
                  onClick={() => handleDescriptionTab(2)}
                >
                  Details
                </li>
              </ul>

              {isClick === 1 ? (
                <ul className="grid grid-cols-2 lg:grid-cols-3 mt-4 bg-gray-900">
                  {usedStack.map((tech, index) => (
                    <li key={index} className="flex flex-col items-center my-6">
                      <div>{renderTechnologyIcon(tech)}</div>
                      <h6 className="ml-2 mt-2 font-semibold text-gray-300">
                        {tech}
                      </h6>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2 text-sm text-gray-300 bg-gray-900 mt-8 p-6">
                  <li className="text-gray-300 text-lg font-bold">
                    Visit Github:{" "}
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {githubLink}
                    </a>
                  </li>
                  <li className="text-gray-300 text-lg font-bold">
                    Project Owner: {projectAuthor}
                  </li>
                  <li className="text-gray-300 text-lg font-bold">
                    Project Author: {projectType}
                  </li>
                  <li className="text-gray-300 text-lg font-bold">
                    Project Type: {projectOwner}
                  </li>
                  <p className="text-sm font-semibold">{projectDescription}</p>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProject;
