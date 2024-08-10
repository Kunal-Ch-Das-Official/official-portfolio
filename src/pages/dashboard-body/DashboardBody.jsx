import React, { useEffect, useState } from "react";
import { RiLiveFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { BsWindowDock } from "react-icons/bs";
import { Link } from "react-router-dom";
import getResume from "../../../apis/GET/getResume";
import getReviews from "../../../apis/GET/getReviews";
import getProjects from "../../../apis/GET/getProjects";
import getBlogs from "../../../apis/GET/getBlogs";
import getEmails from "../../../apis/GET/getEmails";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";

const DashboardBody = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [projectResError, setProjectResError] = useState(false);
  const [lastEditDate, setLastEditDate] = useState("");

  const [allResume, setAllResume] = useState([]);
  const [resumeResError, setResumeResError] = useState(false);
  const [resumeUpdateDate, setResumeUpdateDate] = useState("");

  const [allBlogs, setAllBlogs] = useState([]);
  const [blogResError, setBlogResError] = useState(false);
  const [blogsUpdateDate, setBlogsUpdateDate] = useState("");

  const [allReviews, setAllReviews] = useState([]);
  const [reviewsResError, setReviewsResError] = useState(false);
  const [reviewsUpdateDate, setReviewsUpdateDate] = useState("");

  const [allEmails, setAllEmails] = useState([]);
  const [emailsResError, setEmailsResError] = useState(false);
  const [emailsUpdateDate, setEmailsUpdateDate] = useState("");
  const [commonLoadingState, setCommonLoadingState] = useState(true);

  // (Getting Resume) Operation //
  useEffect(() => {
    (async () => {
      try {
        const res = await getResume();
        setAllResume(res.data);
        const getLastUpdateDate = res.data[0];
        setCommonLoadingState(res ? false : true);
        if (getLastUpdateDate) {
          const getLastupdate = getLastUpdateDate.updatedAt;
          const firstSplit = getLastupdate.split(":")[0];
          const result = firstSplit.split("T")[0];
          setResumeUpdateDate(result);
        }
      } catch (error) {
        setCommonLoadingState(error ? false : true);
        console.log(`internal server error: ${error}`);
        setResumeResError(error ? true : false);
      }
    })();
  }, []);

  // (Getting Reviews) Operation //
  useEffect(() => {
    (async () => {
      try {
        const res = await getReviews();
        setCommonLoadingState(res ? false : true);
        setAllReviews(res.data);
        let reviewResCopy = res.data;
        if (reviewResCopy.length > 0) {
          const lastElement = reviewResCopy[reviewResCopy.length - 1];
          if (lastElement) {
            const lastUpdate = lastElement.date;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setReviewsUpdateDate(updatedDate);
          } else if (reviewResCopy.length === 0) {
            console.log("No Reviews available.");
          }
        } else if (reviewResCopy.length === 0) {
          const lastElement = reviewResCopy.length;
          if (lastElement) {
            const lastUpdate = lastElement.date;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setReviewsUpdateDate(updatedDate);
          } else {
            console.log("No Reviews available.");
          }
        }
      } catch (error) {
        setCommonLoadingState(error ? false : true);
        console.log(`Internal server error ${error}`);
        setReviewsResError(error ? true : false);
      }
    })();
  }, []);

  // (Getting Projects) Operation //
  useEffect(() => {
    (async () => {
      try {
        const res = await getProjects();
        setCommonLoadingState(res ? false : true);
        setAllProjects(res.data);
        var resCopy = res.data;
        if (resCopy.length > 0) {
          const lastElement = resCopy[resCopy.length - 1];
          if (lastElement) {
            const lastUpdate = lastElement.updatedAt;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setLastEditDate(updatedDate);
          } else if (resCopy.length === 0) {
            console.log("No projects available.");
          }
        } else if (resCopy.length === 0) {
          const lastElement = resCopy.length;
          if (lastElement) {
            const lastUpdate = lastElement.updatedAt;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setLastEditDate(updatedDate);
          } else {
            console.log("No projects available.");
          }
        }
      } catch (error) {
        setCommonLoadingState(error ? false : true);
        setProjectResError(error ? true : false);
        console.log(`Internal server error ${error}`);
      }
    })();
  }, []);

  // (Getting Blog) Operation //
  useEffect(() => {
    (async () => {
      try {
        const res = await getBlogs();
        setCommonLoadingState(res ? false : true);
        setAllBlogs(res.data);
        let blogResCopy = res.data;
        if (blogResCopy.length > 0) {
          const lastElement = blogResCopy[blogResCopy.length - 1];
          if (lastElement) {
            const lastUpdate = lastElement.updatedAt;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setBlogsUpdateDate(updatedDate);
          } else if (blogResCopy.length === 0) {
            console.log("No projects available.");
          }
        } else if (blogResCopy.length === 0) {
          const lastElement = blogResCopy.length;
          if (lastElement) {
            const lastUpdate = lastElement.updatedAt;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setBlogsUpdateDate(updatedDate);
          } else {
            console.log("No projects available.");
          }
        }
      } catch (error) {
        setCommonLoadingState(error ? false : true);
        console.log(`Internal server error ${error}`);
        setBlogResError(error ? true : false);
      }
    })();
  }, []);

  // (Getting Emails) Operation //
  useEffect(() => {
    (async () => {
      try {
        const res = await getEmails();
        setCommonLoadingState(res ? false : true);
        setAllEmails(res.data);
        let emailResCopy = res.data;
        if (emailResCopy.length > 0) {
          const lastElement = emailResCopy[emailResCopy.length - 1];
          if (lastElement) {
            const lastUpdate = lastElement.updatedAt;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setEmailsUpdateDate(updatedDate);
          } else if (emailResCopy.length === 0) {
            console.log("No Emails available.");
          }
        } else if (emailResCopy.length === 0) {
          const lastElement = emailResCopy.length;
          if (lastElement) {
            const lastUpdate = lastElement.updatedAt;
            let result = lastUpdate.split(":")[0];
            const updatedDate = result.split("T")[0];
            setEmailsUpdateDate(updatedDate);
          } else {
            console.log("No Emails available.");
          }
        }
      } catch (error) {
        setCommonLoadingState(error ? false : true);
        console.log(`Internal server error ${error}`);
        setEmailsResError(error ? true : false);
      }
    })();
  }, []);

  return (
    <div className="w-5/6 float-right bg-blue-50 min-h-screen">
      {commonLoadingState === true ? (
        <ComponentSpinner />
      ) : (
        <div className="w-4/5 mx-auto mt-14 pb-28">
          <div className="text-center my-12">
            <h1 className="text-3xl text-blue-600 font-bold">
              Admin Control Panel
            </h1>
            <p>Access all administrative tools and resources</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* Emails Report  */}
            <div className="w-full">
              <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
                <div className="flex justify-between pb-4 mb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center me-3">
                      <BsWindowDock className="text-xl " />
                    </div>
                    <div>
                      <h5 className="leading-none text-2xl font-bold text-black  pb-1">
                        {allEmails.length}
                      </h5>
                      <p className="text-sm font-normal text-gray-500">
                        Total Emails
                      </p>
                    </div>
                  </div>
                  <div>
                    {/* Live Text  */}
                    <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                      <RiLiveFill className="mr-2" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Client Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {emailsResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-500">OK</p>
                      )}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-end">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Last Update:
                    </dt>
                    <dd className="text-green-400 font-bold text-sm ">
                      {!emailsUpdateDate ? (
                        <p className="text-red-500">N/A</p>
                      ) : (
                        emailsUpdateDate
                      )}
                    </dd>
                  </dl>
                </div>

                <hr className="my-2" />
                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Server Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {emailsResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-500">OK</p>
                      )}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-end">
                    <Link
                      title="Manage"
                      to={"/dashboard/emails-manage"}
                      className="text-gray-700 border border-gray-200 px-2 bg-green-200 hover:bg-green-400 cursor-pointer rounded-full text-sm font-bold me-1"
                    >
                      Manage
                    </Link>
                  </dl>
                </div>
              </div>
            </div>

            {/* Reviews Report  */}
            <div className="w-full">
              <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
                <div className="flex justify-between pb-4 mb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center me-3">
                      <BsWindowDock className="text-xl " />
                    </div>
                    <div>
                      <h5 className="leading-none text-2xl font-bold text-black  pb-1">
                        {allReviews.length}
                      </h5>
                      <p className="text-sm font-normal text-gray-500">
                        Total Reviews
                      </p>
                    </div>
                  </div>
                  <div>
                    {/* Live Text  */}
                    <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                      <RiLiveFill className="mr-2" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Client Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {reviewsResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-500">OK</p>
                      )}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-end">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Last Update:
                    </dt>
                    <dd className="text-green-400 font-bold text-sm ">
                      {!reviewsUpdateDate ? (
                        <p className="text-red-500">N/A</p>
                      ) : (
                        reviewsUpdateDate
                      )}
                    </dd>
                  </dl>
                </div>

                <hr className="my-2" />
                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Server Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {reviewsResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-500">OK</p>
                      )}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-end">
                    <Link
                      title="Manage"
                      to={"/dashboard/review-manage"}
                      className="text-gray-700 border border-gray-200 px-2 bg-green-200 hover:bg-green-400 cursor-pointer rounded-full text-sm font-bold me-1"
                    >
                      Manage
                    </Link>
                  </dl>
                </div>
              </div>
            </div>

            {/* All Projects Report  */}
            <div className="w-full">
              <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
                <div className="flex justify-between pb-4 mb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center me-3">
                      <GoProjectSymlink className="text-xl " />
                    </div>
                    <div>
                      <h5 className="leading-none text-2xl font-bold text-gray-900  pb-1">
                        {allProjects.length}
                      </h5>
                      <p className="text-sm font-normal text-gray-500">
                        Total projects
                      </p>
                    </div>
                  </div>
                  <div>
                    {/* Live Text  */}
                    <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                      <RiLiveFill className="mr-2" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Server Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {projectResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-400">OK</p>
                      )}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-end">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Last Update:
                    </dt>
                    <dd className="text-green-400 font-bold text-sm ">
                      {!lastEditDate ? (
                        <p className="text-red-500">N/A</p>
                      ) : (
                        lastEditDate
                      )}
                    </dd>
                  </dl>
                </div>

                <hr className="my-2" />

                <div className="flex flex-row justify-between">
                  <dl className="inline-flex">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Client Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {projectResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-400">OK</p>
                      )}
                    </dd>
                  </dl>
                  <dl>
                    <Link
                      title="Manage"
                      to={"/dashboard/project-manage"}
                      className="text-gray-700 border border-gray-200 px-2 bg-green-200 hover:bg-green-400 cursor-pointer rounded-full text-sm font-bold me-1"
                    >
                      Manage
                    </Link>
                  </dl>
                </div>
              </div>
            </div>

            {/* Resume Report  */}
            <div className="w-full">
              <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
                <div className="flex justify-between pb-4 mb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center me-3">
                      <IoDocumentAttachSharp className="text-xl " />
                    </div>
                    <div>
                      <h5 className="leading-none text-2xl font-bold  pb-1">
                        {resumeResError === true ? (
                          <p className="text-red-500">500/Error</p>
                        ) : allResume.length === 0 ? (
                          <p className="text-red-500">404/Not-Found</p>
                        ) : (
                          <p className="text-green-500">Available</p>
                        )}
                      </h5>
                      <p className="text-sm font-normal text-gray-500">
                        Resume status
                      </p>
                    </div>
                  </div>
                  <div>
                    {/* Live Text  */}
                    <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                      <RiLiveFill className="mr-2" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Server Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {resumeResError ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-500">OK</p>
                      )}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-end">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Last Update:
                    </dt>
                    <dd className="text-green-400 font-bold text-sm ">
                      {!resumeUpdateDate ? (
                        <p className="text-red-500">N/A</p>
                      ) : (
                        resumeUpdateDate
                      )}
                    </dd>
                  </dl>
                </div>

                <hr className="my-2" />

                <dl className="flex items-center justify-end">
                  <Link
                    title="Manage"
                    to={"/dashboard/resume-manage"}
                    className="text-gray-700 border border-gray-200 px-2 bg-green-200 hover:bg-green-400 cursor-pointer rounded-full text-sm font-bold me-1"
                  >
                    Manage
                  </Link>
                </dl>
              </div>
            </div>

            {/* Blogs Report  */}
            <div className="w-full">
              <div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
                <div className="flex justify-between pb-4 mb-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center me-3">
                      <BsWindowDock className="text-xl " />
                    </div>
                    <div>
                      <h5 className="leading-none text-2xl font-bold text-black  pb-1">
                        {allBlogs.length}
                      </h5>
                      <p className="text-sm font-normal text-gray-500">
                        Total Blogs
                      </p>
                    </div>
                  </div>
                  <div>
                    {/* Live Text  */}
                    <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                      <RiLiveFill className="mr-2" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Client Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {blogResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-500">OK</p>
                      )}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-end">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Last Update:
                    </dt>
                    <dd className="text-green-400 font-bold text-sm ">
                      {!blogsUpdateDate ? (
                        <p className="text-red-500">N/A</p>
                      ) : (
                        blogsUpdateDate
                      )}
                    </dd>
                  </dl>
                </div>

                <hr className="my-2" />
                <div className="grid grid-cols-2">
                  <dl className="flex items-center">
                    <dt className="text-gray-700  text-sm font-bold me-1">
                      Server Response:
                    </dt>
                    <dd className="font-bold text-sm ">
                      {blogResError === true ? (
                        <p className="text-red-500">Error</p>
                      ) : (
                        <p className="text-green-500">OK</p>
                      )}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-end">
                    <Link
                      title="Manage"
                      to={"/dashboard/blog-manage"}
                      className="text-gray-700 border border-gray-200 px-2 bg-green-200 hover:bg-green-400 cursor-pointer rounded-full text-sm font-bold me-1"
                    >
                      Manage
                    </Link>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardBody;
