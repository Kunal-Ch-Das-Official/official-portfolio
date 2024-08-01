import React, { useRef, useState, useCallback } from "react";
import { Editor } from "primereact/editor";
import { MdSubtitles } from "react-icons/md";
import { SiLibreofficewriter } from "react-icons/si";
import { HiCommandLine } from "react-icons/hi2";
import axios from "axios";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
import { IoCloudDoneSharp } from "react-icons/io5";

const UploadBlogs = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [imageNameDisplayer, setImageNameDisplayer] = useState(
    "Upload Coresponding Image"
  );
  const [imagePath, setImagePath] = useState(null);
  const [statementOne, setStatementOne] = useState("");
  const [firstCommand, setFirstCommand] = useState("");
  const [statementTwo, setStatementTwo] = useState("");
  const [secondCommand, setSecondCommand] = useState("");
  const [statementThree, setStatementThree] = useState("");
  const [thirdCommand, setThirdCommand] = useState("");
  const [statementFour, setStatementFour] = useState("");
  const [fourthCommand, setFourthCommand] = useState("");
  const [message, setMessage] = useState("");
  const [customAlert, setCustomAlert] = useState(false);
  const [uploadingState, setUploadingState] = useState(false);
  const formRef = useRef();

  const handleImageOperation = (event) => {
    setImageNameDisplayer(event.target.files[0].name);
    setImagePath(event.target.files[0]);
  };

  const handleSubmission = async (event) => {
    setUploadingState(true);
    event.preventDefault();

    const formData = new FormData();
    formData.append("blogTitle", blogTitle);
    formData.append("authorName", authorName);
    formData.append("supportingImg", imagePath);
    formData.append("statementOne", statementOne);
    formData.append("commandLineOne", firstCommand);
    formData.append("statementTwo", statementTwo);
    formData.append("commandLineTwo", secondCommand);
    formData.append("statementThree", statementThree);
    formData.append("commandLineThree", thirdCommand);
    formData.append("statementFour", statementFour);
    formData.append("commandLineFour", fourthCommand);

    try {
      await axios
        .post(envConfig.postBlogApiUrl, formData, {
          "Content-Type": "multipart/form-data",
        })
        .then(() => {
          setUploadingState(false);
          setCustomAlert(true);
          setMessage("Blog Has Been Successfully Posted!!");
          setStatementOne("");
          setStatementTwo("");
          setStatementThree("");
          setStatementFour("");
          setImagePath(null);
          setImageNameDisplayer("Upload Coresponding Image");
        });
    } catch (error) {
      console.log(`Unable to post due to: ${error.message}`);
      setUploadingState(false);
      setCustomAlert(true);
      setMessage("Unable To Post This Blog!!");
      setStatementOne("");
      setStatementTwo("");
      setStatementThree("");
      setStatementFour("");
      setImagePath(null);
      setImageNameDisplayer("Upload Coresponding Image");
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

          <div className="text-center">
            <h1 className="text-2xl text-blue-500 font-bold">Write A Technical Blog</h1>
            <p className="text-gray-600 text-sm mt-2">Shere your learning and skills to the world</p>
          </div>

            <form onSubmit={handleSubmission} ref={formRef}>
              {/* Blog Title And Author Input  */}
              <div className="my-12" id="Title_and_Author">
                <label
                  htmlFor="blog-title"
                  className="block mb-2 text-md font-bold text-blue-700"
                >
                  Blog Title:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <MdSubtitles className="text-2xl text-gray-600" />
                  </span>
                  <input
                    type="text"
                    id="blog-title"
                    className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                    placeholder="Enter The Blog Title Here"
                    onChange={(event) => setBlogTitle(event.target.value)}
                  />
                </div>

                <label
                  htmlFor="writer"
                  className="block mb-1 mt-2 text-md font-bold text-blue-700"
                >
                  Writer:
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                    <SiLibreofficewriter className="text-xl text-gray-600" />
                  </span>
                  <input
                    type="text"
                    id="writer"
                    className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                    placeholder="Enter The Name Of Author Here"
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
                {/* First Statement Text Box  */}
                <h2 className="text-blue-700 font-bold text-lg mb-1">
                  Write First Blog Statement:
                </h2>
                <div className="card" id="first-blog-statement">
                  <Editor
                    className="bg-white"
                    value={statementOne}
                    onTextChange={(e) => setStatementOne(e.textValue)}
                    style={{ height: "320px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="first-command-input"
                    className="block mb-2 text-md font-bold mt-1 text-blue-700"
                  >
                    Coresponding Command Line:
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <HiCommandLine className="text-2xl text-gray-600" />
                    </span>
                    <input
                      type="text"
                      id="first-command-input"
                      className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                      placeholder="Enter://Coresponding/Terminal/Command>"
                      onChange={(event) => setFirstCommand(event.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Second Statement Section  */}
              <div className="my-12" id="Second_Statement">
                <h2 className="text-blue-700 font-bold text-lg">
                  Write Second Blog Statement:
                </h2>
                <div className="card" id="second-blog-statement">
                  <Editor
                    className="bg-white"
                    value={statementTwo}
                    onTextChange={(e) => setStatementTwo(e.textValue)}
                    style={{ height: "320px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="second-command-input"
                    className="block mb-2 text-md font-bold mt-1 text-blue-700"
                  >
                    Coresponding Command Line:
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <HiCommandLine className="text-2xl text-gray-600" />
                    </span>
                    <input
                      type="text"
                      id="second-command-input"
                      className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                      placeholder="Enter://Coresponding/Terminal/Command>"
                      onChange={(event) => setSecondCommand(event.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Third Statement Section  */}
              <div className="my-12" id="Third_Statement">
                <h2 className="text-blue-700 font-bold text-lg">
                  Write Third Blog Statement:
                </h2>
                <div className="card" id="third-blog-statement">
                  <Editor
                    className="bg-white"
                    value={statementThree}
                    onTextChange={(e) => setStatementThree(e.textValue)}
                    style={{ height: "320px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="third-command-input"
                    className="block mb-2 text-md font-bold mt-1 text-blue-700"
                  >
                    Coresponding Command Line:
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <HiCommandLine className="text-2xl text-gray-600" />
                    </span>
                    <input
                      type="text"
                      id="third-command-input"
                      className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                      placeholder="Enter://Coresponding/Terminal/Command>"
                      onChange={(event) => setThirdCommand(event.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Fourth Statement Section  */}
              <div className="my-12" id="Fourth_Statement">
                <h2 className="text-blue-700 font-bold text-lg">
                  Write Fourth Blog Statement:
                </h2>
                <div className="card" id="fourth-blog-statement">
                  <Editor
                    className="bg-white"
                    value={statementFour}
                    onTextChange={(e) => setStatementFour(e.textValue)}
                    style={{ height: "320px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="fourth-command-input"
                    className="block mb-2 text-md font-bold mt-1 text-blue-700"
                  >
                    Coresponding Command Line:
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                      <HiCommandLine className="text-2xl text-gray-600" />
                    </span>
                    <input
                      type="text"
                      id="fourth-command-input"
                      className="rounded-none rounded-e-lg bg-white border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                      placeholder="Enter://Coresponding/Terminal/Command>"
                      onChange={(event) => setFourthCommand(event.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button  */}
              <div className="flex items-center justify-between sm:col-span-2">
                <button
                  type="submit"
                  className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-800 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Post Blog
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

export default UploadBlogs;
