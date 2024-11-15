import React, { useEffect, useState } from "react";
import { MdAssignmentAdd, MdOutlineFolderDelete } from "react-icons/md";
import { RiExchangeBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";

interface IResume {
  _id: string;
  resumeUrl: string;
}
const ManageResume: React.FC = () => {
  const [resumeData, setResumeData] = useState<IResume>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getResume = async () => {
      setLoading(true);
      try {
        const response = await axios.get(envConfig.resumeManagementUrl);
        if (response) {
          setResumeData(response.data[0]);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        throw new Error("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };
    getResume();
  }, []);

  return (
    <>
      {loading === true && <LoadingSpinner />}

      <main className="min-h-screen mx-auto w-full px-6 md:px-0 md:w-[80%] bg-white pt-16">
        <section
          className="flex flex-col lg:flex-row justify-between mx-auto px-8
      py-10 border-b border-gray-200"
        >
          {/* Page heading  */}
          <div className="mx-auto lg:text-start text-center ">
            <h1 className="text-xl text-gray-700">Kunal Chandra Das Resume</h1>
            <p className="flex flex-col">
              Resume management console, here we can choose which resume wiil be
              serve.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row  mt-6 lg:mt-0
             justify-around items-center mx-auto px-12 space-x-2 space-y-3 sm:space-y-0"
          >
            {/* Update resume  */}
            <Link
              to={`/admin-console/update-resume/${resumeData?._id}`}
              id="Change_resume"
              className={`inline-flex items-center bg-blue-500 max-w-xs gap-2 hover:bg-blue-600
             border border-gray-400 py-1.5 px-4 rounded-lg ${
               !resumeData && "hidden"
             }`}
            >
              <RiExchangeBoxFill />
              Change
            </Link>

            {/* Resume Add  */}
            <Link
              to={"/admin-console/upload-resume"}
              id="add_resume"
              className="inline-flex max-w-xs items-center bg-primary-button-background hover:bg-primary-button-background-hover
                gap-2
             border border-gray-400 py-1.5 px-4 rounded-lg"
            >
              <MdAssignmentAdd />
              Add
            </Link>
            {/* Remove Resume  */}
            <Link
              to={`/admin-console/delete-resume/${resumeData?._id}`}
              id="Remove_resume"
              className={`inline-flex items-center border bg-red-500 max-w-xs gap-2 hover:bg-red-600
             border-gray-400 py-1.5 px-4 rounded-lg ${!resumeData && "hidden"}`}
            >
              <MdOutlineFolderDelete />
              Remove
            </Link>
          </div>
        </section>

        {/* Resume Image  */}
        {resumeData ? (
          <div
            id="resume_image_container"
            className="flex justify-center mt-6 "
          >
            <img
              className="w-[100%] h-full px-4"
              src={resumeData?.resumeUrl}
              alt="resume image"
            />
          </div>
        ) : (
          <h6 className="p-6 font-semibold text-base text-accent-color">
            Resume are not available
          </h6>
        )}
      </main>
    </>
  );
};

export default ManageResume;
