/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../axios/axios";
import { BiSolidLogInCircle } from "react-icons/bi";
import { BsShieldFillExclamation } from "react-icons/bs";
import { PiShieldCheckFill } from "react-icons/pi";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import EmailInput from "../../utils/non-functional/input-fields/EmailInput";
import PasswordInput from "../../utils/non-functional/input-fields/PasswordInput";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import { useAuth } from "../../context/useAuth";
import CustomModel from "../../utils/non-functional/modals/CustomModal";
import envConfig from "../../../config/envConfig";

interface LoginResponse {
  message: string | null;
  details: string | null;
  statusIcon: React.ReactNode;
  buttonColor: string | null;
}

const LoginForm: React.FC = () => {
  const loginFormRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { login, modelOpen, setModelOpen } = useAuth();
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [emailValidationError, setEmailValidationError] =
    useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRememberMeChecked, setRememberMeChecked] = useState<boolean | null>(
    null
  );
  const [loginResponse, setLoginResponse] = useState<LoginResponse>({
    message: null,
    details: null,
    statusIcon: null,
    buttonColor: null,
  });

  // Submit handler
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    const emailValidate = adminEmail.split("@")[1];
    if (emailValidate === "gmail.com" || emailValidate === "outlook.com") {
      setEmailValidationError(false);
      const loginCredentials = {
        adminUserEmail: adminEmail,
        adminUserPassword: adminPassword,
      };
      try {
        const res = await axios.post(envConfig.loginUrl, loginCredentials);
        setLoginResponse({
          message: res.data.message,
          details: res.data.details,
          statusIcon: (
            <PiShieldCheckFill className="text-7xl font-bold text-primary-button-background" />
          ),
          buttonColor: "bg-primary-button-background",
        });

        if (isRememberMeChecked) {
          localStorage.setItem("auth-token", res.data.authentication_sign);
        } else {
          sessionStorage.setItem("visitor-token", res.data.authentication_sign);
        }
        setIsLoading(false);
        setModelOpen(true);
        login();
        setToken(res.data.authentication_sign);
      } catch (error: any) {
        setLoginResponse({
          message: error.response?.data?.issue || "An error occurred",
          details: error.response?.data?.details || "Please try again later",
          statusIcon: (
            <BsShieldFillExclamation className="text-7xl font-bold text-red-700" />
          ),
          buttonColor: "bg-red-600",
        });
        setToken(null);
        setModelOpen(true);
        setIsLoading(false);
      }
    } else {
      setEmailValidationError(true);
      setIsLoading(false);
    }
    loginFormRef.current?.reset();
  };

  const closeModelHandler = () => {
    setModelOpen(false);
    if (token) {
      navigate("/admin-console");
    }
  };

  return (
    <main className="min-h-screen py-16 lg:py-0 md:py-0 bg-bg-theme-color">
      {isLoading && <LoadingSpinner />}
      <CustomModel
        buttonText="Got it"
        showOrHide={modelOpen ? "flex" : "hidden"}
        closeButton={closeModelHandler}
        statusIcon={loginResponse.statusIcon}
        alertHead={loginResponse.message}
        message1={loginResponse.details}
        buttonColor={loginResponse.buttonColor}
      />
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl">
                Sign In As An Admin
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleLogin}
                ref={loginFormRef}
              >
                <EmailInput
                  inputLabel="Admin email id"
                  defaultEmail={undefined}
                  emailValue={setAdminEmail}
                  emailValidationError={emailValidationError}
                  placeHolderText="your_name@email.com"
                  isRequired={true}
                  fieldId="signIn"
                />
                <PasswordInput
                  inputId="authAdminPassword"
                  passwordLabel="Admin password"
                  inputValue={setAdminPassword}
                  validationError={undefined}
                />
                <div className="flex items-center justify-between">
                  <button className="flex items-start cursor-pointer">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        onChange={() =>
                          setRememberMeChecked(!isRememberMeChecked)
                        }
                      />
                      <label
                        htmlFor="remember"
                        className="text-gray-900 cursor-pointer ml-3 text-sm"
                      >
                        Remember me
                      </label>
                    </div>
                  </button>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:underline text-blue-700"
                  >
                    Forgot password?
                  </Link>
                </div>
                <ColorButton
                  btnType="submit"
                  eventHandler={undefined}
                  btnText="Sign In"
                  icon={<BiSolidLogInCircle />}
                />
                <p className="text-sm font-base text-gray-900">
                  Don’t have admin account?{" "}
                  <Link
                    to="/sign-up"
                    className="font-medium text-blue-700 hover:underline"
                  >
                    Sign Up Free
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
