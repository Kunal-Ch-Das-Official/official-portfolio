import React, { useEffect } from "react";
import { TiUploadOutline } from "react-icons/ti";
import { MdManageAccounts } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileBox from "../../../utils/non-functional/current-user-profile/ProfileBox";
import { MdOutlineArrowBackIos } from "react-icons/md";
interface FullMenuProps {
  handleSideBarMountUnmount: () => void;
}

const FullMenu: React.FC<FullMenuProps> = ({ handleSideBarMountUnmount }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex min-h-screen flex-1 flex-col justify-between border-e bg-white max-w-[230px]"
      data-aos="fade-right"
    >
      <div className="py-3">
        <ProfileBox />

        <ul className="mt-2 space-y-1">
          {/* Dashboard  full menu*/}
          <li>
            <a
              href="#"
              className="block rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium text-gray-700"
            >
              Dashboard
            </a>
          </li>

          {/* Projets  full menu*/}
          <li>
            <details className="group [&_summary::-webkit-details-marker]">
              <summary
                className="flex cursor-pointer items-center justify-between 
              rounded-lg px-4 py-2 mt-3 text-gray-500 hover:bg-primary-color hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Projets</span>

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
                <li id="manage_projects">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <MdManageAccounts className="text-xl mr-2 pl-1" />
                    Manage All
                  </a>
                </li>

                <li id="upload_project">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <TiUploadOutline className="text-xl mr-2 pl-1" />
                    Upload New
                  </a>
                </li>
              </ul>
            </details>
          </li>

          {/* Resume  full menu*/}
          <li>
            <details className="group [&_summary::-webkit-details-marker]">
              <summary
                className="flex cursor-pointer items-center justify-between 
              rounded-lg px-4 py-2 mt-1 text-gray-500 hover:bg-primary-color hover:text-gray-700"
              >
                <span className="text-sm font-medium">Resume</span>

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
                <li id="manage_resume">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <MdManageAccounts className="text-xl mr-2 pl-1" />
                    Manage All
                  </a>
                </li>

                <li id="upload_resume">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <TiUploadOutline className="text-xl mr-2 pl-1" />
                    Upload New
                  </a>
                </li>
              </ul>
            </details>
          </li>

          {/* Blog Article full menu*/}
          <li>
            <details className="group [&_summary::-webkit-details-marker]">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-primary-color hover:text-gray-700">
                <span className="text-sm font-medium"> Articles</span>

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
                <li id="manage_article">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <MdManageAccounts className="text-xl mr-2 pl-1" />
                    Manage All
                  </a>
                </li>

                <li id="upload_article">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <TiUploadOutline className="text-xl mr-2 pl-1" />
                    Post New
                  </a>
                </li>
              </ul>
            </details>
          </li>

          {/* Admin full menu*/}
          <li>
            <details className="group [&_summary::-webkit-details-marker]">
              <summary
                className="flex cursor-pointer items-center justify-between 
              rounded-lg px-4 py-2  text-gray-500 hover:bg-primary-color hover:text-gray-700"
              >
                <span className="text-sm font-medium">Admin</span>

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
                <li id="manage_all_users">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <FaUsersCog className="text-xl mr-2 pl-1" />
                    Manage All Users
                  </a>
                </li>

                <li id="change_password">
                  <a
                    href="#"
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <RiExchangeLine className="text-xl mr-2 pl-1" />
                    Change Password
                  </a>
                </li>
              </ul>
            </details>
          </li>

          {/* Reviews full menu*/}
          <li id="reviews-section">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
            >
              Reviews
            </a>
          </li>

          <li id="queries-message-section">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
            >
              Queries
            </a>
          </li>
        </ul>
      </div>
      <li
        id="close_sidebar_section"
        className="align-bottom list-none bg-gray-50 border-t border-gray-200 "
      >
        <p className="flex justify-end py-[17px] text-sm font-medium  hover:text-gray-700">
          <button onClick={handleSideBarMountUnmount}>
            <MdOutlineArrowBackIos className="text-lg transform translate-6 hover:scale-110 cursor-pointer" />
          </button>
        </p>
      </li>
    </div>
  );
};

export default FullMenu;
