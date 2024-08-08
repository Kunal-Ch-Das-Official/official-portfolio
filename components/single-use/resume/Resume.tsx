"use client";
import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import axios from "axios";
import envConfig from "@/envConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
import dynamic from "next/dynamic";
const ResumePreview = dynamic(
  () => import("@/components/single-use/resume/ResumePreview"),
  {
    loading: () => <ComponentSpinner />,
  }
);



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

//  Download Resume Handler 
const downloadResumeHandler = useCallback(async () => {
  try {
    setResumeLoading(true);
    const imgUrl = resumeData.resume; // Assuming resumeData.resume contains the image URL

    // Fetch the image data
    const imgResponse = await fetch(imgUrl);
    const imgBytes = await imgResponse.arrayBuffer();

    // Get MIME type from response headers
    const contentType = imgResponse.headers.get('Content-Type') || '';

    // List of supported image MIME types
    const supportedImageTypes = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/gif',
      'image/bmp',
      'image/webp',
      'image/tiff',
      'image/svg+xml'
    ];

    // Validate if the MIME type is supported
    if (!supportedImageTypes.includes(contentType)) {
      throw new Error('Unsupported image format. Supported formats are PNG, JPEG, GIF, BMP, WEBP, TIFF, and SVG.');
    }

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Embed the image based on its MIME type
    let img;
    let imageWidth, imageHeight;
    if (contentType === 'image/png') {
      img = await pdfDoc.embedPng(imgBytes);
    } else if (contentType === 'image/jpeg' || contentType === 'image/jpg') {
      img = await pdfDoc.embedJpg(imgBytes);
    } else {
      // Convert other image types to PNG if necessary
      const image = new Image();
      const url = URL.createObjectURL(new Blob([imgBytes], { type: contentType }));
      image.src = url;

      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      const scaleFactor = 5; // Scaling factor for higher resolution
      canvas.width = image.width * scaleFactor;
      canvas.height = image.height * scaleFactor;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('Failed to get 2D context');
      }

      ctx.scale(scaleFactor, scaleFactor);
      ctx.drawImage(image, 0, 0);

      const imgData = canvas.toDataURL('image/png');
      img = await pdfDoc.embedPng(imgData);
      URL.revokeObjectURL(url);
    }

    // Get the dimensions of the image
    const { width: imgWidth, height: imgHeight } = img.scale(1);

    // Create a new page with the image dimensions
    const page = pdfDoc.addPage([imgWidth, imgHeight]);

    // Draw the image on the PDF
    page.drawImage(img, {
      x: 0,
      y: 0,
      width: imgWidth,
      height: imgHeight,
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Save the PDF to the user's computer
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'Kunal-Chandra-Das-Resume.pdf');
    setResumeLoading(false);
  } catch (error) {
    console.error('Error:', error);
    setResumeLoading(false);
  }
}, [resumeData.resume, setResumeLoading]);





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
                  Please Wait Resume Getting Ready.....
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
