import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiCodeAlt } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { LuBadgeInfo } from "react-icons/lu";
import { RiArticleFill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";

interface SidebarI {
  sidebarVisability: boolean;
  handleShowHide: (arg: boolean) => void;
  downloadStatus: boolean;
  downloadResumeEventHandler: () => Promise<void>;
  isDownloaded: string;
}

const Sidebar: React.FC<SidebarI> = ({
  sidebarVisability,
  handleShowHide,
  downloadStatus,
  downloadResumeEventHandler,
  isDownloaded,
}) => {
  const { pathname } = useLocation();
  return (
    <>
      {sidebarVisability === true && (
        <nav
          className={`flex min-h-screen flex-1 flex-col overflow-y-scroll overflow-x-hidden
             z-[10001] shadow-2xl no-scrollbar
       blurBackground w-[200px] fixed animate-slideLeft`}
        >
          {/* Logo  */}
          <div className="pl-2 pt-3" onClick={() => handleShowHide(false)}>
            <Link
              aria-label="Home"
              to={"/"}
              className="mr-4 inline-flex items-center z-[1001]
              cursor-pointer py-1.5 text-base text-white font-semibold"
            >
              <BiCodeAlt className="text-2xl mr-2 text-orange-600" />
              <span className="text-orange-500 ">Kunal</span>
              <span className="text-orange-400 mx-1">Chandra</span>
              <span className="text-orange-200">Das</span>
            </Link>
          </div>

          <div className="py-3">
            <ul
              className="mt-1
            
              space-y-[10px]"
            >
              {/* Sidebar menu*/}

              <li
                id="project"
                className="flex justify-center"
                onClick={() => handleShowHide(false)}
              >
                <Link
                  aria-label="Projects"
                  to={"/projects"}
                  className={` rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110
                 hover:text-orange-300
                 ${pathname === "/projects" ? "bg-black" : ""}
                 `}
                >
                  <GoProjectSymlink className="text-lg mr-2" />
                  Projects
                </Link>
              </li>
              <li
                id="about"
                className="flex justify-center"
                onClick={() => handleShowHide(false)}
              >
                <Link
                  aria-label="About"
                  to={"/about"}
                  className={` rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110
                 hover:text-orange-300
                  ${pathname === "/about" ? "bg-black" : ""}
                 
                 `}
                >
                  <LuBadgeInfo className="text-lg mr-2" />
                  About
                </Link>
              </li>
              <li
                id="blog_article"
                className="flex justify-center"
                onClick={() => handleShowHide(false)}
              >
                <Link
                  aria-label="Technical Article"
                  to={"/tech-article"}
                  className={`
                    ${pathname === "/tech-article" ? "bg-black" : ""}
                    rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110 hover:text-orange-300`}
                >
                  <RiArticleFill className="text-lg mr-2" />
                  Articles
                </Link>
              </li>
              <li
                id="contact"
                className="flex justify-center"
                onClick={() => handleShowHide(false)}
              >
                <Link
                  aria-label="Contact "
                  to={"/contact"}
                  className={`
                     ${pathname === "/contact" ? "bg-black" : ""}
                    rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110
                 hover:text-orange-300`}
                >
                  <MdContactMail className="text-lg mr-2" />
                  Contact
                </Link>
              </li>

              <li id="more_details">
                <details className="group [&_summary::-webkit-details-marker]">
                  <summary
                    className={`flex cursor-pointer items-center justify-between 
                     rounded-lg px-6 py-2 text-white hover:bg-black transform translate-1 
                      hover:scale-110 hover:text-orange-300 w-[90%]`}
                  >
                    <TbListDetails className="text-lg" />
                    <span className="text-sm font-medium">More Details</span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  {/* Routes path  */}
                  <ul className="mt-2 space-y-1">
                    <li
                      id="download_resume"
                      className="flex justify-center cursor-pointer"
                      onClick={downloadResumeEventHandler}
                    >
                      <p
                        className={` rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110 hover:text-orange-300`}
                      >
                        {isDownloaded === "failed" ? (
                          <IoClose className="text-lg mr-2 text-red-500 font-bold cursor-pointer hover:text-orange-300" />
                        ) : isDownloaded === "pass" ? (
                          <AiOutlineFileDone
                            className="text-lg mr-2 font-bold text-green-500 cursor-pointer
                   "
                          />
                        ) : downloadStatus === true ? (
                          <span className="loader_white mr-2"></span>
                        ) : (
                          <SiReaddotcv className="text-lg mr-2 text-white font-bold cursor-pointer hover:text-orange-300" />
                        )}
                        {isDownloaded === "failed"
                          ? "Failed"
                          : isDownloaded === "pass"
                          ? "Successful"
                          : "Download CV"}
                      </p>
                    </li>

                    <li
                      id="write_blogs"
                      className="flex justify-center"
                      onClick={() => handleShowHide(false)}
                    >
                      <a
                        href="https://adminportal.kunalchandradas.tech"
                        target="_blank"
                        className={` rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110 hover:text-orange-300`}
                      >
                        <TfiWrite className="text-lg mr-2" />
                        Write Article
                      </a>
                    </li>

                    <li
                      id="linkedin"
                      className="flex justify-center"
                      onClick={() => handleShowHide(false)}
                    >
                      <a
                        href="https://www.linkedin.com/in/kunal-chandra-das-470bab218"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Linkedin"
                        className={` rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110 hover:text-orange-300`}
                      >
                        <IoLogoLinkedin className="text-lg mr-2" />
                        Linkedin
                      </a>
                    </li>

                    <li
                      id="github"
                      className="flex justify-center"
                      onClick={() => handleShowHide(false)}
                    >
                      <a
                        href="https://github.com/Kunal-Ch-Das-Official"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github"
                        className={` rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium
               text-white inline-flex items-center hover:border
                border-gray-800 w-[90%] hover:bg-black transform translate-1 hover:scale-110 hover:text-orange-300`}
                      >
                        <FaGithub className="text-lg mr-2" />
                        Github
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default memo(Sidebar);
