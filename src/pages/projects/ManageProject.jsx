import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiFileEditFill } from "react-icons/ri";
import { RiDeleteBin6Fill } from "react-icons/ri";
import envConfig from "../../../envConfig";
import { Link } from "react-router-dom";

const ManageProject = () => {
const [apiResponse, setApiResponse] = useState([]);

useEffect(() => {

  const fetchProjects = async () => {
    try {
      await axios.get(envConfig.getProjectApiUrl)
    .then((res) => {
      setApiResponse(res.data);
    })
    } catch (error) {
      console.log(error);
    }
  }
  fetchProjects();
}, []);


  return (
    <div className="w-5/6 float-right">
      {apiResponse ? 
      <div className="w-4/5 mx-auto mt-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            All Project List
          </h2>
          <p className="text-md font-semibold text-gray-500 mb-12">
            Thease are the all projects of Kunal Chandra Das you can manage all
            projects from here
          </p>
        </div>
        <table className="min-w-full bg-blue-300">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="pl-4 w-8"></th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Project Name
              </th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Project Id
              </th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Status
              </th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Actions
              </th>
            </tr>
          </thead>

           {
            apiResponse.map((project) => 
              <tbody className="whitespace-nowrap" key={project._id}>
            <tr className="odd:bg-blue-50">
              <td className="pl-4 w-8"></td>

              <td className="p-4 text-sm">
                <div className="flex items-center cursor-pointer w-max">
                  <img
                    src={project.projectThumbnail}
                    className="w-9 h-9 rounded-full shrink-0"
                  />
                  <div className="ml-4">
                    <p className="text-sm text-black">{project.projectName}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                    {project.author}
                    </p>
                  </div>
                </div>
              </td>

              <td className="p-4 text-sm text-black">
                {project._id}
              </td>

              <td className="p-4">
                <div>
                  {project.status === true ? <p className="text-green-600 font-semibold">200</p> : <p className="text-red-700 font-semibold">404</p>}
                </div>
              </td>

              <td className="p-4">
                <div className="inline-flex">
                <Link to={`/dashboard/project-edit/${project._id}`} className="mr-4" title="Edit">
                  <RiFileEditFill className="text-2xl fill-green-500 hover:fill-green-700" />
                </Link>

                <Link to={`/dashboard/project-delete/${project._id}`} title="Delete">
                  <RiDeleteBin6Fill className="text-2xl fill-red-400 hover:fill-red-700" />
                </Link>
                </div>
              </td>
            </tr>
          </tbody>)
           }

        </table>
      </div>
      :
      <h1 className="text-center my-auto text-3xl font-bold pl-36 text-gray-500 ">No projects found please upload a projects first 404</h1>
      }
    </div>
  );
};

export default ManageProject;
