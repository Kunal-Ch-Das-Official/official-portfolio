import React, { useRef, useState, useCallback, useEffect } from "react";
import { Editor } from "primereact/editor";
import { FaArrowCircleLeft } from "react-icons/fa";
import { MdSubtitles } from "react-icons/md";
import { SiLibreofficewriter } from "react-icons/si";
import { HiCommandLine } from "react-icons/hi2";
import axios from "axios";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
import { IoCloudDoneSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

const EditBlogs = () => {
  const { id } = useParams();
  const [getPrevBlog, setGetPrevBlog] = useState({});
  const [blogTitle, setBlogTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [imageNameDisplayer, setImageNameDisplayer] = useState(
    "Edit Existing Image"
  );
  const [imagePath, setImagePath] = useState(null);

  const [statementHeading, setStatementHeading] = useState("");
  const [statement, setStatement] = useState("");
  const [command, setCommand] = useState("");
  const [codeInp, setCodeInp] = useState("");

  const [message, setMessage] = useState("");
  const [customAlert, setCustomAlert] = useState(false);
  const [uploadingState, setUploadingState] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const getPrevBlogData = async () => {
      try {
        await axios
          .get(`${envConfig.getSingleBlogApiUrl}/${id}`)
          .then((res) => {
            setGetPrevBlog(res.data);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    getPrevBlogData();
  }, []);

  const handleImageOperation = (event) => {
    setImageNameDisplayer(event.target.files[0].name);
    setImagePath(event.target.files[0]);
  };

  const handleUpdateRequest = async (event) => {
    setUploadingState(true);
    event.preventDefault();

    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("authorName", authorName);
    formData.append("supportingImg", imagePath);
    formData.append("statementHeading", statementHeading);
    formData.append("statement", statement);
    formData.append("commandLine", command);
    formData.append("corespondingCode", codeInp);

    try {
      await axios
        .patch(`${envConfig.editBlogApiUrl}/${id}`, formData, {
          "Content-Type": "multipart/form-data",
        })
        .then(() => {
          setUploadingState(false);
          setCustomAlert(true);
          setMessage("Blog Has Been Successfully Updated!!");
          setStatement("");
          setImagePath(null);
          setImageNameDisplayer("Edit Existing Image");
        });
    } catch (error) {
      console.log(`Unable to Update due to: ${error.message}`);
      setUploadingState(false);
      setCustomAlert(true);
      setMessage("Unable To Update This Blog!!");
      setStatement("");
      setImagePath(null);
      setImageNameDisplayer("Edit Existing Image");
    }

    formRef.current.reset();
  };

  const handleSuccessCloseEvent = useCallback(() => {
    setCustomAlert(false);
  }, []);

  return (
    <main>
      {uploadingState === true && <LoadingSpiner />}
      <CustomAlert
        showOrHide={customAlert === true ? "flex" : "hidden"}
        closeButton={handleSuccessCloseEvent}
        statusIcon={<IoCloudDoneSharp className="text-7xl text-blue-500" />}
        alertHead={message}
        buttonColor={"bg-blue-500 hover:bg-blue-600"}
        buttonText={"Got it"}
      />

      <div className="w-5/6 float-right">
        <div className="bg-blue-50 py-6 sm:py-8 lg:py-12 ml-8">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Link to={"/dashboard/blog-manage"}>
        <FaArrowCircleLeft className="text-3xl mb-4 cursor-pointer"/>
        </Link>
            <div className="text-center">
              <h1 className="text-2xl text-blue-500 font-bold">
                Edit Existing Technical Blog
              </h1>
              <p className="text-gray-600 text-sm mt-2">
                Shere your learning and skills to the world
              </p>
            </div>

            <form onSubmit={handleUpdateRequest} ref={formRef}>
              {/* Blog Title And Author Input  */}
              <div className="my-12" id="Title_and_Author">
                <label
                  htmlFor="blog-title"
                  className="block mb-2 text-md font-bold text-blue-700"
                >
                  Change Existing Blog Title:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <MdSubtitles className="text-2xl text-gray-600" />
                  </span>
                  <input
                    type="text"
                    id="blog-title"
                    className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                    defaultValue={getPrevBlog.blogTitle}
                    onChange={(event) => setBlogTitle(event.target.value)}
                  />
                </div>

                <label
                  htmlFor="writer"
                  className="block mb-1 mt-2 text-md font-bold text-blue-700"
                >
                  Change Existing Writer Name:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <SiLibreofficewriter className="text-xl text-gray-600" />
                  </span>
                  <input
                    type="text"
                    id="writer"
                    className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                    defaultValue={getPrevBlog.authorName}
                    onChange={(event) => setAuthorName(event.target.value)}
                  />
                </div>
              </div>

              {/* File Upload  */}
              <div
                className="flex items-center justify-center w-full mb-8"
                id="Coresponding_Img"
              >
                <label
                  htmlFor="blog-image"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 ">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="mb-2 text-sm text-green-500 text-md font-bold">
                      {imageNameDisplayer}
                    </p>
                    <p className="text-xs text-gray-500 ">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="blog-image"
                    type="file"
                    className="hidden"
                    onChange={handleImageOperation}
                  />
                </label>
              </div>

              {/* First Statement Section  */}
              <div className="my-12" id="First_Statement">
                {/* Coresponding Heading  */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="statementHeading"
                    className="mb-2 inline-block text-lg text-blue-700  font-bold "
                  >
                    Coresponding Heading:
                  </label>
                  <input
                    name="statementHeading"
                    id="statementHeading"
                    defaultValue={getPrevBlog.statementHeading}
                    onChange={(event) =>
                      setStatementHeading(event.target.value)
                    }
                    className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none
                 ring-indigo-300 transition duration-100 focus:ring"
                  />
                </div>

                {/* First Statement Text Box  */}
                <h2 className="text-blue-700 font-bold text-lg mb-1">
                  Change Existing First Blog Statement:
                </h2>
                <div className="card" id="first-blog-statement">
                  <Editor
                    className="bg-white"
                    value={getPrevBlog.statement}
                    onTextChange={(e) => setStatement(e.textValue)}
                    style={{ height: "320px" }}
                  />
                </div>

                {/* Coresponding command line  */}
                <div>
                  <label
                    htmlFor="first-command-input"
                    className="block mb-2 text-md font-bold mt-1 text-blue-700"
                  >
                    Change Existing Coresponding Command Line:
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <HiCommandLine className="text-2xl text-gray-600" />
                    </span>
                    <input
                      type="text"
                      id="first-command-input"
                      className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                      defaultValue={getPrevBlog.commandLine}
                      onChange={(event) => setCommand(event.target.value)}
                    />
                  </div>
                </div>

                {/* Coresponding Code input  */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="codeOne"
                    className="my-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
                  >
                    Coresponding Code:
                  </label>
                  <textarea
                    name="codeOne"
                    id="codeOne"
                    defaultValue={getPrevBlog.corespondingCode}
                    onChange={(event) => setCodeInp(event.target.value)}
                    className="h-64 w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                    placeholder="Write Your Code Explaination"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button  */}
              <div className="flex items-center justify-between sm:col-span-2">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-800 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Update Blog
                </button>

                <span className="text-sm text-gray-500">*Required</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditBlogs;
