interface ConfirmModelProps {
  showOrHide: boolean;
  confirmHandler: () => void;
  cancelHandler: () => void;
  statusIcon: ReactNode;
  alertHead: string;
  confirmHandlerColor: string;
  cancelHandlerColor: string;
}
import React, { ReactNode } from "react";
import modalStyle from "./ModalStyle.module.css";
const ConfirmModel: React.FC<ConfirmModelProps> = ({
  showOrHide,
  confirmHandler,
  cancelHandler,
  statusIcon,
  alertHead,
  confirmHandlerColor,
  cancelHandlerColor,
}) => {
  return (
    <div
      className={`${
        showOrHide === true ? "visible" : "hidden"
      } min-h-screen fixed inset-0 px-4 flex-wrap justify-center items-center 
       w-full h-full z-[9999] before:fixed before:inset-0 before:w-full before:h-full
        before:bg-[rgba(0,0,0,0.5)] overflow-hidden ${modalStyle.overlay}`}
    >
      <div className="w-4/5 md:max-w-md top-[30%] bg-white shadow-lg rounded-md px-5 py-10 relative mx-auto text-center">
        <div className="flex flex-col justify-center items-center">
          <div> {statusIcon} </div>
        </div>
        <div className="mt-2 ">
          <h3 className="text-xl font-medium text-gray-600 flex-1">
            {alertHead}
          </h3>
          <div className="flex flex-col sm:flex-row justify-between mx-2">
            <button
              onClick={confirmHandler}
              className={`mx-2 px-6 h-8 mt-8 w-full rounded cursor-pointer text-white text-xs font-semibold border-none outline-none ${confirmHandlerColor}`}
            >
              Yes, I'm sure
            </button>
            <button
              onClick={cancelHandler}
              className={`mx-2 px-6 h-8 mt-2 sm:mt-8 w-full rounded cursor-pointer text-gray-700 text-xs font-semibold border-[1px] border-gray-400 outline-none ${cancelHandlerColor}`}
            >
              No, Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModel;
