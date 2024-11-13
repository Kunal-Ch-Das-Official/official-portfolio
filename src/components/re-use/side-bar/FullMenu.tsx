import React, { useEffect } from "react";
import { TiUploadOutline } from "react-icons/ti";
import { MdManageAccounts } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileBox from "../../../utils/non-functional/current-user-profile/ProfileBox";
import { MdOutlineArrowBackIos } from "react-icons/md";
import PropfileCardSk from "../../../utils/non-functional/skeleton/PropfileCardSk";
import { Link } from "react-router-dom";
interface FullMenuProps {
  handleSideBarUnmount: () => void;
  userName: string | null;
  email: string | null;
  responseState: boolean;
  handleLogoutEvent: () => void;
}

const FullMenu: React.FC<FullMenuProps> = ({
  handleSideBarUnmount,
  userName,
  email,
  responseState,
  handleLogoutEvent,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav
      className="flex min-h-screen flex-1 flex-col justify-between border-e z-[1001] shadow-xl
       bg-white max-w-[300px] fixed left-0 md:left-16"
      data-aos="fade-right"
    >
      <div className="py-3">
        {responseState === true ? (
          <PropfileCardSk />
        ) : (
          <ProfileBox currentUsername={userName} registerEmail={email} />
        )}

        <ul className="mt-3 space-y-[5px]">
          {/* Dashboard  full menu*/}
          <li onClick={handleSideBarUnmount}>
            <Link
              to={"/admin-console"}
              className="block rounded-lg hover:bg-primary-color px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Dashboard
            </Link>
          </li>

          {/* Projets  full menu*/}
          <li>
            <details className="group [&_summary::-webkit-details-marker]">
              <summary
                className="flex cursor-pointer items-center justify-between 
              rounded-lg px-4 py-2  text-gray-500 hover:bg-primary-color hover:text-gray-700"
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
              <ul className="mt-2 space-y-1" onClick={handleSideBarUnmount}>
                <li id="manage_projects">
                  <Link
                    to={"/admin-console/manage-projects"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <MdManageAccounts className="text-xl mr-2 pl-1" />
                    Manage All
                  </Link>
                </li>

                <li id="upload_project">
                  <Link
                    to={"/admin-console/upload-project"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <TiUploadOutline className="text-xl mr-2 pl-1" />
                    Upload New
                  </Link>
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
              <ul className="mt-2 space-y-1" onClick={handleSideBarUnmount}>
                <li id="manage_resume">
                  <Link
                    to={"/admin-console/manage-resume"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <MdManageAccounts className="text-xl mr-2 pl-1" />
                    Manage All
                  </Link>
                </li>

                <li id="upload_resume">
                  <Link
                    to={"/admin-console/upload-resume"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <TiUploadOutline className="text-xl mr-2 pl-1" />
                    Upload New
                  </Link>
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
              <ul className="mt-2 space-y-1" onClick={handleSideBarUnmount}>
                <li id="manage_article">
                  <Link
                    to={"/admin-console/manage-articles"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <MdManageAccounts className="text-xl mr-2 pl-1" />
                    Manage All
                  </Link>
                </li>

                <li id="upload_article">
                  <Link
                    to={"/admin-console/post-article"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <TiUploadOutline className="text-xl mr-2 pl-1" />
                    Post New
                  </Link>
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
              <ul className="mt-2 space-y-1" onClick={handleSideBarUnmount}>
                <li id="manage_all_users">
                  <Link
                    to={"/admin-console/all-registerd-users"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <FaUsersCog className="text-xl mr-2 pl-1" />
                    Manage All Users
                  </Link>
                </li>

                <li id="change_password">
                  <Link
                    to={"/admin-console/change-password"}
                    className="inline-flex px-2.5 items-center rounded-lg py-2 w-48 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
                  >
                    <RiExchangeLine className="text-xl mr-2 pl-1" />
                    Change Password
                  </Link>
                </li>
              </ul>
            </details>
          </li>

          {/* Reviews full menu*/}
          <li onClick={handleSideBarUnmount} id="reviews-section">
            <Link
              to={"/admin-console/manage-feedbacks"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
            >
              Feedbacks
            </Link>
          </li>

          {/* Contact enquery full menu*/}
          <li onClick={handleSideBarUnmount} id="queries-message-section">
            <Link
              to={"/admin-console/manage-all-emails"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-primary-color hover:text-gray-700"
            >
              Emails
            </Link>
          </li>

          {/* small screen logout button full menu*/}
          <li
            onClick={handleSideBarUnmount}
            id="logout-section-for-sm-device"
            className="block md:hidden"
          >
            <button
              onClick={handleLogoutEvent}
              className="block rounded-lg px-4 py-2 text-sm text-start font-medium w-full
               text-gray-500 hover:bg-primary-color hover:text-gray-700"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Close menu arrow*/}
      <li
        id="close_sidebar_section"
        className="align-bottom list-none bg-gray-50 border-t border-gray-200 "
      >
        <p className="flex justify-end py-[17px] text-sm font-medium pr-2 hover:text-gray-700">
          <button onClick={handleSideBarUnmount}>
            <MdOutlineArrowBackIos className="text-lg transform translate-6 hover:scale-110 cursor-pointer" />
          </button>
        </p>
      </li>
    </nav>
  );
};

export default FullMenu;
