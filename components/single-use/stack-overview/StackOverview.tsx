import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";

const StackOverview:React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 xl:w-full 2xl:w-3/4 2xl:mx-auto mb-16">
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center">
            <span className="text-primary greenBgBlob px-2 py-2">
              <SiMongodb className="text-5xl text-green-600" />
            </span>
          </div>
          <h3 className="mb-3 font-bold text-primary text-center"><span className="text-2xl text-green-600">M</span>ongo DB</h3>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent to-transparent opacity-25 via-neutral-400 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center">
            <span className="text-primary whiteBgBlob px-2 py-2">
              <SiExpress className="text-5xl text-black bg-white px-2 rounded-full" />
            </span>
          </div>
          <h3 className="mb-3 font-bold text-primary text-center">
          <span className="text-2xl text-white">E</span>xpress JS
          </h3>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25  lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center">
            <span className="text-primary blueBgBlob px-2 py-2">
              <RiReactjsLine className="text-5xl text-blue-400" />
            </span>
          </div>
          <h3 className="mb-3 font-bold text-primary text-center"><span className="text-2xl text-blue-400">R</span>eact Js</h3>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-400 to-transparent opacity-25 lg:block"></div>
        </div>
        <div className="relative mb-12 px-3 lg:mb-0">
          <div className="mb-4 flex justify-center ">
            <span className="text-primary greenBgBlob px-2 py-2">
              <RiNodejsLine className="text-5xl text-green-600 " />
            </span>
          </div>
          <h3 className="mb-3 font-bold text-primary text-center"><span className="text-2xl text-green-600">N</span>ode JS</h3>
        </div>
      </div>
    </section>
  );
};

export default StackOverview;
