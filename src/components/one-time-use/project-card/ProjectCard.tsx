import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiSolidDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import CustomSlider from "../../../utils/custom-slider/CustomSlider";

const ProjectCard: React.FC = () => {
  const cardRef = useRef<HTMLHtmlElement | null>(null);
  const [showHideDetails, setShowHideDetails] = useState<boolean>(false);
  const images = [
    {
      id: 1,
      src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
      alt: "Slide 2",
    },
    {
      id: 3,
      src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
      alt: "Slide 3",
    },
  ];
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
          rounded-xl shadow-xl absolute top-14 right-0 cursor-pointer text-orange-100 z-10`}
            >
              {/* Github repo  */}
              <p
                className="border-t border-gray-700 inline-flex 
            items-center gap-2 transform translate-1 hover:scale-110 py-1"
              >
                <IoLogoGithub className="text-md" />
                github repo
              </p>

              {/* Visit site  */}
              <p
                className="border-t border-b border-gray-700 inline-flex 
                items-center gap-2 transform translate-1 hover:scale-110 py-1"
              >
                <FiExternalLink className="text-md " />
                visit site
              </p>

              {/* See more  */}
              <p
                className="border-b border-gray-700 inline-flex 
            items-center gap-2  transform translate-1 hover:scale-110 py-1"
              >
                <BiSolidDetail className="text-md " />
                about
              </p>
            </section>
          )}
        </div>
      </div>
      <div className="min-h-[210px] min-w-[210px] rounded-2xl">
        <CustomSlider images={images} />
      </div>
    </div>
  );
};

export default ProjectCard;
