import Image from "next/image";
import React from "react";

interface CustomAlertProps {
  showOrHide: string | boolean;
  statusIcon: any;
  alertHead: string;
  message1: string;
  message2: string;
  buttonColor: string;
  closeButton: () => void;
}
const CustomAlert: React.FC<CustomAlertProps> = ({
  showOrHide,
  buttonColor,
  statusIcon,
  alertHead,
  message1,
  message2,
  closeButton,
}) => {
  return (
    <div
      className={`blurBackground ${showOrHide}
    fixed inset-0 p-4 flex-col justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto`}
    >
      <div className="flex flex-col">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <div className="my-8 flex flex-col justify-center items-center">
            <Image
              src={statusIcon}
              width={50}
              height={50}
              alt="green-tick-icon"
            />

            <h4 className="text-xl text-gray-800 font-semibold mt-4">
              {alertHead}
            </h4>
            <p className="text-sm text-black leading-relaxed mt-4">
              {message1}
            </p>
            <p className="text-sm text-black leading-relaxed mt-4">
              {message2}
            </p>
          </div>

          <button
            type="button"
            onClick={closeButton}
            className={`px-5 py-2.5 w-full rounded-lg text-white text-lg border-none outline-none ${buttonColor}`}
          >
            Thank You
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
