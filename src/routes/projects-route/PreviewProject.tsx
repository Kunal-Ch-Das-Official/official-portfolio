import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomSlider from "../../utils/non-functional/custom-slider/CusomSlider";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import { RxExternalLink } from "react-icons/rx";
import { FaSquareGithub } from "react-icons/fa6";

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
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { DiRuby, DiDjango } from "react-icons/di";
import { IoReturnUpBack } from "react-icons/io5";
interface IpreviewProject {
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
  technologyUsed: string[]; // Changed to string[] for correct typing
  createdAt: string;
  updatedAt: string;
}

const PreviewProject: React.FC = () => {
  const params = useParams();
  const [requestedProjectInfo, setRequestedProjectInfo] = useState<
    IpreviewProject | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [openArticle, setOpenArticle] = useState<boolean>(false);

  // Get project data
  useEffect(() => {
    const fetchRequestedProject = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${envConfig.projectUrl}/${params.id}`
        );
        if (response) {
          setRequestedProjectInfo(response.data);
        }
      } catch (error) {
        console.log(error);
        throw new Error(`Unable to fetch due to: ${error}`);
      } finally {
        setLoading(false);
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
    ];
  }, []);

  // Handle logo rendering process
  useEffect(() => {
    // Ensure requestedProjectInfo and technologyUsed are available
    if (requestedProjectInfo?.technologyUsed) {
      // Filter the tech stack to only show the technologies that are in `technologyUsed`
      requestedProjectInfo.technologyUsed.map((item) => {
        const matchedIcon = techStackLogo.find(
          (tech) => tech.technology === item
        );
        return matchedIcon ? matchedIcon.icon : null;
      });
    }
  }, [requestedProjectInfo?.technologyUsed, techStackLogo]);

  return (
    <>
      {loading === true && <LoadingSpinner />}
      <main className="text-center pt-20 w-full md:max-w-[80%] mx-auto bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-0 mb-12">
          <Link to={"/admin-console/manage-projects"}>
            <IoReturnUpBack className="size-8 transform translate-1 text-green-600 hover:scale-110 hover:text-blue-600" />
          </Link>
        </div>
        <section className="max-w-3xl mx-auto px-4 lg:px-0">
          <div className="w-full justify-start mb-6 inline-flex items-center">
            <img
              src={requestedProjectInfo?.projectLogoUrl}
              className="rounded-full ring-2 ring-green-700 mr-4 w-14 h-[58px] shadow-xl"
              width={60}
              height={60}
            />
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-600">
              {requestedProjectInfo?.projectName}
            </h1>
          </div>
          <CustomSlider
            imageSourceOne={requestedProjectInfo?.firstPageImageUrl}
            imageSourceTwo={requestedProjectInfo?.secondPageImageUrl}
            imageSourceThree={requestedProjectInfo?.thirdPageImageUrl}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {/* About project  */}
            <div
              className="bg-gray-50 h-full overflow-x-scroll text-start px-4 py-6 rounded-lg"
              id="about_project"
            >
              <p id="project_owner">
                <span className="font-semibold mr-2 inline-flex text-green-700">
                  Owner:
                </span>
                {requestedProjectInfo?.owner}
              </p>
              <p id="project_author">
                <span className="font-semibold mr-2 inline-flex text-green-700">
                  Author:
                </span>
                {requestedProjectInfo?.author}
              </p>
              <p id="created_at">
                <span className="font-mono mr-2 inline-flex text-green-700">
                  Uploaded At:
                </span>
                {new Date(requestedProjectInfo?.createdAt || "").toDateString()}
              </p>
              <p id="updated_at">
                <span className="font-mono mr-2 inline-flex text-green-700">
                  Updated At:
                </span>
                {requestedProjectInfo?.createdAt ===
                requestedProjectInfo?.updatedAt
                  ? "Not Yet"
                  : new Date(
                      requestedProjectInfo?.updatedAt || ""
                    ).toDateString()}
              </p>
              <section
                className="inline-flex items-center mt-1"
                id="access_link"
              >
                <span className="text-green-700 font-semibold">
                  Access Link:
                </span>
                <div className="inline-flex gap-2 ml-2">
                  <a
                    href={`https://${requestedProjectInfo?.liveProjectUrl}`}
                    target="_blank"
                    title="Live preview"
                  >
                    <RxExternalLink className="text-2xl" />
                  </a>
                  <a
                    href={`https://${requestedProjectInfo?.githubRepoUrl}`}
                    target="_blank"
                    title="Github Repository"
                  >
                    <FaSquareGithub className="text-2xl" />
                  </a>
                </div>
              </section>
              <div className="max-h-[130px]">
                <button
                  className="hover:underline text-blue-700 mb-2"
                  onClick={() => setOpenArticle((prev) => !prev)}
                >
                  {openArticle ? "Close.." : "Read about.."}
                </button>
                {openArticle && (
                  <article>{requestedProjectInfo?.description}</article>
                )}
              </div>
            </div>

            {/* Technology used  */}
            <div className="bg-gray-50 max-h-[222px] py-6 rounded-lg">
              <h2 className="font-medium  mb-4">Technology used:</h2>
              <div className="flex flex-col-7 justify-center items-center gap-3">
                {requestedProjectInfo?.technologyUsed &&
                  requestedProjectInfo.technologyUsed.map((tech, index) => {
                    const matchedIcon = techStackLogo.find(
                      (item) => item.technology === tech
                    );
                    return matchedIcon ? (
                      <div key={index}>{matchedIcon.icon}</div>
                    ) : null;
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PreviewProject;
