import React, { useState } from "react";
import axios from "../../../axios/axios";
import { BiSolidLogInCircle } from "react-icons/bi";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import PasswordInput from "../../utils/non-functional/input-fields/PasswordInput";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import { useAuth } from "../../context/useAuth";

import envConfig from "../../../config/envConfig";
import FiveSecAlert from "../../utils/non-functional/custom-alert/FiveSecAlert";

interface AlertMessageI {
  text: string | null;
  message: string | null;
  status: boolean;
}

const ChangePasswordForm: React.FC = () => {
  const { logout } = useAuth();

  const [adminPassword, setAdminPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordValidation, setPasswordValidation] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessageI>({
    text: "",
    message: "",
    status: false,
  });

  // Submit handler
  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    if (adminPassword === confirmPassword) {
      const authToken = localStorage.getItem("auth-token");
      const visitorToken = sessionStorage.getItem("visitor-token");
      const token = visitorToken || authToken;
      const newPaasword = {
        adminUserPassword: adminPassword,
        confirmPassword: confirmPassword,
      };
      try {
        const response = await axios.put(
          envConfig.changePasswordUrl,
          newPaasword,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response) {
          if (response.status === 200) {
            setAlertOpen(true);
            setAlertMessage({
              text: "Successful!",
              message: "Everything seems great.",
              status: true,
            });
            setTimeout(() => {
              if (authToken) localStorage.removeItem("auth-token");
              if (visitorToken) sessionStorage.removeItem("visitor-token");
              logout();
              setIsLoading(true);
            }, 5000);
          }
        }
      } catch (error) {
        setAlertOpen(true);
        console.log(error);
        setAlertMessage({
          text: "Failed!",
          message: "Something went wrong.",
          status: false,
        });
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }
    } else {
      setPasswordValidation(true);
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-16 lg:py-0 md:py-0 bg-bg-theme-color">
      {isLoading && <LoadingSpinner />}
      {alertOpen === true && (
        <>
          <FiveSecAlert
            alertText={alertMessage?.text || ""}
            message={alertMessage?.message || ""}
            isSuccessful={alertMessage?.status}
          />
        </>
      )}
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-lg font-semibold leading-tight tracking-tight text-gray-500 md:text-xl">
                Change password of the current account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleChangePassword}
              >
                <PasswordInput
                  inputId="new_password"
                  passwordLabel="New password"
                  inputValue={setAdminPassword}
                  validationError={passwordValidation}
                />
                <PasswordInput
                  inputId="confirm_password"
                  passwordLabel="Confirm password"
                  inputValue={setConfirmPassword}
                  validationError={passwordValidation}
                />

                <ColorButton
                  btnType="submit"
                  eventHandler={undefined}
                  btnText="Change password"
                  icon={<BiSolidLogInCircle />}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChangePasswordForm;
