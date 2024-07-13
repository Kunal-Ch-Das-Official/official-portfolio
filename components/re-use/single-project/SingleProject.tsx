"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsExclamationOctagonFill } from "react-icons/bs";
import Link from "next/link";
import { FaRegHandPointRight } from "react-icons/fa6";
import { FaUsersViewfinder } from "react-icons/fa6";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

interface SingleProjectProps {
  projectId: string;
  projectName: string;
  projectOwner: string;
  projectDescription: string;
  projectThumbnail: string;
  firstPageView: string;
  secondPageView: string;
  thirdPageView: string;
  githubLink: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  projectId,
  projectName,
  projectOwner,
  projectDescription,
  projectThumbnail,
  firstPageView,
  secondPageView,
  thirdPageView,
  githubLink,
}) => {
  const [isClick, setClick] = useState<number>(1);
  const [imgClick, setImgClick] = useState<number>(1);
  const handleDescriptionTab = (id: number) => {
    if (id === 1) {
      setClick(1);
    } else if (id === 2) {
      setClick(2);
    }
  };
  const handleImgClick = (id: number) => {
    if (id === 1) {
      setImgClick(1);
    } else if (id === 2) {
      setImgClick(2);
    } else if (id === 3) {
      setImgClick(3);
    }
  };

  const technologies = [
    {
      name: "Html",
      icon: <ImHtmlFive className="text-4xl text-orange-500" />,
    },
    {
      name: "Css",
      icon: <IoLogoCss3 className="text-4xl text-blue-500" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-4xl text-blue-400" />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript className="text-4xl text-yellow-500" />,
    },

    {
      name: "React Js",
      icon: <RiReactjsLine className="text-4xl text-blue-300" />,
    },
    {
      name: "Next Js",
      icon: <SiNextdotjs className="text-4xl text-black" />,
    },
    {
      name: "Node Js",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
    },
    {
      name: "Express Js",
      icon: <SiExpress className="text-4xl text-black" />,
    },
    {
      name: "Mongo Db",
      icon: <SiMongodb className="text-4xl text-green-500" />,
    },
  ];
  //   const detailsList = [detail1, detail2, detail3, detail4, detail5, detail6];

  return (
    <main className="py-36 blurBackgroundItem">
      <div className="font-sans">
        <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
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
                width={500}
                className="w-3/4 rounded-xl object-cover"
                priority={true}
              />
              <div className="w-20 flex flex-col max-sm:mb-4 gap-3">
                <Image
                  src={firstPageView}
                  alt="Product1"
                  height={500}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(1)}
                />
                <Image
                  src={secondPageView}
                  alt="Product2"
                  height={500}
                  width={500}
                  className="w-full cursor-pointer rounded-lg"
                  onClick={() => handleImgClick(2)}
                />
                <Image
                  src={thirdPageView}
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
                  className="rounded-full mr-4"
                />
                {projectName}
              </h2>
              <div className="text-lg mt-2">{projectDescription}</div>

              <ul className="flex flex-col mt-2">
                <div>
                  <h4 className="text-xl font-bold my-2 text-orange-500">
                    Main Features
                  </h4>
                </div>
                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <FaRegHandPointRight className="text-2xl text-orange-600 mr-2" />
                  <span className="mb-2">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <FaRegHandPointRight className="text-2xl text-orange-600 mr-2" />
                  <span className="mb-2">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <FaRegHandPointRight className="text-2xl text-orange-600 mr-2" />
                  <span className="mb-2">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <FaRegHandPointRight className="text-2xl text-orange-600 mr-2" />
                  <span className="mb-2">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                </li>

                <li className="inline-flex items-center my-1.5 text-md font-semibold">
                  <FaRegHandPointRight className="text-2xl text-orange-600 mr-2" />
                  <span className="mb-2">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </span>
                </li>
              </ul>

              <div className="mt-10 flex flex-col lg:flex-row gap-4">
                <Link
                  href="/hire"
                  className="relative flex h-[50px] w-full mb-2 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-orange-600 hover:shadow-orange-600 hover:before:border-[25px] rounded-lg "
                >
                  <span className="relative z-10 inline-flex">
                    {" "}
                    <FaUsersViewfinder
                      className="w-6 h-6 cursor-pointer fill-current inline-flex mr-3
                  "
                    />
                    Hire Me
                  </span>
                </Link>


                <Link
                  href="/about"
                  className="relative flex h-[50px] w-full mb-2 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold hover:text-orange-600 hover:shadow-orange-600 hover:before:border-[25px] rounded-lg "
                >
                  <span className="relative z-10 inline-flex">
                    {" "}
                    <BsExclamationOctagonFill
                      className="w-6 h-6 cursor-pointer fill-current inline-flex mr-3
                  "
                    />
                    About Me
                  </span>
                </Link>
              </div>

              <ul className="grid grid-cols-2 mt-10">
                <li
                  className={`font-semibold text-base text-center py-3  px-4 border-b-2 ${
                    isClick === 1
                      ? "border-gray-800 bg-gray-50 text-black"
                      : "text-gray-50"
                  } cursor-pointer`}
                  onClick={() => handleDescriptionTab(1)}
                >
                  Technology Used
                </li>
                <li
                  className={`font-semibold text-base text-center py-3  px-4 border-b-2 ${
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
                <ul className="grid grid-cols-2 lg:grid-cols-3 mt-4 bg-white">
                  {technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="flex flex-col items-center my-6"
                    >
                      <div>{technology.icon}</div>
                      <h6 className="ml-2 mt-2 font-semibold text-black">
                        {technology.name}
                      </h6>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2 text-sm text-black bg-white mt-8 p-6">
                  <p>{projectDescription}</p>
                  <li className="text-black">Visit Github: {githubLink}</li>
                  <li className="text-black">Project Owner: {projectOwner}</li>
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
