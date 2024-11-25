import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Input from "../../../utils/inputs/Input";
import TextArea from "../../../utils/inputs/TextArea";
import { MdOutlineClose } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import axios from "../../../../axios/axios";
import envConfig from "../../../../conf/envConfig";
import CustomAlert from "../../../utils/alert/CustomAlert";
interface PostFeedbackFormProps {
  mountUnmountState: boolean;
  mountUnmountHandler: Dispatch<SetStateAction<boolean>>;
}
interface AlertMessageI {
  title: string;
  message: string;
}
const PostFeedbackForm: React.FC<PostFeedbackFormProps> = ({
  mountUnmountState,
  mountUnmountHandler,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isRatingEmpty, setIsRatingEmpty] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  const [reviewContent, setReviewContent] = useState<string>("");
  const [rating, setRatings] = useState<number[]>([]);
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const [alertMessage, setAlertMessage] = useState<AlertMessageI>({
    title: "",
    message: "",
  });
  // main click ouside function
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        if (mountUnmountState === true) {
          mountUnmountHandler(false);
        }
      } else {
        mountUnmountHandler(true);
      }
    },
    [mountUnmountState]
  );

  // Is Section is open then start listing for click outside event
  useEffect(() => {
    if (mountUnmountState === true) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mountUnmountState, handleClickOutside]);

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

  // Submission handler
  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedStars === 0) {
      setIsRatingEmpty(true);
    } else {
      setIsSending(true);
      isRatingEmpty && setIsRatingEmpty(false);
      try {
        const feedbackData = {
          userName: firstName + " " + lastName,
          organization: organizationName,
          reviewContent: reviewContent,
          rating: rating,
        };
        const response = await axios.post(envConfig.feedbacksUrl, feedbackData);
        if (response.status === 201) {
          setIsSuccessful(true);
          setOpenAlert(true);
          setAlertMessage({
            title: "Thankyou very much!",
            message: "Have a nice day buddy ✌",
          });
        }
      } catch (error: any) {
        console.log(error);
        setIsSuccessful(false);
        setOpenAlert(true);
        setAlertMessage({
          title: "Something went wrong!!",
          message: "Could you please try it again later 😟",
        });
        throw new Error(
          `Unable to submit this feedback due to: ${error.message}`
        );
      } finally {
        setIsSending(false);
        mountUnmountHandler(false);
        setTimeout(() => {
          setOpenAlert(false);
        }, 5000);
        formRef.current?.reset();
        setSelectedStars(0);
      }
    }
  };

  return (
    <>
      {openAlert === true && (
        <CustomAlert
          alertText={alertMessage.title}
          message={alertMessage.message}
          isSuccessful={isSuccessful}
        />
      )}
      <section
        className={`min-h-screen overlay fixed inset-0 px-4 flex-wrap justify-center items-center
      w-full h-full z-[90999] before:fixed before:inset-0 before:w-full before:h-full
       before:bg-[rgba(0,0,0,0.5)]
       overflow-auto flex ${mountUnmountState === true ? "visible" : "hidden"}`}
      >
        <form
          ref={formRef}
          onSubmit={handleOnSubmit}
          className="bg-slate-800 border absolute animate-zoomIn border-slate-950 rounded-xl p-4"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-300">
              Send Feedback
            </h3>
            <MdOutlineClose
              onClick={() => mountUnmountHandler(false)}
              className="text-2xl transform translate-1 text-gray-400
        hover:scale-110 cursor-pointer hover:text-red-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 my-4">
            <Input
              inputColor="text-gray-400 border-gray-600 bg-slate-700"
              errorMessage={null}
              isNotValid={false}
              inputContainerId="first_name_review_sec"
              inputFieldsId="first_name_input"
              inputType="text"
              labelText="First Name"
              placeholderText="First Name"
              isRequired={true}
              targetCatcher={
                setFirstName as Dispatch<SetStateAction<string | number>>
              }
            />
            <Input
              inputColor="text-gray-400 border-gray-600 bg-slate-700"
              errorMessage={null}
              isNotValid={false}
              inputContainerId="last_name_review_sec"
              inputFieldsId="last_name_input"
              inputType="text"
              labelText="Last Name"
              placeholderText="Last Name"
              isRequired={true}
              targetCatcher={
                setLastName as Dispatch<SetStateAction<string | number>>
              }
            />
          </div>
          <div>
            <Input
              inputColor="text-gray-400 border-gray-600 bg-slate-700"
              errorMessage={null}
              isNotValid={false}
              inputContainerId="organization_input_conatiner"
              inputFieldsId="organization_input"
              inputType="text"
              labelText="Organization Name"
              placeholderText="Organization Name"
              isRequired={true}
              targetCatcher={
                setOrganizationName as Dispatch<SetStateAction<string | number>>
              }
            />
          </div>
          <div className="my-4">
            <TextArea
              textareaColor="text-gray-400 border-gray-600 bg-slate-700"
              areaContainerId="review_content"
              areaId="review_content_input"
              placeholderText="Write feedback"
              labelText="Write feedback"
              valueCatcher={setReviewContent}
              isRequired={false}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="starRating flex flex-row justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`flex flex-row text-xl cursor-pointer ${
                    star <= selectedStars ? "text-yellow-500" : "text-gray-500"
                  }`}
                  onClick={() => handleStarClick(star)}
                >
                  <FaStar />
                </span>
              ))}
            </div>
            <button
              type="submit"
              className="bg-slate-500 stroke-slate-100 border
       border-slate-700 col-span-2 flex justify-center rounded-lg items-center
        duration-300 hover:text-white hover:stroke-white hover:bg-orange-600"
            >
              {isSending ? (
                <p
                  className="border w-10 h-8 flex items-center rounded-lg bg-orange-300 
                   justify-center border-gray-50"
                >
                  <span className="loader"></span>
                </p>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.11 13.6501L13.69 10.0601"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {isRatingEmpty ? (
            <p className="text-red-500 text-xs">Please fillup rating field</p>
          ) : (
            ""
          )}
        </form>
      </section>
    </>
  );
};

export default PostFeedbackForm;
