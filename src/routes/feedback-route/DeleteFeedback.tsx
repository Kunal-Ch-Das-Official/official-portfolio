import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmModel from "../../utils/non-functional/modals/ConfirmModal";
import { BsTrash } from "react-icons/bs";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import FiveSecAlert from "../../utils/non-functional/custom-alert/FiveSecAlert";

interface AlertMessageI {
  text: string | null;
  message: string | null;
  status: boolean;
}
const DeleteFeedback: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessageI>({
    text: "",
    message: "",
    status: false,
  });
  const params = useParams();
  const navigate = useNavigate();
  const deleteEventHandler = async () => {
    setLoading(true);
    try {
      const authToken = localStorage.getItem("auth-token");
      const visitorToken = sessionStorage.getItem("visitor-token");
      const token = authToken || visitorToken;

      const deleteProject = await axios.delete(
        `${envConfig.feedbacksUrl}/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (deleteProject) {
        setAlertMessage({
          text: "Successful!",
          message: "Everything seems great.",
          status: true,
        });
      }
    } catch (error) {
      console.log(error);
      setAlertMessage({
        text: "Failed!",
        message: "Something went wrong.",
        status: false,
      });
    } finally {
      setLoading(false);
      setAlertOpen(true);
      setTimeout(() => {
        navigate("/admin-console/manage-feedbacks");
      }, 5000);
    }
  };
  const cancelEvent = () => {
    navigate("/admin-console/manage-feedbacks");
  };
  return (
    <main className="text-center pt-20 min-h-screen">
      {alertOpen === true && (
        <>
          <FiveSecAlert
            alertText={alertMessage?.text || ""}
            message={alertMessage?.message || ""}
            isSuccessful={alertMessage?.status}
          />
          <LoadingSpinner />
        </>
      )}

      {loading === true ? (
        <LoadingSpinner />
      ) : (
        <section className={alertOpen === true ? "hidden" : "visible"}>
          <ConfirmModel
            showOrHide={true}
            confirmHandler={deleteEventHandler}
            cancelHandler={cancelEvent}
            statusIcon={<BsTrash className="text-5xl text-red-600" />}
            alertHead="Sure, want to delete this feedback?"
            confirmHandlerColor="bg-red-600 text-white"
            cancelHandlerColor="bg-white text-gray-600"
          />{" "}
        </section>
      )}
    </main>
  );
};

export default DeleteFeedback;
