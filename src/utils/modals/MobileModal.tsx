import React, { useEffect, useState } from "react";
import mobileModalStyle from "./mobileModal.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
interface MobileModalProps {
  submitStatus: boolean;
  showAndHide: boolean;
  closeHandler: () => void;
}
const MobileModal: React.FC<MobileModalProps> = ({
  submitStatus,
  closeHandler,
  showAndHide,
}) => {
  const [clock, setClock] = useState<any>();

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const timeString = `${hours}:${minutes}:${seconds}`;
      setClock(timeString);
    }
    // Update clock every second
    setInterval(updateClock, 1000);

    // Initialize clock immediately
    updateClock();
  }, []);

  return (
    <>
      {showAndHide === true && (
        <section
          className={`min-h-screen ${mobileModalStyle.overlay} fixed inset-0 px-4 flex-wrap justify-center items-center
             w-full h-full z-[90999] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]
              overflow-auto flex `}
        >
          <div
            className={`border border-gray-400 ${mobileModalStyle.card}
       ${
         submitStatus === true
           ? mobileModalStyle.success
           : mobileModalStyle.error
       }`}
          >
            <div className={mobileModalStyle.card__date}>
              <span className={mobileModalStyle.time}>{clock}</span>
              <span className={mobileModalStyle.date}>
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className={mobileModalStyle.popup}>
              <p className={mobileModalStyle.title}>Response Message</p>
              <p className="text-sm font-semibold">
                {submitStatus === true ? (
                  <span className="text-green-500">Successful!</span>
                ) : (
                  <span className="text-red-500">Failed!</span>
                )}
              </p>
            </div>
            <div className={mobileModalStyle.popup}>
              <p className="text-xs">
                {submitStatus === true
                  ? "Your details has been submited successfully. I will connect to you very soon."
                  : "Something went wrong. server unable to process this request. Could you please try again😟"}
              </p>
            </div>
            <div>
              <button
                onClick={closeHandler}
                className={`${mobileModalStyle.tooltip} flex relative bottom-10  justify-center px-4 rounded-lg w-full mt-[80px]`}
              >
                <IoMdCloseCircleOutline className="text-2xl absolute left-[80px] text-red-500 transform translate-1 hover:scale-110" />
                <span className={mobileModalStyle.tooltiptext}>Close</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MobileModal;
