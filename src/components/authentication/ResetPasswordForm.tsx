import { useRef, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FcCancel } from "react-icons/fc";
import { MdDownloadDone } from "react-icons/md";
import { MdLockReset } from "react-icons/md";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import CustomModel from "../../utils/non-functional/modals/CustomModal";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import axios from "../../../axios/axios";
import PasswordInput from "../../utils/non-functional/input-fields/PasswordInput";

interface LoginResponse {
  message: string | null;
  statusIcon: JSX.Element | null;
  buttonColor: string | null;
}

const ResetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const resetFormRef = useRef<HTMLFormElement>(null);
  const { id, token } = useParams<{ id: string; token: string }>();
  const [newPassword, setNewPassword] = useState<string>("");
  const [newConfirmPassword, setNewConfirmPassword] = useState<string>("");
  const [passwordValidationError, setPasswordValidationError] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [customAlert, setCustomAlert] = useState<boolean>(false);
  const [operationSuccess, setOperationSuccess] = useState<boolean>(false);
  const [loginResponse, setLoginResponse] = useState<LoginResponse>({
    message: null,
    statusIcon: null,
    buttonColor: null,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== newConfirmPassword) {
      setPasswordValidationError(true);
      setLoading(false);
      return;
    } else {
      setPasswordValidationError(false);
    }

    try {
      const res = await axios.put(
        `${envConfig.resetPasswordUrl}/${id}/${token}`,
        {
          adminUserPassword: newPassword,
          confirmPassword: newConfirmPassword,
        }
      );

      setOperationSuccess(res.status === 200);
      setLoginResponse({
        message: res.data.details,
        statusIcon: (
          <MdDownloadDone className="text-4xl font-bold text-green-600" />
        ),
        buttonColor: "bg-green-600",
      });
      setCustomAlert(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoginResponse({
        message: error.message,
        statusIcon: <FcCancel className="text-4xl font-bold text-red-600" />,
        buttonColor: "bg-red-600",
      });
      setCustomAlert(true);
    } finally {
      setLoading(false);
      resetFormRef.current?.reset();
    }
  };

  const closeModelHandler = () => {
    setCustomAlert(false);
    if (operationSuccess === true) {
      navigate("/sign-in");
    } else {
      navigate(-1);
    }
  };

  return (
    <main className="min-h-screen py-16 lg:py-0 md:py-0 bg-gray-50">
      {loading && <LoadingSpinner />}
      <CustomModel
        buttonText={"Got it"}
        showOrHide={customAlert ? "flex" : "hidden"}
        closeButton={closeModelHandler}
        message1={null}
        statusIcon={loginResponse.statusIcon}
        alertHead={loginResponse.message}
        buttonColor={loginResponse.buttonColor}
      />
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-500 md:text-2xl">
                Reset Forgotten Password.
              </h1>
              <p className="mt-0">
                Reset password of your existing admin account. Link will expire
                within 5min. Hurry Up!
              </p>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                ref={resetFormRef}
              >
                <div id="password">
                  <PasswordInput
                    inputId={"adminUserPassword"}
                    passwordLabel={"Password"}
                    inputValue={setNewPassword}
                    validationError={passwordValidationError}
                  />
                </div>
                <div id="confirmPassword">
                  <PasswordInput
                    inputId={"confirmPassword"}
                    passwordLabel={"Confirm password"}
                    inputValue={setNewConfirmPassword}
                    validationError={passwordValidationError}
                  />
                  {passwordValidationError && (
                    <p className="ml-2 text-red-500 font-sm text-xs my-0 py-0">
                      Password and confirm password are not the same
                    </p>
                  )}
                </div>
                <ColorButton
                  btnType={"submit"}
                  eventHandler={undefined}
                  btnText={"Reset Password"}
                  icon={<MdLockReset />}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPasswordForm;
