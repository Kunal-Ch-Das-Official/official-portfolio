import axios from "axios";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import ConfirmAlert from "../../utils/confirm-alert/ConfirmAlert";
import getResume from "../../../apis/GET/getResume";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const DeleteResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theResume, setTheResume] = useState(null);
  const [lodingState, setLoadingState] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [componentMountState, setComponentMountState] = useState(false);

  useEffect(() => {
    (async () => {
      setComponentMountState(true);
      const res = await getResume(id);
      setComponentMountState(res && false);
      setTheResume(res.data.resume);
    })();
  }, []);

  // Delete File Function
  const handleDelete = async () => {
    setLoadingState(true);
    try {
      await axios.delete(`${envConfig.deleteResumeApiUrl}/${id}`);
      setLoadingState(false);
      setMessage("Resume has been successfully Deleted!");
      setCustomAlert(true);
    } catch (error) {
      console.error("Error deleting the file:", error);
      setMessage("Unable To Delete This Resume Due To:", error);
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
    navigate("/dashboard/resume-manage");
  }, []);
  return (
    <main>
      {componentMountState === true ? (
        <ComponentSpinner />
      ) : (
        <div className="flex flex-col justify-center items-center my-40">
          {lodingState === true && <LoadingSpiner />}

          <CustomAlert
            showOrHide={customAlert === true ? "flex" : "hidden"}
            closeButton={handleSuccessCloseEvent}
            statusIcon={<IoCloudDoneSharp className="text-7xl text-blue-500" />}
            alertHead={message}
            buttonColor={"bg-blue-500 hover:bg-blue-600"}
            buttonText={"Got it"}
          />

          {confirmAlert === true && (
            <ConfirmAlert
              deleteHandler={handleDelete}
              notDeleteHandler={confirmActionNotDelete}
            />
          )}
          <div className="card card-side bg-base-100 grid grid-cols-1 mx-auto shadow-xl w-2/4 ml-[450px]">
            <div className="text-center font-bold text-4xl text-red-500 my-12">
              Delete This Resume
            </div>
            <hr className="mb-4" />
            <div className="mx-auto">
              <img src={theResume} alt="resume" width={500} height={500} />
            </div>
            <hr className="mt-4 " />
            <div className="flex justify-center my-12">
              <button
                onClick={confirmActionDelete}
                className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-900 active:bg-red-600"
              >
                <span className="border-r border-white pr-3">Delete</span>
                <MdDeleteSweep className="text-white text-2xl ml-3" />
              </button>

              <Link
                to={"/dashboard/resume-manage"}
                className="ml-4 px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-900 active:bg-blue-600"
              >
                <span className="border-r border-white pr-3">Cancel</span>
                <MdCancel className="text-white text-2xl ml-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DeleteResume;
