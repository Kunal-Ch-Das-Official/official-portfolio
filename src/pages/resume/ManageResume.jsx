import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import getResume from "../../../apis/GET/getResume";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";

const ManageResume = () => {
  const [theResume, setTheResume] = useState(null);
  const [resumeId, setResumeId] = useState(null);
  const [response, setResponse] = useState(0);
  const [componentMountState, setComponentMountState] = useState(false);

  useEffect(() => {
    (async () => {
      setComponentMountState(true);
      const res = await getResume();
      setComponentMountState(res && false);
      if (res.data.length === 0) {
        setResponse(0);
        setTheResume(null);
        setResumeId(null);
      } else {
        setResponse(res.data);
        setTheResume(res.data[0].resume);
        setResumeId(res.data[0]._id);
      }
    })();
  }, []);

  return (
    <>
      {componentMountState === true ? (
        <ComponentSpinner />
      ) : (
        <div className="flex flex-col justify-center items-center my-40">
          <div className="text-center ml-60">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Resume Management Dashboard
            </h2>
            <p className="text-md font-semibold text-gray-500 mb-12">
              Manage and oversee resume efficiently, and edit or delete, current
              resume
            </p>
          </div>

          {response === 0 ? (
            <h1 className="text-center my-auto text-3xl font-bold pl-56 text-gray-500 ">
              Resume Are Not Available{" "}
            </h1>
          ) : (
            <>
              {theResume ? (
                <div className="card card-side bg-base-100 grid grid-cols-2 shadow-xl w-2/4 ml-60">
                  <div>
                    <img
                      src={theResume}
                      alt="resume"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="mt-12 ml-8">
                    <h2 className="text-2xl text-green-600 font-bold">
                      Kunal Chandra Das Portfolio
                    </h2>
                    <p className="text-xl text-gray-600 font-semibold my-4">
                      Edit And Delete Your Resume From Here
                    </p>
                    <div className="pr-6 mt-20 flex flex-col lg:flex-row justify-between items-center">
                      <Link
                        to={`/dashboard/resume-edit/${resumeId}`}
                        className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-green-600 hover:bg-green-700 active:bg-red-600"
                      >
                        <span className="border-r border-white pr-3">Edit</span>
                        <FaEdit className="text-white text-2xl ml-3" />
                      </Link>

                      <Link
                        to={`/dashboard/resume-delete/${resumeId}`}
                        className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-900 active:bg-red-600"
                      >
                        <span className="border-r border-white pr-3">
                          Delete
                        </span>
                        <MdDeleteSweep className="text-white text-2xl ml-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ManageResume;
