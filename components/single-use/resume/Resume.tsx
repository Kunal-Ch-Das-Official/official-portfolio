"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import ResumePreview from "@/components/single-use/resume/ResumePreview";
import axios from "axios";
import envConfig from "@/envConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import jsPDF from "jspdf";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";

const Resume = () => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [resumeLoading, setResumeLoading] = useState<boolean>(false);
  const [resumeResComming, setResumeResComming] = useState<boolean>(true);
  const [resumeData, setResumeData] = useState<any>([]);

  useEffect(() => {
    const getResume = async () => {
      try {
        const res = await axios.get(envConfig.getResumeApiUrl);
        setResumeData(res.data[0]);
        setResumeResComming(false);
      } catch (error) {
        console.log(`Error: ${error}`);
        setResumeResComming(false);
      }
    };
    getResume();
    AOS.init();
  }, []);

  const handlePreviewOpenEvent = () => {
    setPreviewOpen(false);
  };

  const downloadResumeHandler = () => {
    try {
      setResumeLoading(true);
      const imgUrl = resumeData.resume; // Assuming resumeData.resume contains the image URL
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Handle CORS if necessary
      img.src = imgUrl;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx: any = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Kunal-Chandra-Das-Resume.pdf");
        setResumeLoading(false);
      };
      img.onerror = (err) => {
        console.error("Error loading image", err);
      };
    } catch (error) {
      console.log("error", error);
      setResumeLoading(false);
    }
  };

  return (
    <section className="my-28" id="getResume">
      <div className="text-center mx-auto">
        <h3 className="mb-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          <span className="text-orange-700">Download </span>
          <span className="text-orange-500">And </span>
          <span className="text-orange-400">Preview </span>
          <span className="text-orange-300">My </span>
          <span className="text-orange-300">Resume </span>
        </h3>
        <p className="flex flex-wrap justify-center items-center mx-0 md:mx-20 lg:mx-32">
          Access my detailed resume to see my skills, experience, and
          achievements. Get a comprehensive view of my professional background
          and how I can contribute to your team.
        </p>
      </div>
      {resumeResComming === true ? (
        <ComponentSpinner />
      ) : (
        <>
          {resumeData.length === 0 ? (
            <h1 className="text-center text-orange-500 font-bold">
              Currently Resume Is Not Available!
            </h1>
          ) : (
            <>
              {resumeLoading === true && (
                <h1 className="text-center text-xl mt-4 text-orange-500 font-bold">
                  Please Wait Resume Being Ready.....
                </h1>
              )}
              <>
                {previewOpen === true ? (
                  <ResumePreview
                    resumeResponse={resumeData}
                    closePreview={handlePreviewOpenEvent}
                    mount={"zoom-in"}
                  />
                ) : (
                  <div className="flex flex-col lg:flex-row justify-center items-center my-16">
                    <button
                      aria-label="Preview my resume"
                      className="relative 2xl:flex xl:flex lg:flex w-50 items-center justify-center overflow-hidden bg-tranparent hover:bg-orange-500 border-2 border-orange-500 text-orange-500 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold  hover:shadow-orange-600 hover:text-black rounded-lg inline-flex  mb-4 lg:mb-0 lg:mr-8
               h-[40px] w-45 text-sm md:text-md md:h-[45px] md:w-50 lg:text-lg lg:h-[50px] lg:w-50"
                      onClick={() => setPreviewOpen(true)}
                    >
                      <span className="relative z-0 ml-4">Preview Resume</span>
                      <VscPreview className="text-2xl font-bold mx-4 relative z-0" />
                    </button>

                    <button
                      aria-label="Download my resume"
                      className="relative 2xl:flex xl:flex lg:flex w-50 items-center justify-center overflow-hidden bg-tranparent hover:bg-transparent border-2 border-orange-500 text-black shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold bg-orange-500 hover:shadow-orange-600 hover:text-orange-500 rounded-lg inline-flex
             h-[40px] w-45 text-sm md:text-md md:h-[45px] md:w-50 lg:text-lg lg:h-[50px] lg:w-50"
                    >
                      <span
                        className="relative z-0 ml-4"
                        onClick={downloadResumeHandler}
                      >
                        Download Resume
                      </span>
                      <MdOutlineSimCardDownload className="text-2xl font-bold mx-4 relative z-0" />
                    </button>
                  </div>
                )}
              </>
            </>
          )}{" "}
        </>
      )}
    </section>
  );
};

export default Resume;
