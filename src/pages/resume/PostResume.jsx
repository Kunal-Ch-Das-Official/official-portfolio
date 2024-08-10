import React, { useCallback, useRef, useState } from "react";
import axios from "axios";
import envConfig from "../../../envConfig";
import { FaCloudUploadAlt } from "react-icons/fa";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
import { IoCloudDoneSharp } from "react-icons/io5";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import { useNavigate } from "react-router-dom";

const PostResume = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const [ifSuccess, setSuccess] = useState(false);
  const [asyncLoadingState, setAsyncLoadingState] = useState(false);
  const [fileName, setFileName] = useState("No choosen file");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    const name = event.target.files[0];
    setFileName(name.name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAsyncLoadingState(true);
    const formData = new FormData();
    formData.append("resume", file); // Ensure 'file' matches the server-side field name

    try {
      await axios.post(envConfig.postResumeApiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAsyncLoadingState(false);
      setMessage("Resume uploaded successfully!");
      setSuccess(true);
    } catch (error) {
      console.error("Error uploading file:", error.response || error.message);
      setAsyncLoadingState(false);
      setMessage("Failed to upload resume.");
      setSuccess(true);
    }
    formRef.current.reset();
    setFileName("No choosen file");
  };

  const handleSuccessCloseEvent = useCallback(() => {
    navigate("/dashboard/resume-manage");
    setSuccess(false);
  }, []);

  return (
    <div className=" w-5/6 float-right">
      {asyncLoadingState === true && <LoadingSpiner />}
      <CustomAlert
        showOrHide={ifSuccess === true ? "flex" : "hidden"}
        closeButton={handleSuccessCloseEvent}
        statusIcon={<IoCloudDoneSharp className="text-7xl text-blue-500" />}
        alertHead={message}
        buttonColor={"bg-blue-500 hover:bg-blue-600"}
        buttonText={"Got it"}
      />

      <div className="w-full bg-blue-100">
        <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white min-h-[300px] flex items-center justify-center text-center">
          <h4 className="text-3xl font-semibold  mb-8 text-center">
            Upload Resume here
          </h4>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto relative bg-gray-50 border-2 border-gray-300 border-dashed rounded-md bottom-28"
        >
          <div className="p-4 flex flex-col items-center justify-center text-center   cursor-pointer">
            <FaCloudUploadAlt className="text-7xl my-4 fill-gray-600 inline-block" />
            <p className="mt-4 text-semibold text-gray-500">
              Only image format files can be supported
            </p>
            <div className="flex flex-col justify-center">
              <label
                htmlFor="FileInput"
                className="text-blue-600 text-lg flex flex-col py-2 px-12 my-4  font-bold shadow-md rounded-lg"
              >
                Choose File
                <input
                  type="file"
                  onChange={handleFileChange}
                  id="FileInput"
                  className="hidden"
                />
              </label>
              <p className="text-green-600 font-semibold"> {fileName} </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 mb-8">
            <button
              type="submit"
              className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              <FaCloudUploadAlt className="mr-2 text-xl text-white" />
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostResume;
