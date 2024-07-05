import React from "react";
import mockupStyle from './LaptopMockup.module.css';
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GrOverview } from "react-icons/gr";

const LaptopMockup = ({imgsSrc, projectName, projectUrl, overViewEvent}) => {
  return (
    <main className="h-fit w-full transition-transform hover:scale-110 tooltip" >

    <div className="w-full h-full">
      <div className={mockupStyle.macbook}>
        <div className={mockupStyle.screen}>
          <div
            className={mockupStyle.viewport} id="image">
              <Image src={imgsSrc} alt="xd" width={500} height={500}/>
            </div>
        </div>
        <div className={mockupStyle.base}></div>
        <div className={mockupStyle.notch}></div>
      </div>
    </div>

    
    <span className="tooltiptext transition-transform hover:scale-110">
        <a href={`https://${projectUrl}`} target="_blank" className="inline-flex items-center">
          <span className="mr-4"> {projectName} </span>
         <FaExternalLinkAlt />
        </a>
        <span className='tooltipArrow'></span>
      </span>

      <span className="tooltiptext_2 transition-transform hover:scale-110">
        <button className="inline-flex items-center" onClick={overViewEvent}>
          <span className="mr-4"> Overview </span>
         <GrOverview />
        </button>
        <span className='tooltipArrow_2'></span>
      </span>
    </main>
  );
};

export default LaptopMockup;
