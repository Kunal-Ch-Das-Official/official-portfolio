import { useState, useRef } from "react";
import TextInput from "../../utils/non-functional/input-fields/TextInput";
import EmailInput from "../../utils/non-functional/input-fields/EmailInput";
import PasswordInput from "../../utils/non-functional/input-fields/PasswordInput";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import { BiSolidLogInCircle } from "react-icons/bi";
import { BsShieldFillExclamation } from "react-icons/bs";
import { PiShieldCheckFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import CustomModel from "../../utils/non-functional/modals/CustomModal";
interface RegisterResponseProps {
  message: string | null;
  details: string | null;
  statusIcon: React.ReactNode;
  buttonColor: string | null;
}
const RegisterForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [emailValidationError, setEmailValidationError] =
    useState<boolean>(false);
  const [passalidationError, setPassValidationError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModelOpen, setModelOpen] = useState<boolean>(false);
  const [isResponseSuccess, setIsResponseSuccess] = useState<boolean>(false);
  const [registerResponse, setRegisterResponse] =
    useState<RegisterResponseProps>({
      message: null,
      details: null,
      statusIcon: null,
      buttonColor: null,
    });
  // Handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (password === confirmPassword) {
      setPassValidationError(false);
      const getDomail = emailId.split("@")[1];
      if (getDomail === "gmail.com" || getDomail === "outlook.com") {
        setEmailValidationError(false);
        try {
          const newUserInfo = {
            adminUserName: firstName + " " + lastName,
            adminUserEmail: emailId,
            adminUserPassword: password,
            confirmPassword: confirmPassword,
          };
          const res = await axios.post(envConfig.registerUrl, newUserInfo);
          if (res) {
            setRegisterResponse({
              message: res.data.message,
              details: res.data.details,
              statusIcon: (
                <PiShieldCheckFill className="text-7xl font-bold text-green-600" />
              ),
              buttonColor: "bg-green-600",
            });
            setIsResponseSuccess(true);
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          setRegisterResponse({
            message: error.response?.data?.issue || "An error occurred",
            details: error.response?.data?.details || "Please try again later",
            statusIcon: (
              <BsShieldFillExclamation className="text-7xl font-bold text-red-600" />
            ),
            buttonColor: "bg-red-600",
          });
        } finally {
          setModelOpen(true);
          setIsLoading(false);
          formRef.current?.reset();
        }
      } else {
        setEmailValidationError(true);
        setIsLoading(false);
      }
    } else {
      setPassValidationError(true);
      setIsLoading(false);
    }
  };
  const closeModelHandler = () => {
    setModelOpen(false);
    if (isResponseSuccess === true) {
      navigate("/");
    }
  };
  return (
    <>
      {isLoading === true && <LoadingSpinner />}
      <CustomModel
        buttonText="Got it"
        showOrHide={isModelOpen ? "flex" : "hidden"}
        closeButton={closeModelHandler}
        statusIcon={registerResponse.statusIcon}
        alertHead={registerResponse.message}
        message1={registerResponse.details}
        buttonColor={registerResponse.buttonColor}
      />
      <section className="w-full h-screen flex justify-center py-20 bg-bg-theme-color">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 lg:w-1/2 shadow-lg px-6 h-fit rounded-lg py-10 bg-white"
        >
          <h2 className="text-2xl font-semibold mb-6 text-medium-tone-text">
            Signup now to get admin access.{" "}
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <div className="w-full">
              <TextInput
                inputLabel="First Name"
                defaultText={undefined}
                textValue={setFirstName}
                placeHolderText="Enter first name"
                isRequired={true}
                fieldId="firstName"
              />
            </div>

            <div className="w-full">
              <TextInput
                inputLabel="Last Name"
                defaultText={undefined}
                textValue={setLastName}
                placeHolderText="Enter last name"
                isRequired={true}
                fieldId="lastName"
              />
            </div>
          </div>

          <div className="py-2">
            <EmailInput
              inputLabel="Email Id"
              defaultEmail={undefined}
              emailValue={setEmailId}
              emailValidationError={emailValidationError}
              placeHolderText="your_name@email.com"
              isRequired={true}
              fieldId="registerEmail"
            />
          </div>

          <div className="py-2">
            <PasswordInput
              inputId="registerPassword"
              passwordLabel="Password"
              inputValue={setPassword}
              validationError={passalidationError}
            />
          </div>
          <div className="py-2">
            <PasswordInput
              inputId="registerPasswordConfirm"
              passwordLabel="Confirm Password"
              inputValue={setConfirmPassword}
              validationError={passalidationError}
            />
          </div>
          <ColorButton
            btnType="submit"
            eventHandler={undefined}
            btnText="Sign Up"
            icon={<BiSolidLogInCircle />}
          />
          <p className="text-medium-tone-text">
            Already have an acount ?{" "}
            <Link
              to={"/"}
              className="text-blue-600 hover:underline font-semibold"
            >
              Sign-in
            </Link>{" "}
          </p>
        </form>
      </section>
    </>
  );
};

export default RegisterForm;
