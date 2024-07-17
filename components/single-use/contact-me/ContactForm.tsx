"use client";
import React, { useRef, useState } from "react";
import "./Contact.css";
import axios from "axios";
import envConfig from "@/envConfig";
import ReviewFormLoadingState from "@/utils/loading-state/form-submission-state/ReviewFormLoadingState";
import { TiWarning } from "react-icons/ti";
import { MdDownloadDone } from "react-icons/md";
import CustomAlert from "@/utils/custom-alert/CustomAlert";

interface ResponseMessage {
  heading: string;
  message: string;
  secondMessage: string;
  buttonColor: string;
  iconStatus: any;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [userName, setUserName] = useState<string>("");
  const [emailAdress, setEmailAdress] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>();
  const [textMessage, setTextMessage] = useState<string>();
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [alertDisplayer, setAlertDisplayer] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<ResponseMessage>({
    heading: "",
    message: "",
    secondMessage: "",
    buttonColor: "",
    iconStatus: null,
  });

  const postUserEmailHandler = async (event: React.FormEvent) => {
    setLoadingState(true);
    event.preventDefault();
    const formData = {
      userName: userName,
      contactEmail: emailAdress,
      contactNumber: contactNumber,
      message: textMessage,
    };
    try {
      await axios.post(envConfig.sendEmailApiUrl, formData).then(() => {
        setLoadingState(false);
        setAlertDisplayer(true);
        setAlertMessage({
          heading: "Thank you very much!",
          message: "I'll to contact you very soon",
          secondMessage: "Till then take care",
          buttonColor: "bg-green-500 hover:bg-green-800",
          iconStatus: (
            <MdDownloadDone className="text-4xl font-bold text-green-500" />
          ),
        });
      });
    } catch (error) {
      setLoadingState(false);
      setAlertDisplayer(true);
      setAlertMessage({
        heading: "Really Very Sorry!",
        message: "Currently i am unable to precess",
        secondMessage: "Reload the page and try it again",
        buttonColor: "bg-red-500 hover:bg-red-800",
        iconStatus: <TiWarning className="text-4xl font-bold text-red-500" />,
      });
      console.log(error);
    }

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleAlertClose = () => setAlertDisplayer(false);
  return (
    <div>
      <div className="background mt-20">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>Let&apos;s Connect</span>
                  <span>Via Email</span>
                </div>
                <p className="my-4">Have questions or want to discuss a project? Reach out to me through email, and I will get back to you as soon as possible.</p>
                <div className="app-contact">CONTACT INFO : +91 9874353723</div>
              </div>
              <div className="screen-body-item">
                <form
                  onSubmit={postUserEmailHandler}
                  className="app-form"
                  ref={formRef}
                >
                  <div className="app-form-group">
                    <input
                      type="text"
                      name="userName"
                      className="app-form-control"
                      placeholder="NAME"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                  </div>

                  <div className="app-form-group">
                    <input
                      type="email"
                      name="contactEmail"
                      className="app-form-control"
                      placeholder="EMAIL"
                      onChange={(event) => setEmailAdress(event.target.value)}
                    />
                  </div>

                  <div className="app-form-group">
                    <input
                      type="number"
                      name="contactNumber"
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      onChange={(event) => setContactNumber(event.target.value)}
                    />
                  </div>

                  <div className="app-form-group message">
                    <textarea
                      name="message"
                      className="app-form-control"
                      placeholder="MESSAGE"
                      onChange={(event) => setTextMessage(event.target.value)}
                    />
                  </div>

                  <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loadingState === true && <ReviewFormLoadingState />}
      <CustomAlert
        showOrHide={alertDisplayer === true ? "flex" : "hidden"}
        closeButton={handleAlertClose}
        statusIcon={alertMessage.iconStatus}
        alertHead={alertMessage.heading}
        message1={alertMessage.message}
        message2={alertMessage.secondMessage}
        buttonColor={alertMessage.buttonColor}
      />
    </div>
  );
};

export default ContactForm;
