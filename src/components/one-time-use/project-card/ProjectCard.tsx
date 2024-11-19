import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiSolidDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";

const ProjectCard: React.FC = () => {
  const cardRef = useRef<HTMLHtmlElement | null>(null);
  const [showHideDetails, setShowHideDetails] = useState<boolean>(false);

  // handle menu open close function
  const handleDetailsShowHide = () => {
    setShowHideDetails((prev) => !prev);
  };

  // main click ouside function
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        if (showHideDetails === true) {
          setShowHideDetails(false);
        }
      } else {
        setShowHideDetails(true);
      }
    },
    [showHideDetails]
  );

  // Is Section is open then start listing for click outside event
  useEffect(() => {
    if (showHideDetails === true) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHideDetails, handleClickOutside]);

  return (
    <div
      className="bg-slate-900 min-w-300 min-h-300
     border border-gray-900 p-2 w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4"
    >
      <div className="p-2 flex justify-between items-center gap-10">
        <div>
          <h3 className="text-xl font-semibold text-orange-300">
            CBS Research Group Admin
          </h3>
          <p className="mt-1 text-sm text-gray-300 inline-flex items-center">
            <span className="text-orange-200">Owner :</span>
            <span className="ml-2">Chinmoy Bhattacharya</span>
          </p>
        </div>
        <div className="relative ">
          <BsThreeDotsVertical
            className="text-white text-2xl cursor-pointer hover:text-orange-500 transform translate-1 hover:scale-110"
            onClick={handleDetailsShowHide}
          />

          {/* Hidden section  */}
          {showHideDetails === true && (
            <section
              ref={cardRef}
              onClick={() => setShowHideDetails(false)}
              className={`bg-slate-800 flex flex-col min-w-[150px] px-4 
          rounded-md absolute top-14 right-0 cursor-pointer text-orange-100`}
            >
              {/* Github repo  */}
              <p
                className="border-t border-gray-700 inline-flex 
            items-center gap-2 font-normal transform translate-1 hover:scale-110"
              >
                <IoLogoGithub className="text-md" />
                github repo
              </p>

              {/* Visit site  */}
              <p
                className="border-t border-b border-gray-700 inline-flex 
                items-center gap-2 font-normal transform translate-1 hover:scale-110"
              >
                <FiExternalLink className="text-md " />
                visit site
              </p>

              {/* See more  */}
              <p
                className="border-b border-gray-700 inline-flex 
            items-center gap-2 font-normal transform translate-1 hover:scale-110"
              >
                <BiSolidDetail className="text-md " />
                see more
              </p>
            </section>
          )}
        </div>
      </div>
      <div className="min-h-[210px] min-w-[210px]">
        <img
          src="https://readymadeui.com/cardImg.webp"
          className="w-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
