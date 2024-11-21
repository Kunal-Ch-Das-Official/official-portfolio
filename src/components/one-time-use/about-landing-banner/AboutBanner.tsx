import React from "react";
import formalImage from "../../../assets/images/formal_image_kunal_chandra_das.png";
const AboutBanner: React.FC = () => {
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="max-h-96 rounded-lg flex justify-center items-center bg-[#fffc9e]">
          <img
            src={formalImage}
            alt="Kunal Chandra Das formal image"
            className="rounded-lg max-h-96"
          />
        </div>
        <div className="min-h-96  rounded-lg">
          <p className="text-orange-500 font-semibold">"The road to here"</p>
          <h2 className="text-2xl forn-bold">Brief summary</h2>
          <div className="py-4">
            <p className="py-2 text-gray-600">
              In 2013 I was skateboarding and wanted to work with it, I became
              interested in having an online store and this ended up influencing
              me to become interested in technology, I wanted to go to college
              to study graphic design or web design.
            </p>
            <p className="py-2 text-gray-600">
              During my Mandatory Military Service (2017) my interest in
              technology returned and when I got a Prouni scholarship through
              Enem, I opted for the Technology in Systems Analysis and
              Development course at Universidade Católica Dom Bosco (UCDB), I
              started the course in March 2018.
            </p>
            <p className="py-2 text-gray-600">
              {" "}
              During my Mandatory Military Service (2017) my interest in
              technology returned and when I got a Prouni scholarship through
              Enem, I opted for the Technology in Systems Analysis and
              Development course at Universidade Católica Dom Bosco (UCDB), I
              started the course in March 2018.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutBanner;
