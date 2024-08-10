import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import envConfig from "../../../envConfig";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import getSingleBlog from "../../../apis/GET/getSingleBlog";
import { IoCloudDoneSharp } from "react-icons/io5";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";
import CustomAlert from "../../utils/custom-alert/CustomAlert";
import ConfirmAlert from "../../utils/confirm-alert/ConfirmAlert";

const DeleteBlogs = () => {
  const { id } = useParams();
  const [existingBlog, setExistingBlog] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const [componentMount, setComponentMount] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [confirmAlert, setConfirmAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setComponentMount(true);
      const res = await getSingleBlog(id);
      setComponentMount(res && false);
      setExistingBlog(res);
    })();
  }, []);

  const handleDeleteRequest = async () => {
    setLoadingState(true);
    try {
      axios.delete(`${envConfig.deleteBlogApiUrl}/${id}`).then(() => {
        setLoadingState(false);
        setMessage("Article has been successfully Deleted!");
        setCustomAlert(true);
      });
    } catch (error) {
      console.log("Unable to delete due to some technical error", error);
      setLoadingState(false);
      setMessage("Unable To Delete This Article Due To:", error);
      setCustomAlert(true);
    }
  };

  const handleSuccessCloseEvent = useCallback(() => {
    setCustomAlert(false);
    navigate("/dashboard/blog-manage");
  }, []);

  const confirmActionDelete = () => {
    setConfirmAlert(true);
  };
  const confirmActionNotDelete = () => {
    setConfirmAlert(false);
  };

  return (
    <main>
      {confirmAlert === true && (
        <ConfirmAlert
          deleteHandler={handleDeleteRequest}
          notDeleteHandler={confirmActionNotDelete}
        />
      )}
      {componentMount === true ? (
        <ComponentSpinner />
      ) : (
        <div className="w-5/6 float-right bg-blue-50 min-h-screen">
          <div className=" py-6 sm:py-8 lg:py-12 ml-8">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="text-center">
                <h1 className="text-2xl text-blue-500 font-bold">
                  Remove This Article
                </h1>
                <p className="text-gray-600 text-sm mt-2">
                  Permanently delete this article from your list
                </p>
              </div>
              {loadingState === true && <LoadingSpiner />}
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
              <section>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                  <div className="grid grid-cols-1">
                    <div className="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
                      <div className="p-6 lg:text-center">
                        <span className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
                          {" "}
                          {existingBlog.authorName}
                        </span>
                        <h4 className="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                          Are You Really Want To Delete?
                        </h4>
                        <p className="mt-3 text-base leading-relaxed text-gray-500">
                          {existingBlog.blogTitle}
                        </p>
                        <div className="flex gap-2 mt-6 max-w-7xl lg:justify-center">
                          <div className="mt-3 rounded-lg sm:mt-0">
                            <Link
                              to={"/dashboard/blog-manage"}
                              className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-500 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Cancel
                            </Link>
                          </div>
                          <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                            <button
                              className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                              onClick={confirmActionDelete}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DeleteBlogs;
