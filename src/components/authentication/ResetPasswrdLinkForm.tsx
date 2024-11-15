import React from "react";
import { useRef, useState } from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import { MdCancelScheduleSend } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import TransparentLink from "../../utils/non-functional/anchor/TransparentLink";
import EmailInput from "../../utils/non-functional/input-fields/EmailInput";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import CustomModel from "../../utils/non-functional/modals/CustomModal";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";

interface EmailResponseProps {
  heading: string | null;
  message: string | null;
  statusIcon: React.ReactNode;
  buttonColor: string | null;
}

const ResetPasswrdLinkForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [emailValidationError, setEmailValidationError] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [closeModel, setCloseModel] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<EmailResponseProps>({
    heading: null,
    message: null,
    statusIcon: null,
    buttonColor: null,
  });

  const sendRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const emailValidate = adminEmail.split("@")[1];
    if (emailValidate === "gmail.com" || emailValidate === "outlook.com") {
      setEmailValidationError(false);
      try {
        await axios
          .post(envConfig.resetPasswordLinkurl, { adminUserEmail: adminEmail })
          .then((res) => {
            setResponseMessage({
              heading: res.data.message,
              message: res.data.notification,
              statusIcon: (
                <MdFileDownloadDone className="text-4xl text-green-600 font-bold" />
              ),
              buttonColor: "bg-green-600",
            });
            setLoading(false);
            setCloseModel(true);
          });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setResponseMessage({
          heading: error.response.data.issue,
          message: error.response.data.details,
          statusIcon: (
            <MdOutlineCancelScheduleSend className="text-4xl text-red-600 font-bold" />
          ),
          buttonColor: "bg-red-600",
        });
        setLoading(false);
        setCloseModel(true);
      }
    } else {
      setEmailValidationError(true);
      setLoading(false);
    }
    formRef.current?.reset();
  };

  const closeModelHandler = () => {
    setCloseModel(false);
  };
  return (
    <main className="min-h-screen py-20 lg:py-0 md:py-0 bg-gray-50">
      {loading === true && <LoadingSpinner />}
      {
        <CustomModel
          buttonText={"Got it"}
          showOrHide={closeModel === true ? "flex" : "hidden"}
          closeButton={closeModelHandler}
          statusIcon={responseMessage.statusIcon}
          alertHead={responseMessage.heading}
          message1={responseMessage.message}
          buttonColor={responseMessage.buttonColor}
        />
      }
      <section>
        <div className="flex flex-col items-center justify-center px-0 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl">
                Send Request For Password Reset
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                ref={formRef}
                onSubmit={sendRequest}
              >
                {/* EMAIL FIELDS  */}
                <EmailInput
                  inputLabel={"Authorized email"}
                  defaultEmail={undefined}
                  emailValue={setAdminEmail}
                  emailValidationError={emailValidationError}
                  placeHolderText={"your_name@email.com"}
                  isRequired={true}
                  fieldId={"authUserEmail"}
                />
                {/* ACTION BUTTONS  */}
                <div className="flex flex-col">
                  <ColorButton
                    btnType={"submit"}
                    eventHandler={undefined}
                    btnText={"Send request"}
                    icon={<IoSend />}
                  />

                  <TransparentLink
                    path={"/"}
                    linkText={"Back"}
                    icon={<MdCancelScheduleSend />}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPasswrdLinkForm;
