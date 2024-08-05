import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import envConfig from "../../../envConfig";
import { FaArrowCircleLeft } from "react-icons/fa";



const BlogOverView = () => {
  const { id } = useParams();
  const [resStorage, setResStorage] = useState({});
  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        await axios
          .get(`${envConfig.getSingleBlogApiUrl}/${id}`)
          .then((res) => {
            setResStorage(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getSingleBlog();
  }, []);

  return (
    <div className="w-5/6 float-right">
      <div className="bg-blue-50 py-6 sm:py-8 lg:py-12 ml-8">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Link to={"/dashboard/blog-manage"}>
        <FaArrowCircleLeft className="text-3xl mb-4 cursor-pointer"/>
        </Link>
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-lg font-bold leading-7 text-indigo-600">
                      {resStorage.authorName}
                    </p>
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {resStorage.blogTitle}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-fit object-cover md:h-full md:w-full max-w-screen rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  src={resStorage.supportingImg}
                  alt={resStorage.supportingImgPublicId}
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                    <h4 className="text-lg font-bold">{resStorage.statementHeading}</h4>
                    <div id="first-content" className="mt-2 mb-12">
                      <p>{resStorage.statement}</p>


                      
                      <div className="w-full mt-20">
                      <h5 className="text-lg font-bold">Enter this command in terminal:</h5>
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
                              {resStorage.commandLine}
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5 className="text-lg font-bold">Copy the code from here:</h5>
                    <div className="bg-black rounded-md p-4 max-w-md mx-auto mt-2">
                      <div className="flex items-center mb-2">
                        <div className="h-3 w-3 rounded-full mr-2 bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full mr-2 bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      
                     <div className="text-white">
                     {resStorage.corespondingCode}
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

export default BlogOverView;
