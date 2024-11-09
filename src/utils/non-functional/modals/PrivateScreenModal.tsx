import React, { ReactNode } from "react";
import alertStyle from "./ModalStyle.module.css";

interface PrivateScreenModalProps {
  buttonText: string;
  showOrHide: string;
  closeButton: () => void;
  statusIcon: ReactNode;
  alertHead: string | null;
  message1: string | null;
  message2?: string | null; // optional message2
  buttonColor: string | null;
}

const PrivateScreenModal: React.FC<PrivateScreenModalProps> = ({
  buttonText,
  showOrHide,
  closeButton,
  statusIcon,
  alertHead,
  message1,
  message2,
  buttonColor,
}) => {
  return (
    <div
      className={`${showOrHide} min-h-screen fixed inset-0 px-4 flex-wrap justify-center items-center w-full h-full z-[9999] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto ${alertStyle.overlay}`}
    >
      <div className="w-4/5 md:max-w-md h-[250px] top-[30%] bg-white shadow-lg rounded-md px-5 pt-4 relative mx-auto text-center">
        <div className="flex flex-col justify-center items-center">
          <div>{statusIcon}</div>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl font-semibold flex-1">{alertHead}</h3>
          <p className="text-md text-gray-500 mt-2">
            {message1}
            <br />
            {message2}
          </p>
          <button
            onClick={closeButton}
            className={`px-6 py-2.5 mt-4 w-full rounded cursor-pointer text-white text-sm font-semibold border-none outline-none ${buttonColor}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateScreenModal;
