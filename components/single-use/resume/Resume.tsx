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

const Resume = () => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState<any>([]);

  useEffect(() => {
    const getResume = async () => {
      try {
        const res = await axios.get(envConfig.getResumeApiUrl);
        setResumeData(res.data[0]);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    getResume();
    AOS.init();
  }, []);

  const handlePreviewOpenEvent = () => {
    setPreviewOpen(false);
  };

  const downloadResumeHandler = () => {
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
    };
    img.onerror = (err) => {
      console.error("Error loading image", err);
    };
  };

  return (
    <section className="my-28" id="getResume">
      <div className="text-center mx-auto">
        <h3 className="mb-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          <span className="text-orange-700">Download </span>
          <span className="text-orange-500">Or </span>
          <span className="text-orange-400">Preview </span>
          <span className="text-orange-300">My </span>
          <span className="text-orange-300">Resume </span>
        </h3>
        <p className="flex flex-wrap mx-0 md:mx-20 lg:mx-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nostrum
          reiciendis suscipit illo ipsa earum, quisquam debitis, excepturi at
          quam, sint labore aliquid maiores. Earum tenetur maiores culpa
          asperiores quo.
        </p>
      </div>
      {previewOpen === true ? (
        <ResumePreview
          resumeResponse={resumeData}
          closePreview={handlePreviewOpenEvent}
          mount={"zoom-in"}
        />
      ) : (
        <div className="flex flex-col lg:flex-row justify-center items-center my-16">
          <button
            className="relative 2xl:flex xl:flex lg:flex inline-flex h-[50px] w-60 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600 mr-0 mb-12 lg:mb-0 lg:mr-8"
            onClick={() => setPreviewOpen(true)}
          >
            <span className="relative z-0 ml-4">Preview Resume</span>
            <VscPreview className="text-2xl font-bold mx-4 hover:text-orange-500 relative z-0" />
          </button>

          <button className="relative 2xl:flex xl:flex lg:flex h-[50px] w-60 inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600">
            <span className="relative z-0 ml-4" onClick={downloadResumeHandler}>
              Download Resume
            </span>
            <MdOutlineSimCardDownload className="text-2xl font-bold mx-4 hover:text-orange-500 relative z-0" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Resume;
