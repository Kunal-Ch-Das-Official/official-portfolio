import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import CustomSlider from "../../utils/custom-slider/CustomSlider";

// Technolgy logo
import {
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaVuejs,
  FaJava,
  FaPhp,
  FaPython,
  FaCloudflare,
} from "react-icons/fa";
import {
  SiEjs,
  SiExpress,
  SiPrisma,
  SiFlask,
  SiSpring,
  SiRubyonrails,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import {
  TbFileTypeJsx,
  TbFileTypeXml,
  TbBrandVite,
  TbBrandNodejs,
  TbBrandLaravel,
} from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiJavascriptFill,
} from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiArrowToRight,
} from "react-icons/bi";
import { DiRuby, DiDjango } from "react-icons/di";
// import { IoReturnUpBack } from "react-icons/io5";
import axios from "../../../axios/axios";
import envConfig from "../../../conf/envConfig";
import { GrGithub } from "react-icons/gr";
import PageLoader from "../../utils/page-loader/PageLoader";
interface RequestedProjectI {
  _id: string;
  projectName: string;
  author: string;
  projectType: string;
  owner: string;
  description: string;
  projectLogoUrl: string;
  firstPageImageUrl: string;
  secondPageImageUrl: string;
  thirdPageImageUrl: string;
  liveProjectUrl: string;
  githubRepoUrl: string;
  technologyUsed: [string];
}

const RequestedProject: React.FC = () => {
  const [reqProjectData, setReqProjectData] = useState<
    RequestedProjectI | undefined
  >();
  const [pending, setPending] = useState<boolean>(false);
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const params = useParams();

  // Get project data
  useEffect(() => {
    const fetchRequestedProject = async () => {
      setPending(true);
      try {
        const response = await axios.get(
          `${envConfig.projectUrl}/${params.id}`
        );
        if (response) {
          setReqProjectData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        throw new Error(`Unable to fetch due to: ${error.message}`);
      } finally {
        setPending(false);
      }
    };
    fetchRequestedProject();
  }, [params.id]);

  // Technology icons
  const techStackLogo = useMemo(() => {
    return [
      {
        technology: "html",
        icon: <FaHtml5 className="text-red-600 text-2xl" />,
      },
      {
        technology: "bootstrap",
        icon: <FaBootstrap className="text-blue-600 text-2xl" />,
      },
      {
        technology: "react",
        icon: <FaReact className="text-blue-600 text-2xl" />,
      },
      {
        technology: "angular",
        icon: <FaAngular className="text-red-600 text-2xl" />,
      },
      {
        technology: "vuejs",
        icon: <FaVuejs className="text-green-500 text-2xl" />,
      },
      {
        technology: "java",
        icon: <FaJava className="text-orange-600 text-2xl" />,
      },
      { technology: "php", icon: <FaPhp className="text-blue-600 text-2xl" /> },
      {
        technology: "python",
        icon: <FaPython className="text-yellow-500 text-2xl" />,
      },
      {
        technology: "cloudflare",
        icon: <FaCloudflare className="text-gray-600 text-2xl" />,
      },
      { technology: "ejs", icon: <SiEjs className="text-gray-800 text-2xl" /> },
      {
        technology: "express",
        icon: <SiExpress className="text-gray-800 text-2xl" />,
      },
      {
        technology: "prisma",
        icon: <SiPrisma className="text-purple-600 text-2xl" />,
      },
      {
        technology: "flask",
        icon: <SiFlask className="text-green-500 text-2xl" />,
      },
      {
        technology: "spring",
        icon: <SiSpring className="text-green-600 text-2xl" />,
      },
      {
        technology: "ruby on rails",
        icon: <SiRubyonrails className="text-red-600 text-2xl" />,
      },
      {
        technology: "mysql",
        icon: <SiMysql className="text-blue-500 text-2xl" />,
      },
      {
        technology: "postgresql",
        icon: <SiPostgresql className="text-blue-700 text-2xl" />,
      },
      {
        technology: "jsx",
        icon: <TbFileTypeJsx className="text-purple-600 text-2xl" />,
      },
      {
        technology: "xml",
        icon: <TbFileTypeXml className="text-blue-600 text-2xl" />,
      },
      {
        technology: "vite",
        icon: <TbBrandVite className="text-violet-600 text-2xl" />,
      },
      {
        technology: "nodejs",
        icon: <TbBrandNodejs className="text-green-600 text-2xl" />,
      },
      {
        technology: "laravel",
        icon: <TbBrandLaravel className="text-red-600 text-2xl" />,
      },
      {
        technology: "css",
        icon: <IoLogoCss3 className="text-blue-500 text-2xl" />,
      },
      {
        technology: "tailwindcss",
        icon: <RiTailwindCssFill className="text-cyan-500 text-2xl" />,
      },
      {
        technology: "nextjs",
        icon: <RiNextjsFill className="text-black text-2xl" />,
      },
      {
        technology: "javascript",
        icon: <RiJavascriptFill className="text-yellow-500 text-2xl" />,
      },
      {
        technology: "typescript",
        icon: <BiLogoTypescript className="text-blue-600 text-2xl" />,
      },
      {
        technology: "mongodb",
        icon: <BiLogoMongodb className="text-green-600 text-2xl" />,
      },
      {
        technology: "ruby",
        icon: <DiRuby className="text-red-600 text-2xl" />,
      },
      {
        technology: "django",
        icon: <DiDjango className="text-green-600 text-2xl" />,
      },
      {
        technology: "c",
        icon: <span className="text-md text-blue-600 font-bold">C++</span>,
      },
      {
        technology: ".net",
        icon: <span className="text-md text-blue-600 font-bold">.Net</span>,
      },
    ];
  }, []);

  // Handle logo rendering process
  useEffect(() => {
    // Ensure requestedProjectInfo and technologyUsed are available
    if (reqProjectData?.technologyUsed) {
      // Filter the tech stack to only show the technologies that are in `technologyUsed`
      reqProjectData.technologyUsed.map((item) => {
        const matchedIcon = techStackLogo.find(
          (tech) => tech.technology === item
        );
        return matchedIcon ? matchedIcon.icon : null;
      });
    }
  }, [reqProjectData?.technologyUsed, techStackLogo]);

  const images = [
    {
      id: 1,
      src: reqProjectData?.firstPageImageUrl,
      alt: ` ${reqProjectData?.projectName} slider image 1`,
    },
    {
      id: 2,
      src: reqProjectData?.secondPageImageUrl,
      alt: `${reqProjectData?.projectName} slider image 2`,
    },
    {
      id: 3,
      src: reqProjectData?.thirdPageImageUrl,
      alt: `${reqProjectData?.projectName} slider image 3`,
    },
  ];

  return (
    <main className="bg-white">
      {pending === true ? (
        <PageLoader />
      ) : (
        <section
          className="flex justify-center items-center  lg:justify-center lg:items-center
           align-middle pt-44 pb-28  
    overflow-x-hidden mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl "
        >
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden z-50">
              <CustomSlider images={images} />
            </div>
            {slideNumber === 1 ? (
              // Second section
              <div
                className={`shadow-md rounded-xl p-4 max-h-[340px]
           no-scrollbar overflow-y-scroll bg-white animate-slideRight`}
              >
                <div className="gap-2 flex justify-between mb-8">
                  <h1 className="text-lg font-semibold text-gray-600 border-b border-gray-300 ">
                    Project Details
                  </h1>
                  <button
                    onClick={() => setSlideNumber(0)}
                    className="float-end font-semibold transform translate-1 hover:scale-110
               hover:text-blue-800 "
                  >
                    &larr; Previous
                  </button>
                </div>
                <div className="max-w-[550px] text-gray-500">
                  {reqProjectData?.description}
                </div>
              </div>
            ) : (
              // First section
              <div className="w-full p-4 shadow-md rounded-xl bg-white animate-slideLeft">
                <div className="inline-flex items-center gap-2">
                  <img
                    src={reqProjectData?.projectLogoUrl}
                    alt={`${reqProjectData?.projectName} Logo`}
                    className="rounded-full ring-2 ring-gray-300 w-10 h-10"
                  />
                  <h1 className="text-lg font-semibold text-gray-600">
                    {reqProjectData?.projectName}.
                  </h1>
                </div>
                <h2 className="pt-2">
                  <span className="text-sm font-medium mr-2 text-gray-600">
                    Author:
                  </span>
                  <span className="text-gray-600">
                    {reqProjectData?.author}.
                  </span>
                </h2>
                <h3 className="">
                  <span className="text-sm font-medium mr-2 text-gray-600">
                    Type:
                  </span>
                  <span className="text-gray-600 capitalize">
                    {reqProjectData?.projectType}.
                  </span>
                </h3>
                <h4 className="">
                  <span className="text-sm font-medium mr-2 text-gray-600">
                    Own by:
                  </span>
                  <span className="text-gray-600">
                    {reqProjectData?.owner}.
                  </span>
                </h4>
                <div className="pt-2 mb-4 ">
                  <h5 className="font-medium text-gray-600">Tech stack:</h5>
                  <div className="flex justify-start w-full mt-3">
                    <div className="grid grid-cols-6 sm:grid-cols-6 gap-3">
                      {reqProjectData?.technologyUsed &&
                        reqProjectData.technologyUsed.map((tech, index) => {
                          const matchedIcon = techStackLogo.find(
                            (item) => item.technology === tech
                          );
                          return matchedIcon ? (
                            <span key={index}>{matchedIcon.icon}</span>
                          ) : null;
                        })}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-5">
                  <a
                    href={`https://${reqProjectData?.githubRepoUrl}`}
                    target="_blank"
                    className=" px-2 shadow-lg border border-gray-200 
                    rounded-md inline-flex items-center gap-2 hover:bg-gray-50
                    transform translate-1 hover:scale-110"
                  >
                    <GrGithub />
                    Github
                  </a>
                  <a
                    href={`https://${reqProjectData?.liveProjectUrl}`}
                    target="_blank"
                    className="px-2 shadow-lg border border-gray-200
                    rounded-md inline-flex items-center gap-2 hover:bg-gray-50
                      transform translate-1 hover:scale-110"
                  >
                    View Demo
                    <BiArrowToRight />
                  </a>
                </div>

                <button
                  onClick={() => setSlideNumber(1)}
                  className="float-end font-semibold transform translate-1 hover:scale-110 hover:text-blue-800"
                >
                  Next &rarr;
                </button>
              </div>
            )}{" "}
          </section>
        </section>
      )}
    </main>
  );
};

export default RequestedProject;
