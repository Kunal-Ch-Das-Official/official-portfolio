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
    className={`blurBackground  ${showOrHide} fixed top-0 left-0 right-0 inset-0 p-4 flex-col justify-center items-center w-full h-full  before:fixed before:inset-0 before:w-full before:h-full before:bg-white overflow-auto z-[1000]`}
    >
      <div className="flex flex-col border-2 border-white p-4 rounded-lg opacity-1 z-[10000]">
        <div className="w-full max-w-lg bg-gray-800  shadow-lg rounded-lg p-6 relative">
          <div className="my-8 flex flex-col justify-center items-center">
          {statusIcon}

            <h4 className="text-xl text-white font-semibold mt-4">
              {alertHead}
            </h4>
            <p className="text-sm text-white leading-relaxed mt-4">
              {message1}
            </p>
            <p className="text-sm text-green-500 font-bold leading-relaxed mt-4">
              {message2}
            </p>
          </div>

          <button
            type="button"
            onClick={closeButton}
            className={`px-5 h-14 py-2.5 w-full rounded-lg text-white text-lg border-none outline-none ${buttonColor}`}
          >
            Thank You
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
