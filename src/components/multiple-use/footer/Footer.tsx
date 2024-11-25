import React, { useEffect, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BsFileTextFill, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { RiFolderDownloadFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import handleResumeDownload from "../../../reuseable-functions/download-resume/downloadResume";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const [homeRoute, setHomeRoute] = useState<boolean>(false);
  const [downloading, setDownloading] = useState<boolean>(false);

  useEffect(() => {
    setHomeRoute(pathname === "/");
  }, [pathname]);

  return (
    <>
      <footer
        className={`
        
         ${homeRoute ? "bg-black text-gray-200 w-full mx-0 " : ""}`}
      >
        <section
          className="md:max-w-full mx-auto w-full py-2 lg:max-w-5xl xl:max-w-[78rem] 
      rounded-md lg:py-3 md:mt-0 flex flex-col xl:flex-row  2xl:max-w-12xl
      justify-center xl:justify-between items-center pt-20"
        >
          <div className="flex w-full gap-8 items-center justify-center">
            <a
              href="https://github.com/Kunal-Ch-Das-Official"
              title="See Github Handle"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110"
            >
              <IoLogoGithub className="text-2xl" />
            </a>
            <a
              href="mailto:kunalchandradasofficial@gmail.com"
              title="Send Email"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110"
            >
              <BiLogoGmail className="text-2xl text-red-700" />
            </a>
            <a
              href="tel: +919874353723"
              title="Call Or Whatsapp"
              className="transform hover:scale-110"
            >
              <BsWhatsapp className="text-2xl text-green-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-chandra-das-470bab218"
              title="Visit Linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl text-blue-600" />
            </a>
            <a
              href="https://x.com/KunalOffiicial?t=AR2_sXETAbr2_dscCYoXCQ&s=09"
              title="See X Handle"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110"
            >
              <FaTwitter className="text-2xl text-blue-600" />
            </a>
          </div>
          <p className="text-sm flex w-full justify-center py-4 order-last xl:order-none">
            Developed by Kunal Chandra Das under MIT license ©{" "}
            {new Date().getFullYear()}
          </p>
          <div className="w-full flex justify-center gap-4 pt-4 xl:pt-0">
            <button
              onClick={() => handleResumeDownload(setDownloading)}
              className="text-black px-3 py-1 rounded-md inline-flex items-center bg-orange-400 
            transform hover:scale-110 gap-2"
            >
              Download Resume{" "}
              {downloading ? (
                <span className="loader"></span>
              ) : (
                <RiFolderDownloadFill />
              )}
            </button>
            <Link
              to={"/kunal-chandra-das-resume"}
              className=" text-black px-3 py-1 rounded-md inline-flex items-center bg-orange-400 
            transform hover:scale-110 gap-2"
            >
              View Resume
              <BsFileTextFill />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
