import React from "react";
import formalImage from "../../../assets/images/protfolio_formal_image.webp";
const AboutBanner: React.FC = () => {
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="max-h-96 rounded-lg flex justify-center items-center bg-[#fffc9e]">
          <img
            src={formalImage}
            alt="Kunal Chandra Das formal image"
            className="rounded-lg max-h-[25rem] pt-0 lg:pt-12"
          />
        </div>
        <div className="h-full lg:max-h-96 overflow-y-scroll rounded-lg">
          <p className="text-orange-500 font-semibold">"The road to here"</p>
          <h2 className="text-2xl forn-bold">Brief summary</h2>
          <div className="py-4">
            <p className="py-2 text-gray-600">
              In 2017, I watched a YouTube video about programming, specifically
              learning web development in spring boot. I found many of the
              concepts challenging to understand, but this sparked my interest
              in programming. I started researching how websites are made and
              discovered HTML, CSS, and JavaScript.
            </p>
            <p className="py-2 text-gray-600">
              At that time, I didn&apos;t have my own laptop, so I installed a
              basic code editor on my mobile phone and began writing HTML code.
              I created simple website designs. I was excited by the process,
              and it felt like a major accomplishment. However, at the end of
              2017, I had my board exams, and I had to pause my learning.
            </p>
            <p className="py-2 text-gray-600">
              {" "}
              Afterward, I didn&apos;t have the opportunity to pursue
              programming, and I became distracted for several years. I
              struggled to find my true passion and wasn't happy with my college
              degree. As a result, I decided to drop out and began focusing on
              web development. This decision brought me a sense of satisfaction
              and fulfillment that I had been searching for.
            </p>
            <p className="py-2 text-gray-600">
              {" "}
              Since I didn’t have math in my 12th standard, I was unable to
              pursue a BCA or BTech. Instead, I enrolled in an open university
              and am currently studying Economics with Honors. Now that I have
              mathematics in my curriculum, I plan to pursue an MCA after
              completing my bachelor's degree. My goal is to become a core
              software developer.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutBanner;
