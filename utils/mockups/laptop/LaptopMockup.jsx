import React from "react";
import mockupStyle from './LaptopMockup.module.css';
import Image from "next/image";



const LaptopMockup = ({imgsSrc}) => {
  return (
    <main className="h-fit w-full" >
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
    </main>
  );
};

export default LaptopMockup;
