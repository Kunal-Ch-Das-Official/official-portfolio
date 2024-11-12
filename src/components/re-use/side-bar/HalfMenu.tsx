import { MdDashboardCustomize } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { TbFileCv } from "react-icons/tb";
import { MdRateReview } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import { MdAccountCircle } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
interface HalfMenuProps {
  handleSidebarMount: () => void;
  sideBarStatus: boolean;
  profileLogo: string | null;
  handleLogoutEvent: () => void;
}
const HalfMenu: React.FC<HalfMenuProps> = ({
  handleSidebarMount,
  handleLogoutEvent,
  sideBarStatus,
  profileLogo,
}) => {
  const firstChar = profileLogo && profileLogo[0].toUpperCase();
  return (
    <nav className="fixed left-0 top-0 flex min-h-screen w-16 flex-col justify-between border-e bg-white shadow-xl">
      {/* Profile avatar  */}
      <div>
        <div className="inline-flex size-[71px] items-center justify-center">
          <span className="grid mt-3 size-10 place-content-center rounded-full font-bold bg-primary-color text-sm text-gray-600">
            {firstChar}
          </span>
        </div>

        <div className="border-t border-gray-300">
          <div className="px-2">
            {/* Dashboard  half menu*/}
            <div className="pt-2">
              <Link
                to={"/admin-console"}
                className="t group relative flex justify-center rounded px-2 py-2 hover:bg-primary-color"
              >
                <MdDashboardCustomize className="text-xl mt-1 text-gray-500 hover:text-gray-700" />

                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  Dashboard
                </span>
              </Link>
            </div>

            <ul className="space-y-1 ">
              {/* Projects half menu*/}
              <li className="mt-[0.17rem]">
                <Link
                  to={"/admin-console/manage-projects"}
                  className="group relative flex justify-center
                   rounded px-2 py-2 text-gray-500 hover:bg-primary-color hover:text-gray-700"
                >
                  <GrCatalog className="text-xl " />

                  <span
                    className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium
                   text-white group-hover:visible"
                  >
                    Projects
                  </span>
                </Link>
              </li>
              {/* Resume half menu*/}
              <li>
                <a
                  href="#"
                  className="group relative flex justify-center rounded px-2 py-2 text-gray-500 hover:bg-primary-color hover:text-gray-700"
                >
                  <TbFileCv className="text-2xl" />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Resume
                  </span>
                </a>
              </li>

              {/* Blogs half menu*/}
              <li>
                <Link
                  to={"/admin-console/manage-articles"}
                  className="group relative flex justify-center rounded px-2 py-2 text-gray-500 hover:bg-primary-color hover:text-gray-700"
                >
                  <RiArticleFill className="text-xl leading-3" />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Article
                  </span>
                </Link>
              </li>
              {/* Admin half menu*/}
              <li>
                <Link
                  to={"/admin-console/all-registerd-users"}
                  className="group relative flex justify-center rounded px-2 py-2 text-gray-500 hover:bg-primary-color hover:text-gray-700"
                >
                  <MdAccountCircle className="text-[1.4rem] leading-3" />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Admin
                  </span>
                </Link>
              </li>
              {/* Reviews half menu*/}
              <li>
                <a
                  href="#"
                  className="group relative flex justify-center rounded px-2 py-2 text-gray-500 hover:bg-primary-color hover:text-gray-700"
                >
                  <MdRateReview className="text-[1.4rem] leading-3" />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Reviews
                  </span>
                </a>
              </li>
              {/* Enquiry */}
              <li>
                <a
                  href="#"
                  className="group relative flex justify-center rounded px-2 py-2 text-gray-500 hover:bg-primary-color hover:text-gray-700"
                >
                  <SiGooglemessages className="text-xl" />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Emails
                  </span>
                </a>
              </li>
              <li
                className={`${sideBarStatus === true && "hidden"} pt-4`}
                id="sidebar_mount_button"
              >
                <p className="group relative flex justify-center rounded px-2 py-1.5 text-gray-600 hover:text-gray-700">
                  <MdArrowForwardIos
                    className="text-lg cursor-pointer"
                    onClick={handleSidebarMount}
                  />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Menu
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Logout  */}
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-200 bg-gray-50 p-2">
        <div>
          <button
            onClick={handleLogoutEvent}
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-primary-color hover:text-gray-700"
          >
            <IoLogOutSharp className="text-2xl" />

            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HalfMenu;
