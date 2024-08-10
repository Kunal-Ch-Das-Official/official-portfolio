import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import ConfirmAlert from "../../utils/confirm-alert/ConfirmAlert";
import getProjects from "../../../apis/GET/getProjects";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
import { IoCloudDoneSharp } from "react-icons/io5";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";

const DeleteProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [componentMountState, setComponentMountState] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    (async () => {
      setComponentMountState(true);
      const res = await getProjects(id);
      setProject(res.data);
      setComponentMountState(res && false);
    })();
  }, []);

  const deleteProjectHandler = async () => {
    setLoadingState(true);
    try {
      await axios.delete(`${envConfig.deleteProjectApiUrl}/${id}`).then(() => {
        setLoadingState(false);
        setMessage("Project has been successfully Deleted!");
        setCustomAlert(true);
      });
    } catch (error) {
      console.error("Faild to deleting the data:", error);
      setMessage("Unable To Delete This Project Due To:", error);
      setCustomAlert(true);
    }
  };

  const confirmActionDelete = () => {
    setConfirmAlert(true);
  };
  const confirmActionNotDelete = () => {
    setConfirmAlert(false);
  };

  const handleSuccessCloseEvent = useCallback(() => {
    setCustomAlert(false);
    navigate("/dashboard/project-manage");
  }, []);

  return (
    <main>
      {componentMountState === true ? (
        <ComponentSpinner />
      ) : (
        <div className="w-5/6 float-right">
          {loadingState === true && <LoadingSpiner />}
          {confirmAlert === true && (
            <ConfirmAlert
              deleteHandler={deleteProjectHandler}
              notDeleteHandler={confirmActionNotDelete}
            />
          )}

          <div className="w-4/5 mx-auto mt-14">
            <CustomAlert
              showOrHide={customAlert === true ? "flex" : "hidden"}
              closeButton={handleSuccessCloseEvent}
              statusIcon={
                <IoCloudDoneSharp className="text-7xl text-blue-500" />
              }
              alertHead={message}
              buttonColor={"bg-blue-500 hover:bg-blue-600"}
              buttonText={"Got it"}
            />

            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-blue-600 md:mb-6 lg:text-3xl">
                Remove This Project
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Permanently delete this project from your list
              </p>
            </div>

            <div className="bg-gray-50 font-[sans-serif] relative max-w-4xl shadow-lg shadow-[#e9d9f3] mx-auto rounded overflow-hidden">
              <div className="grid sm:grid-cols-2 max-sm:gap-6">
                <div className="text-center p-6 flex flex-col justify-center items-center">
                  <h3 className="font-extrabold text-2xl text-red-600 leading-tight">
                    <span className="text-gray-800">Delete</span>{" "}
                    {project.projectName}
                  </h3>
                  <h6 className="text-lg text-gray-800 mt-4">
                    Owner: {project.owner}
                  </h6>
                  <h6 className="text-lg text-green-600 mt-4">
                    Id: {project._id}
                  </h6>

                  <div className="flex flex-row ">
                    <button
                      onClick={confirmActionDelete}
                      className="bg-red-600 hover:bg-red-900 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
                    >
                      Delete
                    </button>
                    <Link
                      to={"/dashboard/project-manage"}
                      className="ml-4 bg-blue-600 hover:bg-blue-900 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
                    >
                      Cancel
                    </Link>
                  </div>
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
          </div>
        </div>
      )}
    </main>
  );
};

export default DeleteProject;
