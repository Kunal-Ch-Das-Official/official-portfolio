import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import ConfirmAlert from "../../utils/confirm-alert/ConfirmAlert";
import { FaArrowCircleLeft } from "react-icons/fa";
import getEmails from "../../../apis/GET/getEmails";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
import { IoCloudDoneSharp } from "react-icons/io5";

const DedicatedEmail = () => {
  const { id } = useParams();
  const [singleEmail, setSingleEmail] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState(false);
  const [componentMount, setComponentMount] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setComponentMount(true);
      const res = await getEmails(id);
      setSingleEmail(res.data);
      setComponentMount(res && false);
    })();
  }, []);

  const handleDelete = async () => {
    setLoadingState(true);
    try {
      await axios.delete(`${envConfig.deleteEmailsApiUrl}/${id}`);
      setLoadingState(false);
      setMessage("Email has been successfully Deleted!");
      setCustomAlert(true);
    } catch (error) {
      console.error("Error deleting the file:", error);
      setMessage("Unable To Delete The Mail Due To:", error);
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
    navigate("/dashboard/emails-manage");
  }, []);

  return (
    <main>
      <CustomAlert
        showOrHide={customAlert === true ? "flex" : "hidden"}
        closeButton={handleSuccessCloseEvent}
        statusIcon={<IoCloudDoneSharp className="text-7xl text-blue-500" />}
        alertHead={message}
        buttonColor={"bg-blue-500 hover:bg-blue-600"}
        buttonText={"Got it"}
      />

      {componentMount === true ? (
        <ComponentSpinner />
      ) : (
        <div className="w-5/6 float-right">
          {loadingState === true && <LoadingSpiner />}
          {confirmAlert === true && (
            <ConfirmAlert
              deleteHandler={handleDelete}
              notDeleteHandler={confirmActionNotDelete}
            />
          )}

          <div className="w-4/5 mx-auto mt-14">
            <Link to={"/dashboard/emails-manage"}>
              <FaArrowCircleLeft className="text-3xl mb-4 cursor-pointer" />
            </Link>
            <div className="mb-20">
              <h1 className="text-2xl font-bold text-center text-black">
                You got a new email from{" "}
                <span className="text-blue-600">{singleEmail.userName}</span>
              </h1>
            </div>
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Submit Id</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {" "}
                    {singleEmail._id}{" "}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Name</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {" "}
                    {singleEmail.userName}{" "}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Email Adress</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {" "}
                    {singleEmail.contactEmail}{" "}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Contact No</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {" "}
                    {singleEmail.contactNumber}{" "}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Message </dt>
                  <dd className="text-gray-700 sm:col-span-2 flex flex-col">
                    {singleEmail.message}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-12">
              <button className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                <a href={`mailto:${singleEmail.contactEmail}`}>Send Response</a>
              </button>

              <button
                onClick={confirmActionDelete}
                className="px-5 mt-4 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DedicatedEmail;
