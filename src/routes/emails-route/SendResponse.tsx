import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../../utils/non-functional/input-fields/TextInput";
import TextArea from "../../utils/non-functional/input-fields/Textarea";
import TransparentLink from "../../utils/non-functional/anchor/TransparentLink";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import { MdCancelScheduleSend } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import SectionHeading from "../../utils/non-functional/common-heading/SectionHeading";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import FiveSecAlert from "../../utils/non-functional/custom-alert/FiveSecAlert";
interface AlertMessageI {
  text: string | null;
  message: string | null;
  status: boolean;
}
const SendResponse: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const emailFormRef = useRef<HTMLFormElement | null>(null);
  const [subject, setSubject] = useState<string>("");
  const [emailBody, setEmailBody] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<AlertMessageI>({
    text: "",
    message: "",
    status: false,
  });

  const sendEmailResponse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const authToken = localStorage.getItem("auth-token");
      const visitorToken = sessionStorage.getItem("visitor-token");
      const token = authToken || visitorToken;
      const emailContent = {
        subject: subject,
        emailBody: emailBody,
      };

      const sendEmail = await axios.post(
        `${envConfig.contactEnquiryResponseSendingUrl}/${params.id}`,
        emailContent,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (sendEmail) {
        if (sendEmail.status === 200) {
          setAlertMessage({
            text: "Successful!",
            message: "Everything seems great.",
            status: true,
          });
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setAlertMessage({
        text: "Failed!",
        message: "Something went wrong.",
        status: false,
      });
    } finally {
      setAlertOpen(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/admin-console/manage-all-emails");
      }, 5000);
    }
  };
  return (
    <form
      onSubmit={sendEmailResponse}
      ref={emailFormRef}
      className="min-h-screen mx-auto w-full px-10 lg:w-[80%]
    bg-white pt-10 lg:pt-6 z-[-10000] md:px-28"
    >
      {loading && <LoadingSpinner />}
      {alertOpen === true && (
        <>
          <FiveSecAlert
            alertText={alertMessage?.text || ""}
            message={alertMessage?.message || ""}
            isSuccessful={alertMessage?.status}
          />
        </>
      )}

      <SectionHeading mainHeading="Send response " subHeading="lorem" />
      <div id="Email_subject">
        <TextInput
          inputLabel="Subject"
          defaultText={undefined}
          textValue={setSubject}
          placeHolderText="Enter email subject here"
          isRequired={true}
          fieldId={"emailSubject"}
        />
      </div>
      <div id="Email_body">
        <TextArea
          editorLabel="Enter email body"
          eventValue={emailBody}
          eventHandler={setEmailBody}
        />
      </div>

      <div
        id="buttons"
        className="flex flex-col md:flex-row justify-around gap-4"
      >
        <ColorButton
          btnType="submit"
          eventHandler={undefined}
          btnText="Compose"
          icon={<SiMinutemailer />}
        />
        <TransparentLink
          path="/admin-console/manage-all-emails"
          linkText="Discurd"
          icon={<MdCancelScheduleSend />}
        />
      </div>
    </form>
  );
};

export default SendResponse;
