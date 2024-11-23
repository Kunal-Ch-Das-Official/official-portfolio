import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiSolidDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import CustomSlider from "../../../utils/custom-slider/CustomSlider";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  owner: string;
  imageOneSrc: string;
  imageTwoSrc: string;
  imageThreeSrc: string;
  githubUrl: string;
  previewUrl: string;
  aboutProjectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  owner,
  imageOneSrc,
  imageTwoSrc,
  imageThreeSrc,
  githubUrl,
  previewUrl,
  aboutProjectUrl,
}) => {
  const cardRef = useRef<HTMLHtmlElement | null>(null);
  const [showHideDetails, setShowHideDetails] = useState<boolean>(false);
  const images = [
    {
      id: 1,
      src: imageOneSrc,
      alt: `${title} slider image 1`,
    },
    {
      id: 2,
      src: imageTwoSrc,
      alt: `${title} slider image 2`,
    },
    {
      id: 3,
      src: imageThreeSrc,
      alt: `${title} slider image 3`,
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
      className="bg-slate-900 max-w-[600px] pb-2
     border border-gray-900 p-2 w-full rounded-2xl overflow-hidden mx-auto mt-4"
    >
      <div className="p-2 flex justify-between items-center gap-10">
        <div className="min-h-20">
          <h3 className="text-xl font-semibold text-orange-300">{title}</h3>
          <p className="mt-1 text-sm text-gray-300 inline-flex items-center">
            <span className="text-orange-200">Owner :</span>
            <span className="ml-2">{owner}</span>
          </p>
        </div>
        <div className="relative">
          <BsThreeDotsVertical
            className="text-white text-2xl cursor-pointer hover:text-orange-500 
            transform translate-1 hover:scale-110"
            onClick={handleDetailsShowHide}
          />

          {/* Hidden section  */}
          {showHideDetails === true && (
            <section
              ref={cardRef}
              data-aos="fade-down"
              onClick={() => setShowHideDetails(false)}
              className={`bg-white flex flex-col min-w-[150px] px-4 
          rounded-md shadow-xl absolute top-14 right-0 cursor-pointer text-gray-700 z-10 font-semibold`}
            >
              {/* Github repo  */}
              <a
                href={`https://${githubUrl}`}
                target="_blank"
                title="Github repository"
                className="border-t border-gray-200 inline-flex 
            items-center gap-2 transform translate-1 hover:scale-110 py-1"
              >
                <IoLogoGithub className="text-md" />
                github repo
              </a>

              {/* Visit site  */}
              <a
                href={`https://${previewUrl}`}
                target="_blank"
                title="Visit site"
                className="border-t border-b border-gray-300 inline-flex 
                items-center gap-2 transform translate-1 hover:scale-110 py-1"
              >
                <FiExternalLink className="text-md " />
                visit site
              </a>

              {/* See more  */}
              <Link
                to={aboutProjectUrl}
                title="See about project"
                className="border-b border-gray-100 inline-flex 
            items-center gap-2  transform translate-1 hover:scale-110 py-1"
              >
                <BiSolidDetail className="text-md " />
                about
              </Link>
            </section>
          )}
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden">
        <CustomSlider images={images} />
      </div>
    </div>
  );
};

export default ProjectCard;
