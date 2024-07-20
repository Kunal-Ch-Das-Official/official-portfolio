"use client";
import Image from "next/image";
import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

interface ResumePreviewProps {
  closePreview: () => void;
  mount: string | boolean;
  resumeResponse: any;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  resumeResponse,
  closePreview,
  mount,
}) => {
  return (
    <section
      className={`text-gray-200 body-font relative mt-12`}
      data-aos={mount}
    >
      <div className="container blurBackgroundForm px-5 w-full lg:w-1/2 mx-auto border-2 border-white rounded-lg hover:border-orange-500">
        <RiCloseCircleFill
          onClick={closePreview}
          className="text-black text-4xl bg-white float-end mt-6 mr-4 rounded-full hover:transition-transform hover:scale-110 hover:bg-orange-500 hover:text-black"
        />
        <div className="flex justify-center items-center my-20">
          <Image
            src={resumeResponse.resume}
            alt="Resume"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default ResumePreview;
