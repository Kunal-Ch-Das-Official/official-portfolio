import React from "react";
import { BiCodeAlt, BiSolidUserDetail } from "react-icons/bi";
import { CgClose, CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { TbFileCv, TbMenuDeep } from "react-icons/tb";
import navbarStyle from "./navbarStyle.module.css";
import { Link } from "react-router-dom";
import { RiPenNibFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";

interface FloatingNavbarI {
  handleMenuOpenClick: () => void;
  sidebarVisability: boolean;
  downloadResumeEventHandler: () => Promise<void>;
  downloadStatus: boolean;
  isDownloaded: string;
}

const FloatingNavbar: React.FC<FloatingNavbarI> = ({
  handleMenuOpenClick,
  sidebarVisability,
  downloadResumeEventHandler,
  downloadStatus,
  isDownloaded,
}) => {
  return (
    <nav className="flex justify-center items-center">
      <div
        className={`${
          sidebarVisability === true
            ? "bg-transparent"
            : "blurBackground border shadow-md"
        } fixed top-0 block z-[10001] border-slate-800
        mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4 py-2
        rounded-md lg:px-8 lg:py-3 mt-0 md:mt-0 lg:mt-8`}
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Heading  */}
          {!sidebarVisability && (
            <Link
              aria-label="Home Page"
              to={"/"}
              className={`mr-4 inline-flex items-center  cursor-pointer py-1.5 text-base
             text-white font-semibold  ${navbarStyle.bottom_tooltip} `}
            >
              <BiCodeAlt className="text-3xl mr-2 text-orange-600" />
              <span className="text-orange-500 ">Kunal</span>
              <span className="text-orange-400 mx-1">Chandra</span>
              <span className="text-orange-200">Das</span>
              <span
                className={`${navbarStyle.bottom_tooltip_text} w-[100px] left-[50%]  text-xs`}
              >
                Home Page
              </span>
            </Link>
          )}

          {/* Internal routes  */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {/* Projects  */}
              <Link
                aria-label="All Projects Page"
                to={"/projects"}
                className="flex items-center p-1 text-sm gap-x-2 font-semibold
               text-white hover:text-orange-300 transform translate-1
               hover:scale-110 hover:bg-black hover:border border-slate-800 px-1.5 rounded-md"
              >
                <CgWebsite className="text-xl" />

                <span className="flex items-center">Projects</span>
              </Link>
              {/* About Me  */}
              <Link
                aria-label="About Kunal Chandra Das"
                to={"/about"}
                className="flex items-center p-1 text-sm gap-x-2 text-white font-semibold
               hover:text-orange-300 transform translate-1 hover:scale-110 hover:bg-black hover:border border-slate-800 px-1.5 rounded-md"
              >
                <BiSolidUserDetail className="text-2xl" />

                <span className="flex items-center">About</span>
              </Link>

              {/* Connect via contact form  */}
              <Link
                aria-label="Contact Kunal Chandra Das"
                to={"/contact"}
                className="flex items-center p-1 text-sm gap-x-2 text-white font-semibold
               hover:text-orange-300 transform translate-1 hover:scale-110
                hover:bg-black hover:border border-slate-800 px-1.5 rounded-md "
              >
                <MdContactMail className="text-xl" />

                <span className="flex items-center">Contact</span>
              </Link>

              {/* Article  */}
              <Link
                aria-label="See Technical Article By Kunal Chandra Das"
                to={"tech-article"}
                className="flex items-center p-1 text-sm gap-x-2 text-white font-semibold
               hover:text-orange-300 transform translate-1 hover:scale-110 hover:bg-black hover:border border-slate-800 px-1.5 rounded-md"
              >
                <PiArticleNyTimesFill className="text-2xl" />

                <span className="flex items-center">Blogs</span>
              </Link>
            </ul>
          </div>

          {/* more details  */}
          <div className="hidden lg:block">
            <ul
              className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 
            "
            >
              {" "}
              {/* Download resume  */}
              <li
                onClick={downloadResumeEventHandler}
                className={`flex items-center p-1 text-sm tooltip_bottom_text ${navbarStyle.bottom_tooltip} 
             rounded-md`}
              >
                {" "}
                {isDownloaded === "failed" ? (
                  <IoClose className="text-2xl text-red-500 font-bold cursor-pointer hover:text-orange-300" />
                ) : isDownloaded === "pass" ? (
                  <AiOutlineFileDone
                    className="text-2xl font-bold text-green-500 cursor-pointer
                   "
                  />
                ) : downloadStatus === true ? (
                  <span className="loader_white"></span>
                ) : (
                  <TbFileCv className="text-2xl  text-white font-bold cursor-pointer hover:text-orange-300" />
                )}
                <span
                  className={`${navbarStyle.bottom_tooltip_text} w-[120px] left-[50%] text-xs`}
                >
                  {isDownloaded === "failed"
                    ? "Download fail"
                    : isDownloaded === "pass"
                    ? "Successfull"
                    : "Download Resume"}
                </span>
              </li>
              {/* Write article  */}
              <a
                href="https://adminportal.kunalchandradas.tech"
                target="_blank"
                className={`flex items-center p-1 text-sm  ${navbarStyle.bottom_tooltip} `}
              >
                <RiPenNibFill
                  className="text-2xl  text-white font-bold cursor-pointer
                 hover:text-orange-300"
                />
                <span
                  className={`${navbarStyle.bottom_tooltip_text} w-[80px] left-[110%] text-xs`}
                >
                  Write article
                </span>
              </a>
              {/* Linkedin  */}
              <a
                href="https://www.linkedin.com/in/kunal-chandra-das-470bab218"
                target="_blank"
                className={`flex items-center p-1 text-sm tooltip_bottom_text ${navbarStyle.bottom_tooltip} 
              `}
              >
                <IoLogoLinkedin
                  className="text-2xl  text-white font-bold cursor-pointer
                 hover:text-orange-300"
                />
                <span
                  className={`${navbarStyle.bottom_tooltip_text} w-[50px] left-[160%]  text-xs`}
                >
                  Linkedin
                </span>
              </a>
              {/* Github  */}
              <a
                href={`https://github.com/Kunal-Ch-Das-Official`}
                target="_blank"
                className={`flex items-center p-1 text-sm  
               tooltip_bottom_text 
               ${navbarStyle.bottom_tooltip}
               `}
              >
                <FaGithub
                  className="text-[1.4rem]  text-white font-bold cursor-pointer
                 hover:text-orange-300"
                />
                <span
                  className={`${navbarStyle.bottom_tooltip_text} w-[50px] left-[160%]  text-xs`}
                >
                  Github
                </span>
              </a>
            </ul>
          </div>

          {/* Small screen menu button  */}
          <button
            aria-label="Side bar menu"
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none 
            rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit 
            transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent 
            disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden text-white"
            type="button"
            onClick={handleMenuOpenClick}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110">
              {sidebarVisability === true ? (
                <div className="bg-slate-700 w-10 h-10 flex justify-center items-center rounded-full mt-8 mr-8">
                  <CgClose className="text-white font-bold text-4xl hover:text-orange-300 z-50" />
                </div>
              ) : (
                <TbMenuDeep className="text-white  font-bold text-2xl hover:text-orange-300" />
              )}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
