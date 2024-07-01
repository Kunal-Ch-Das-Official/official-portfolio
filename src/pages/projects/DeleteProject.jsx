import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import ConfirmAlert from "../../utils/confirm-alert/ConfirmAlert";
import ProductSkeleton from "../../utils/skeleton/ProductSkeleton";

const DeleteProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [confirmAlert, setConfirmAlert] =useState(false);
  const [displaySkeleton, setDisplaySkeleton] = useState(false);


  useEffect(() => {
    const getProject = async () => {
      setDisplaySkeleton(true);
      try {
        await axios.get(`${envConfig.getProjectApiUrl}/${id}`).then((res) => {
          setProject(res.data);
          setDisplaySkeleton(false);
        });
      } catch (error) {
        console.log(`Faild to fetch data due to ${error}`);
      }

    };
    getProject();
  }, [id]);

  const deleteProjectHandler = async () => {
    setLoadingState(true);
  try {
    await axios.delete(`${envConfig.deleteProjectApiUrl}/${id}`)
    .then(() => {
      setLoadingState(false);
      navigate('/dashboard/project-manage');
    })
  } catch (error) {
    console.error('Faild to deleting the data:', error);
  }
  }

  const confirmActionDelete = () => {
    setConfirmAlert(true);
  }
  const confirmActionNotDelete = () => {
    setConfirmAlert(false);
  }


  return (
    <div className="w-5/6 float-right">
      {loadingState === true && <LoadingSpiner />}
      {confirmAlert === true && <ConfirmAlert deleteHandler={deleteProjectHandler} notDeleteHandler={confirmActionNotDelete}/>}
      
      <div className="w-4/5 mx-auto mt-14">
      
      <div className="text-center text-3xl font-bold text-blue-500 mb-16">Delete Project From Here</div>
      {displaySkeleton === true ? <ProductSkeleton /> :
        <div className="bg-gray-50 font-[sans-serif] relative max-w-4xl shadow-lg shadow-[#e9d9f3] mx-auto rounded overflow-hidden">
          <div className="grid sm:grid-cols-2 max-sm:gap-6">
            <div className="text-center p-6 flex flex-col justify-center items-center">
              <h3 className="font-extrabold text-2xl text-red-600 leading-tight">
                <span className="text-gray-800">Delete</span>{" "}
                {project.projectName}
              </h3>
              <h6 className="text-lg text-gray-800 mt-4">
                Owner: {project.author}
              </h6>
              <h6 className="text-lg text-green-600 mt-4">Id: {project._id}</h6>


              <button
                onClick={confirmActionDelete}
                className="bg-red-600 hover:bg-red-900 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
              >
                Delete
              </button>

              <div></div>
            </div>

            <div className="flex justify-end items-center p-2 bg-gradient-to-b from-[#ff2f2f] to-[#e27878] rounded-bl-[230px] w-full h-full">
              <div className="h-72 w-72 rounded-full bg-gradient-to-tr from-[#fdd300] to-[#9ed6b2] p-5">
                <img
                  src={project.projectThumbnail}
                  className="w-full h-full rounded-full object-cover border-8 border-white"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="absolute -top-[50px] -left-[50px] w-28 h-28 rounded-full bg-[#d10000] opacity-40 shadow-lg"></div>
          <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#830000] opacity-40 shadow-lg"></div>
        </div>
        }
      </div>

    </div>
  );
};

export default DeleteProject;
