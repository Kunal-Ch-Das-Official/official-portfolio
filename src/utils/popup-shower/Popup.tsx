import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PopupProps {
  title: string;
  description: string;
  logo: ReactNode | null;
  isVisible: boolean;
  handleCloseEvent: (key: any) => void;
  popupKey: string;
}
const Popup: React.FC<PopupProps> = ({
  title,
  description,
  logo,
  isVisible,
  handleCloseEvent,
  popupKey,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  // main click ouside function
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        if (isVisible === true) {
          handleCloseEvent(popupKey);
        }
      } else {
        handleCloseEvent(popupKey);
      }
    },
    [isVisible]
  );

  // Is Section is open then start listing for click outside event
  useEffect(() => {
    if (isVisible === true) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, handleClickOutside]);

  // When section is visable stop scrolling Function
  const preventScroll = useCallback(
    (event: WheelEvent): void => {
      event.preventDefault();
    },
    [isVisible]
  );

  // When section is visable stop scrolling event listen
  useEffect(() => {
    if (isVisible === true) {
      window.addEventListener("wheel", preventScroll, {
        passive: false,
      } as EventListenerOptions);
    } else {
      window.removeEventListener("wheel", preventScroll, {
        passive: false,
      } as EventListenerOptions);
    }
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("wheel", preventScroll, {
        passive: false,
      } as EventListenerOptions);
    };
  }, [isVisible]);
  return (
    <section
      className={` ${
        isVisible === true ? "visible" : "hidden"
      } w-full h-full flex justify-center items-center z-50 fixed top-0 left-0 animate-zoomIn`}
    >
      <div
        className={`min-w-sm max-w-md text-white bg-slate-900 p-6 shadow-xl rounded-xl
          `}
        ref={cardRef}
      >
        <div className="flex justify-between items-center border-b border-gray-600 pb-3">
          <div className="inline-flex items-center gap-2">
            {logo}
            <h2 className="text-xl font-bold">{title}</h2>
          </div>

          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => handleCloseEvent(popupKey)}
          />
        </div>
        <p className="pt-2">{description}</p>

        <div
          className={`${popupKey === "about" ? "flex " : "hidden"} gap-4 pt-4`}
        >
          <Link
            to={"/"}
            className="text-white border border-gray-500 px-3 py-1 rounded-lg
           hover:bg-orange-950 inline-flex items-center gap-2 blurBackground"
          >
            Download Resume
            <FaLongArrowAltRight />
          </Link>
          <Link
            to={"/"}
            className="text-white border hover:bg-orange-950 border-gray-500 px-3 py-1 rounded-lg blurBackground"
          >
            Learn more...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popup;
