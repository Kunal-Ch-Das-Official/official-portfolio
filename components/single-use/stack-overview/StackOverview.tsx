import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";

const StackOverview:React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 mb-24">
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center">
            <span className="text-primary greenBgBlob px-2 py-2">
              <SiMongodb className="text-5xl text-green-600" />
            </span>
          </div>
          <h5 className="mb-3 font-bold text-primary text-center">Mongo DB</h5>
          <h6 className="mb-0 font-normal dark:text-neutral-50 text-center">
            60%
          </h6>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center">
            <span className="text-primary whiteBgBlob px-2 py-2">
              <SiExpress className="text-5xl text-black bg-white px-2 rounded-full" />
            </span>
          </div>
          <h5 className="mb-3 font-bold text-primary text-center">
            Express JS
          </h5>
          <h6 className="mb-0 font-normal dark:text-neutral-50 text-center">
            70%
          </h6>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center">
            <span className="text-primary blueBgBlob px-2 py-2">
              <RiReactjsLine className="text-5xl text-blue-400" />
            </span>
          </div>
          <h5 className="mb-3 font-bold text-primary text-center">React Js</h5>
          <h6 className="mb-0 font-normal dark:text-neutral-50 text-center">
            95%
          </h6>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center ">
            <span className="text-primary greenBgBlob px-2 py-2">
              <RiNodejsLine className="text-5xl text-green-600 " />
            </span>
          </div>
          <h5 className="mb-3 font-bold text-primary text-center">Node JS</h5>
          <h6 className="mb-0 font-normal dark:text-neutral-50 text-center">
            80%
          </h6>
        </div>
      </div>
    </div>
  );
};

export default StackOverview;
