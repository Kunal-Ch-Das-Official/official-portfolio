import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import ConfirmAlert from "../../utils/confirm-alert/ConfirmAlert";
import getReviews from "../../../apis/GET/getReviews";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";
import { IoCloudDoneSharp } from "react-icons/io5";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
const DeleteReview = () => {
  const [apiResponse, setApiResponse] = useState({});
  const [ratings, setApiRatings] = useState([]);
  const { id } = useParams();
  const [loadingState, setLoadingState] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState(false);
  const navigate = useNavigate();
  const [componentMount, setComponentMount] = useState(false);
  const [message, setMessage] = useState("");
  const [customAlert, setCustomAlert] = useState(false);

  useEffect(() => {
    (async () => {
      setComponentMount(true);
      const res = await getReviews(id);
      setApiResponse(res.data);
      setApiRatings(res.data.rating);
      setComponentMount(res && false);
    })();
  }, []);

  const deleteReview = async () => {
    setLoadingState(true);
    try {
      await axios.delete(`${envConfig.deleteReviewApiUrl}/${id}`).then(() => {
        setLoadingState(false);
        setCustomAlert(true);
        setMessage("Review Has Been Successfully Deleted!!");
      });
    } catch (error) {
      console.error("Faild to deleting the data:", error);
      setCustomAlert(true);
      setMessage("Unable To Delete This Review Due To:", error);
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
    navigate("/dashboard/review-manage");
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
        <div className="w-5/6 float-right min-h-screen">
          {loadingState === true && <LoadingSpiner />}
          {confirmAlert === true && (
            <ConfirmAlert
              deleteHandler={deleteReview}
              notDeleteHandler={confirmActionNotDelete}
            />
          )}

          <div className="w-4/5 mx-auto mt-14">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Remove This Client Review
              </h2>
              <p className="text-md font-semibold text-gray-500 mb-12">
                Permanently delete this project from your list
              </p>
            </div>

            <div className=" max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
              <div className="mt-6 text-center">
                <div>
                  <h4 className="text-lg font-extrabold text-gray-800">
                    {apiResponse.userName}
                  </h4>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {apiResponse.reviewContent}
                  </p>
                </div>

                <div className="flex justify-center space-x-1 mt-4">
                  {ratings.map((star, index) => (
                    <FaStar key={index} className="text-xl text-yellow-600" />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={confirmActionDelete}
                className="bg-red-600 hover:bg-red-900 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
              >
                Delete
              </button>

              <Link
                to={"/dashboard/review-manage"}
                className="bg-blue-600 ml-12 hover:bg-blue-900 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DeleteReview;
