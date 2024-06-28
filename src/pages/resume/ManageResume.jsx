import React, { useEffect, useState } from "react";
import axios from "axios";
import envConfig from "../../../envConfig";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
const ManageResume = () => {
  const [theResume, setTheResume] = useState(null);
  useEffect(() => {
    const fetchResume = async () => {
      try {
        await axios.get(envConfig.getResumeApiUrl).then((res) => {
          setTheResume(res.data[0].resume);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchResume();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center my-40">
      <div className="card card-side bg-base-100 grid grid-cols-2 shadow-xl w-2/4">
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

            <button
              type="button"
              className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-green-600 hover:bg-green-700 active:bg-red-600"
            >
              <span className="border-r border-white pr-3">Edit</span>
              <FaEdit className="text-white text-2xl ml-3" />
            </button>

            <button
              type="button"
              className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-900 active:bg-red-600"
            >
              <span className="border-r border-white pr-3">Delete</span>
              <MdDeleteSweep className="text-white text-2xl ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageResume;
