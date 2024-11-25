import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import Input from "../../../utils/inputs/Input";
import TextArea from "../../../utils/inputs/TextArea";
import SendButton from "../../../utils/buttons/SendButton";
import axios from "../../../../axios/axios";
import envConfig from "../../../../conf/envConfig";
import CancelButton from "../../../utils/buttons/CancelButton";
import PageLoader from "../../../utils/page-loader/PageLoader";
import MobileModal from "../../../utils/modals/MobileModal";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const ContactForm: React.FC = () => {
  const contactFormRef = useRef<HTMLFormElement>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | number>();
  const [importantMesage, setImportantMesage] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const [emailNotValid, setEmailNotValid] = useState<boolean>(false);
  const [numberNotValid, setNumberNotValid] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const domainArray = [
    " aol.com",
    "att.net",
    "bellsouth.net",
    "centurylink.com",
    "centurytel.net",
    "comcast.net",
    "cox.net",
    "charter.net",
    "earthlink.net",
    "frontiernet.net",
    "gvtc.com",
    "outlook.com",
    "hotmail.com",
    "msn.com",
    "live.com",
    "icloud",
    "netzero.net",
    "optonline.net",
    "rcn.com",
    "roadrunner.com",
    "rocketmail.com",
    "sbcglobal.net",
    "verizon.net",
    "windstream.net",
    "blackplanet.com",
    "usa.net",
    "pacbell.net",
    "cs.com",
    "chartermi.net",
    "bellsouth.com",
    "centurytel.com",
    "comcast.com",
    "cox.com",
    "charter.com",
    "earthlink.com",
    "me.com",
    "netzero.com",
    "optonline.com",
    "sbcglobal.com",
    "yahoo.com",
    "gmail.com",
  ];

  // Submit form handler
  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // 1. validate email
    const getDomain = emailAddress.split("@")[1].toLowerCase();
    let isEmailValid: boolean;
    if (domainArray.includes(getDomain)) {
      isEmailValid = true;
      setEmailNotValid(false);
    } else {
      isEmailValid = false;
      setEmailNotValid(true);
    }

    // 2. validate phone number
    let isNumberValid: boolean;
    if (phoneNumber && typeof phoneNumber === "number") {
      const convertString = phoneNumber.toString();
      convertString.length > 10
        ? (isNumberValid = false)
        : (isNumberValid = true);
    } else {
      typeof phoneNumber === "string" && phoneNumber.length > 10
        ? (isNumberValid = false)
        : (isNumberValid = true);
    }

    // 3. store the value of isNumberValid into state,
    //this is how can access this value outside of this fuction
    if (isNumberValid) {
      setNumberNotValid(false);
    } else {
      setNumberNotValid(true);
    }
    // 4. Proceed Submit if email and number is valid
    if (isNumberValid && isEmailValid) {
      try {
        setSending(true);
        const gatheredData = {
          userName: firstName + " " + lastName,
          contactEmail: emailAddress,
          contactNumber: phoneNumber,
          message: importantMesage,
        };

        const postForm = await axios.post(
          envConfig.contactFormUrl,
          gatheredData
        );
        if (postForm.status === 201) {
          setSubmitStatus(true);
        }
      } catch (error) {
        console.log(error);
        setSubmitStatus(false);
      } finally {
        setSending(false);
        setModalOpen(true);
        contactFormRef.current?.reset();
        emailNotValid && setEmailNotValid(false);
        numberNotValid && setNumberNotValid(false);
      }
    } else {
      sending && setSending(false);
    }
  };

  // Reset form handler
  const handleResetForm = () => {
    contactFormRef.current?.reset();
    emailNotValid && setEmailNotValid(false);
    numberNotValid && setNumberNotValid(false);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      {sending && <PageLoader />}
      <MobileModal
        submitStatus={submitStatus}
        closeHandler={handleCloseModal}
        showAndHide={modalOpen}
      />
      <form
        onSubmit={handleOnSubmit}
        ref={contactFormRef}
        className="bg-white p-2 lg:p-10 xl:p-16"
      >
        <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div
            className="flex flex-wrap justify-center lg:justify-start flex-1 shrink gap-5 items-center self-stretch
           my-auto basis-0 min-w-[240px] max-md:max-w-full"
          >
            <div className="flex relative flex-col justify-center self-stretch bg-orange-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <div className="w-[100px] h-[100px] aspect-auto">
                <MdOutlineConnectWithoutContact className="text-7xl text-red-400" />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto min-w-[240px]">
              <div className="text-lg text-start max-[492px]:text-center text-gray-800 font-semibold">
                Kunal Chandra Das.
              </div>
              <div className="text-sm text-gray-500">
                Web development & UX UI design practitioner.
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* firstName_input  */}
          <Input
            inputColor="text-gray-700 border-orange-200 bg-white"
            errorMessage={null}
            isNotValid={false}
            inputContainerId="firstNameInputContainer"
            inputFieldsId="firstNameInput"
            inputType="text"
            labelText="First Name"
            placeholderText="First Name"
            isRequired={true}
            targetCatcher={
              setFirstName as Dispatch<SetStateAction<string | number>>
            }
          />
          {/* Last name  */}
          <Input
            inputColor="text-gray-700 border-orange-200 bg-white"
            errorMessage={null}
            isNotValid={false}
            inputContainerId="lastNameInputContainer"
            inputFieldsId="lastNameInput"
            inputType="text"
            labelText="Surname"
            placeholderText="Surname"
            isRequired={true}
            targetCatcher={
              setLastName as Dispatch<SetStateAction<string | number>>
            }
          />
          {/* Email Adress  */}
          <Input
            inputColor="text-gray-700 border-orange-200 bg-white"
            errorMessage="Email address is not valid"
            isNotValid={emailNotValid}
            inputContainerId="emailIdInputContainer"
            inputFieldsId="emailIdInput"
            inputType="email"
            labelText="Email Address"
            placeholderText="Email Address"
            isRequired={true}
            targetCatcher={
              setEmailAddress as Dispatch<SetStateAction<string | number>>
            }
          />

          {/* Contact Number */}
          <Input
            inputColor="text-gray-700 border-orange-200 bg-white"
            errorMessage="Mobile number is not valid"
            isNotValid={numberNotValid}
            inputContainerId="phoneNoInputContainer"
            inputFieldsId="phoneNoInput"
            inputType="number"
            labelText="Contact Number"
            placeholderText="Contact Number"
            isRequired={true}
            targetCatcher={
              setPhoneNumber as Dispatch<SetStateAction<string | number>>
            }
          />
        </div>

        {/* Important message  */}
        <TextArea
          textareaColor="text-gray-700 border-orange-200 bg-white"
          areaContainerId="important_message_container"
          areaId="important_message_input"
          placeholderText="Important Message"
          labelText="Important Message"
          valueCatcher={setImportantMesage}
          isRequired={false}
        />

        {/* Submit button  */}
        <div className="sm:flex sm:flex-row-reverse flex gap-4 pt-6">
          <SendButton
            buttonType="submit"
            buttonText="Submit"
            clickEventHandler={undefined}
          />

          <CancelButton
            buttonType="button"
            buttonText="Reset"
            clickEventHandler={handleResetForm}
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
