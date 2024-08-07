"use client";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
// import CodeMockup from "@/utils/code-mockup/CodeMockup";
import { useThemeContext } from "@/utils/theme-context/ThemeContext";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
const CodeMockup = dynamic(() => import("@/utils/code-mockup/CodeMockup"), {
  loading: () => <ComponentSpinner />,
})

interface SingleBlogProps {
  authorName: string;
  blogTitle: string;
  statementHeading: string;
  supportingImg: string;
  statement: string;
  commandLine: string;
  corespondingCode:string;
}

const SingleBlogContent: React.FC<SingleBlogProps> = ({
  authorName,
  blogTitle,
  statementHeading,
  supportingImg,
  statement,
  corespondingCode,
  commandLine,
}) => {
  const { layoutTheme } = useThemeContext();
  return (
    <div className="w-full">
      <div className="bg-transparent pb-6 pt-40">
        <div className="mx-auto max-w-screen">
          <Link href={"/blogs"} className="tooltip">
            <IoArrowBackCircleSharp className="text-5xl mb-6 text-white hover:text-orange-500 cursor-pointer" />
            <span className="tooltiptext mt-3 cursor-pointer ml-8">Back</span>
          </Link>
          <div
            className={`${
              layoutTheme === true
                ? "bg-gray-100 text-gray-900"
                : "text-white bg-black"
            } relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0`}
          >
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width="200"
                    height="200"
                    x="50%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                  <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth="0"
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                />
              </svg>
            </div>
            <div className="mx-auto grid max-w-screen grid-cols-1 gap-x-8 gap-y-16 lg:mx-auto lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">
                      {blogTitle}
                    </h1>
                    <p className="text-lg font-bold leading-7 text-indigo-600">
                      <span
                        className={`${
                          layoutTheme === true ? "text-black" : "text-white"
                        } mr-3 font-bold mt-2 text-xl`}
                      >
                        Written by:
                      </span>
                      {authorName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image width={500} height={500}
                priority
                quality={50}
                loading="eager"
                  className="w-fit object-cover md:h-full md:w-full max-w-screen rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  src={supportingImg}
                  alt={blogTitle}
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7  lg:max-w-lg">
                    <div id="first-content" className="my-12">
                      <h2 className="text-xl font-bold mb-2">
                        {statementHeading}
                      </h2>
                      <article className="overflow-x-auto">{statement}</article>
                      <div className="w-full mt-6">
                      <h3 className="mb-1 text-orange-500">Copy The Command Line From Here:</h3>
                        <div
                          className="coding inverse-toggle px-5  shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
                        bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
                        >
                          <div className="top mb-2 flex">
                            
                            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="mt-4 flex">
                            <span className="text-green-400">computer:~$</span>
                            <p className="flex-1 typing items-center pl-2">
                              {commandLine}
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12">
                        
                        <h4 className="mb-1 text-orange-500">Copy The Code From Here:</h4>
                        <CodeMockup minifiedCode={corespondingCode}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SingleBlogContent);
