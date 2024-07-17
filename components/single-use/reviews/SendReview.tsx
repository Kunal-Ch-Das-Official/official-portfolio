"use client";
import envConfig from "@/envConfig";
import CustomAlert from "@/utils/custom-alert/CustomAlert";
import axios from "axios";
import React, { useRef, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { TiWarning } from "react-icons/ti";
import { MdDownloadDone } from "react-icons/md";
import ReviewFormLoadingState from "@/utils/loading-state/form-submission-state/ReviewFormLoadingState";
import { IoIosSend } from "react-icons/io";


interface SendReviewProps {
  closePostBox: () => void;
  mount: string | boolean;
}

interface ResponseMessage {
  heading: string;
  message: string;
  advice: string;
  alertColor: string;
  iconStatus: any;
}

const SendReview: React.FC<SendReviewProps> = ({ closePostBox, mount }) => {
  const [userName, setUserName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [reviewContent, setReviewContent] = useState<string>("");
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const [rating, setRatings] = useState<number[]>([]);
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const [issubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [resMessage, setResMessage] = useState<ResponseMessage>({
    heading: "",
    message: "",
    advice: "",
    alertColor: "",
    iconStatus: null,
  });
  const formRef = useRef<HTMLFormElement>(null);

  // Rating Handler
  const handleStarClick = (rating: number) => {
    setSelectedStars(rating);
    if (rating === 1) {
      setRatings([1]);
    } else if (rating === 2) {
      setRatings([1, 2]);
    } else if (rating === 3) {
      setRatings([1, 2, 3]);
    } else if (rating === 4) {
      setRatings([1, 2, 3, 4]);
    } else if (rating === 5) {
      setRatings([1, 2, 3, 4, 5]);
    }
  };

  // On Submit Handler
  const handlePostReview = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitSuccessful(true);
    const formData = {
      userName,
      organization,
      gender,
      reviewContent,
      rating,
    };

    try {
      const response = await axios.post(envConfig.postReviewApiUrl, formData);
      setIsSubmitSuccessful(false);
      setResMessage({
        heading: "Thank You For Your Valuable Rating!",
        message: "I'll Never Forget This Help, Thanks Again",
        advice: "Reload The Page To See Your Review!",
        alertColor: "bg-green-500 hover:bg-green-800",
        iconStatus: <MdDownloadDone className="text-4xl font-bold text-green-500"/>,
      });
      setFormStatus(true);
    } catch (error) {
      setIsSubmitSuccessful(true);
      setResMessage({
        heading: "I'm Really Very Sorry!",
        message:
          "I'm Unable To Recive Your Rating, Please Try It After Some Time.",
        advice: "Reload The Page And Submit Again",
        alertColor: "bg-red-500 hover:bg-red-800",
        iconStatus: <TiWarning className="text-4xl font-bold text-red-500"/>,
      });
      setFormStatus(true);
      console.log("Error:", error);
    }
    if (formRef.current) {
      formRef.current.reset();
      setRatings([]);
      setSelectedStars(0);
    }
  };

  // Alert Close Handler
  const handleAlertClose = () => setFormStatus(false);

  return (
    <main id="postReview">
      <section className={`text-gray-200 body-font relative`} data-aos={mount}>
        <div className="container blurBackgroundForm px-5 w-full lg:w-1/2 mx-auto border-2 border-white rounded-lg hover:border-orange-500">
          <RiCloseCircleFill
            onClick={closePostBox}
            className="text-black text-4xl bg-white float-end mt-6 rounded-full hover:transition-transform hover:scale-110 hover:bg-red-500 hover:text-white"
          />
          <div className="py-10">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Write a review for me
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handlePostReview}
              className="lg:w-full md:w-2/3 mx-auto"
            >
              <div className="star-rating my-12 flex flex-row justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${
                      star <= selectedStars ? "selected" : ""
                    }`}
                    onClick={() => handleStarClick(star)}
                  >
                    ★
                  </span>
                ))}
                <style jsx>{`
                  .star-rating {
                    display: flex;
                    flex-direction: row;
                    font-size: 2rem;
                    cursor: pointer;
                  }
                  .star {
                    margin-right: 5px;
                    color: gray;
                  }
                  .star.selected {
                    color: gold;
                  }
                `}</style>
              </div>

              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="userName"
                      className="leading-7 text-sm text-gray-100"
                    >
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-[6px] px-3 leading-8 transition-colors duration-200 ease-in-out "
                      placeholder=" Enter Name"
                      required
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>

                  <div className="relative w-full mt-6">
                    <label
                      htmlFor="organzation"
                      className="leading-7 text-sm text-gray-100"
                    >
                      Enter Organization Name
                    </label>
                    <input
                      type="text"
                      id="organziation"
                      name="organization"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-[6px] px-3 leading-8 transition-colors duration-200 ease-in-out "
                      placeholder=" Enter Organzation Name"
                      required
                      onChange={(event) => setOrganization(event.target.value)}
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="gender"
                      className="leading-7 text-sm text-gray-100"
                    >
                      Select Gender
                    </label>
                    <select
                     onChange={(event) => setGender(event.target.value)}
                      id="gender"
                      className="select select-bordered w-full max-w-xs  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 px-3 text-sm transition-colors duration-200 ease-in-out"
                    >
                      <option
                        defaultValue={"Select Gender"}
                        className="text-black"
                      >
                        Select Gender
                      </option>
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                      <option value={"others"}>Others</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="reviews"
                      className="leading-7 text-sm text-gray-100"
                    >
                      Write a review
                    </label>
                    <textarea
                      onChange={(event) => setReviewContent(event.target.value)}
                      placeholder="Write a review"
                      required
                      id="reviews"
                      name="reviews"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="relative 2xl:flex xl:flex lg:flex h-[50px] w-56 items-center justify-between px-8 overflow-hidden bg-tranparent hover:bg-transparent border-2 border-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold bg-orange-500 hover:shadow-orange-600 hover:text-white rounded-lg inline-flex"
                    >
                      <span className="relative z-10">Submit Review</span>
                      <IoIosSend className="text-2xl relative z-10"/> 
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {issubmitSuccessful === true && <ReviewFormLoadingState />}

      <CustomAlert
        showOrHide={formStatus === true ? "flex" : "hidden"}
        closeButton={handleAlertClose}
        statusIcon={resMessage.iconStatus}
        alertHead={resMessage.heading}
        message1={resMessage.message}
        message2={resMessage.advice}
        buttonColor={resMessage.alertColor}
      />
    </main>
  );
};

export default SendReview;
