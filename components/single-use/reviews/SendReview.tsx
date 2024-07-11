"use client";
import envConfig from "@/envConfig";
import CustomAlert from "@/utils/custom-alert/CustomAlert";
import axios from "axios";
import React, { useRef, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import successIcon from "@/public/icons/green-tick-1.png";
import faliureIcon from "@/public/icons/alert-error-icon.png";
import ReviewFormLoadingState from "@/utils/loading-state/form-submission-state/ReviewFormLoadingState";

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
  const [reviewContent, setReviewContent] = useState<string>("");
  const [rating, setRating] = useState<number[]>([]);
  const [starColor1, setStarColor1] = useState<boolean>(false);
  const [starColor2, setStarColor2] = useState<boolean>(false);
  const [starColor3, setStarColor3] = useState<boolean>(false);
  const [starColor4, setStarColor4] = useState<boolean>(false);
  const [starColor5, setStarColor5] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const [issubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [resMessage, setResMessage] = useState<ResponseMessage>({
    heading: "",
    message: "",
    advice: "",
    alertColor: "",
    iconStatus: undefined,
  });
  const formRef = useRef<HTMLFormElement>(null);



  // Rating Handler 
  const handleRatingClick = (ratingVal: number) => {
    if (rating.length < 5) {
      setRating((prevRatingsVal) => {
        const updatedRatings = [...prevRatingsVal, ratingVal];
        console.log("Updated Ratings:", updatedRatings);
        return updatedRatings;
      });
      if (ratingVal === 1) {
        setStarColor1((prevState) => !prevState);
      } else if (ratingVal === 2) {
        setStarColor2((prevState) => !prevState);
      } else if (ratingVal === 3) {
        setStarColor3((prevState) => !prevState);
      } else if (ratingVal === 4) {
        setStarColor4((prevState) => !prevState);
      } else if (ratingVal === 5) {
        setStarColor5((prevState) => !prevState);
      } else {
        setStarColor5(false);
      }
    } else {
      alert("Don't Do That");
    }
  };



// On Submit Handler
  const handlePostReview = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitSuccessful(true);
    const formData = {
      userName,
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
        iconStatus: successIcon,
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
        iconStatus: faliureIcon,
      });
      setFormStatus(true);
      console.log("Error:", error);
    }
    if (formRef.current) {
      formRef.current.reset();
      setRating([]);
      setStarColor1(false);
      setStarColor2(false);
      setStarColor3(false);
      setStarColor4(false);
      setStarColor5(false);
    }
  };


  // Alert Close Handler 
  const handleAlertClose = () => {
    setFormStatus(false);
  };
  return (
    <main>
      <section className={`text-gray-200 body-font relative`} data-aos={mount}>
        <div className="container px-5 w-full lg:w-1/2 mx-auto border-2 border-white rounded-lg hover:border-orange-500">
          <RiCloseCircleFill
            onClick={closePostBox}
            className="text-black text-4xl bg-white float-end mt-6 rounded-full hover:transition-transform hover:scale-110 hover:bg-red-500 hover:text-white"
          />
          <div className="py-20">
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
              <div className="rating my-12 flex flex-row justify-center">
                <input
                  type="button"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    starColor1 === true ? "bg-orange-400" : "bg-white"
                  } mx-2`}
                  onClick={() => handleRatingClick(1)}
                />
                <input
                  type="button"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    starColor2 === true ? "bg-orange-400" : "bg-white"
                  } mx-2`}
                  onClick={() => handleRatingClick(2)}
                />
                <input
                  type="button"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    starColor3 === true ? "bg-orange-400" : "bg-white"
                  } mx-2`}
                  onClick={() => handleRatingClick(3)}
                />
                <input
                  type="button"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    starColor4 === true ? "bg-orange-400" : "bg-white"
                  } mx-2`}
                  onClick={() => handleRatingClick(4)}
                />
                <input
                  type="button"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    starColor5 === true ? "bg-orange-400" : "bg-white"
                  } mx-2`}
                  onClick={() => handleRatingClick(5)}
                />
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
                      Enter Organzation Name
                    </label>
                    <input
                      type="text"
                      id="organzation"
                      name="organzation"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-[6px] px-3 leading-8 transition-colors duration-200 ease-in-out "
                      placeholder=" Enter Organzation Name"
                      required
                      // onChange={(event) => setUserName(event.target.value)}
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
                      className="relative 2xl:flex xl:flex lg:flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600"
                    >
                      <span className="relative z-10">Submit Review</span>
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
