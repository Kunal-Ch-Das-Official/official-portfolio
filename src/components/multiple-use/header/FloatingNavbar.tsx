import React from "react";
import { BiCodeAlt, BiSolidUserDetail } from "react-icons/bi";
import { CgClose, CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdContactMail } from "react-icons/md";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { TbFileCv, TbMenuDeep } from "react-icons/tb";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import navbarStyle from "./navbarStyle.module.css";
import { Link } from "react-router-dom";

interface FloatingNavbarI {
  handleMenuOpenClick: () => void;
  sidebarVisability: boolean;
}

const FloatingNavbar: React.FC<FloatingNavbarI> = ({
  handleMenuOpenClick,
  sidebarVisability,
}) => {
  return (
    <nav className="flex justify-center items-center">
      <div
        className="fixed top-0 block mx-auto w-full md:max-w-full z-[10001]
        lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4 py-2
      blurBackground shadow-md rounded-md lg:px-8 lg:py-3 mt-0 md:mt-0 lg:mt-8"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* Heading  */}
          {!sidebarVisability && (
            <Link
              to={"/"}
              className="mr-4 inline-flex items-center  cursor-pointer py-1.5 text-base
             text-white font-semibold"
            >
              <BiCodeAlt className="text-3xl mr-2 text-orange-600" />
              <span className="text-orange-500 ">Kunal</span>
              <span className="text-orange-400 mx-1">Chandra</span>
              <span className="text-orange-200">Das</span>
            </Link>
          )}

          {/* Internal routes  */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {/* Projects  */}
              <li
                className="flex items-center p-1 text-sm gap-x-2 font-semibold
               text-white hover:text-orange-300 transform translate-1
               hover:scale-110 hover:bg-black hover:border border-slate-800 px-1.5 rounded-md"
              >
                <CgWebsite className="text-xl" />

                <a href="#" className="flex items-center">
                  Projects
                </a>
              </li>
              {/* About Me  */}
              <li
                className="flex items-center p-1 text-sm gap-x-2 text-white font-semibold
               hover:text-orange-300 transform translate-1 hover:scale-110 hover:bg-black hover:border border-slate-800 px-1.5 rounded-md"
              >
                <BiSolidUserDetail className="text-2xl" />

                <a href="#" className="flex items-center">
                  About
                </a>
              </li>

              {/* Connect via contact form  */}
              <li
                className="flex items-center p-1 text-sm gap-x-2 text-white font-semibold
               hover:text-orange-300 transform translate-1 hover:scale-110
                hover:bg-black hover:border border-slate-800 px-1.5 rounded-md "
              >
                <MdContactMail className="text-xl" />

                <a href="#" className="flex items-center">
                  Contact
                </a>
              </li>

              {/* Article  */}
              <li
                className="flex items-center p-1 text-sm gap-x-2 text-white font-semibold
               hover:text-orange-300 transform translate-1 hover:scale-110 hover:bg-black hover:border border-slate-800 px-1.5 rounded-md"
              >
                <PiArticleNyTimesFill className="text-2xl" />

                <a href="#" className="flex items-center">
                  Blogs
                </a>
              </li>
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
                className={`flex items-center p-1 text-sm gap-x-2 transform translate-1
           hover:scale-110 tooltip_bottom_text ${navbarStyle.bottom_tooltip}  hover:bg-black hover:border border-slate-800 px-1.5 rounded-md`}
              >
                <TbFileCv
                  className="text-2xl  text-white font-bold cursor-pointer
             hover:text-orange-300"
                />
                <span
                  className={`${navbarStyle.bottom_tooltip_text} w-[120px] left-[50%] text-xs`}
                >
                  Download resume
                </span>
              </li>
              {/* Write article  */}
              <li
                className={`flex items-center p-1 text-sm gap-x-2 transform 
              translate-1 hover:scale-110 ${navbarStyle.bottom_tooltip}  hover:bg-black hover:border border-slate-800 px-1.5 rounded-md`}
              >
                <VscFileSymlinkDirectory
                  className="text-2xl  text-white font-bold cursor-pointer
                 hover:text-orange-300"
                />
                <span
                  className={`${navbarStyle.bottom_tooltip_text} w-[80px] left-[110%] text-xs`}
                >
                  Write article
                </span>
              </li>
              {/* Linkedin  */}
              <li
                className={`flex items-center p-1 text-sm gap-x-2 transform translate-1 
              hover:scale-110 tooltip_bottom_text ${navbarStyle.bottom_tooltip}  hover:bg-black hover:border border-slate-800 px-1.5 rounded-md`}
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
              </li>
              {/* Github  */}
              <li
                className={`flex items-center p-1 text-sm gap-x-2 transform translate-1
               hover:scale-110 tooltip_bottom_text  hover:bg-black hover:border border-slate-800 px-1.5 rounded-md
               ${navbarStyle.bottom_tooltip}
               `}
              >
                <FaGithub
                  className="text-2xl  text-white font-bold cursor-pointer
                 hover:text-orange-300"
                />
                <span
                  className={`${navbarStyle.bottom_tooltip_text} w-[50px] left-[160%]  text-xs`}
                >
                  Github
                </span>
              </li>
            </ul>
          </div>

          {/* Small screen menu button  */}
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none 
            rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit 
            transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent 
            disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden text-white"
            type="button"
            onClick={handleMenuOpenClick}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover:scale-110">
              {sidebarVisability === true ? (
                <CgClose className="text-white mt-2 font-bold text-3xl hover:text-orange-300" />
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
