import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import envConfig from "../../../envConfig";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";

const EditProject = () => {
  const { id } = useParams();
  const [updatedProjectName, setProjectName] = useState("");
  const [updatedOwnerName, setOwnerName] = useState("");
  const [updatedProjectUrl, setProjctUrl] = useState("");
  const [updatedGithubRepo, setGithubRepo] = useState("");
  const [updatedThumbnailImg, setThumbnailImg] = useState("");
  const [updatedFirstPageImg, setFirstPageImg] = useState("");
  const [updatedSecondPageImg, setSecondPageImg] = useState("");
  const [updatedThirdPageImg, setThirdPageImg] = useState("");
  const [updatedDescription, setDescription] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();

  const handleOnSubmit = async (event) => {
    setLoadingState(true);
    event.preventDefault();

    const updatedFormData = new FormData();
    updatedFormData.append("projectName", updatedProjectName);
    updatedFormData.append("author", updatedOwnerName);
    updatedFormData.append("description", updatedDescription);
    updatedFormData.append("projectThumbnail", updatedThumbnailImg);
    updatedFormData.append("firstView", updatedFirstPageImg);
    updatedFormData.append("secondView", updatedSecondPageImg);
    updatedFormData.append("thirdView", updatedThirdPageImg);
    updatedFormData.append("projectUrl", updatedProjectUrl);
    updatedFormData.append("githubLink", updatedGithubRepo);

    try {
      await axios
        .patch(`${envConfig.editProjectApiUrl}/${id}`, updatedFormData)
        .then((res) => {
          setLoadingState(false);
          navigate("/dashboard/project-manage");
        });
    } catch (error) {
      console.log(error);
      setLoadingState(false);
      navigate("/dashboard/project-manage");
    }

    formRef.current.reset();
  };

  return (
    <div className="w-5/6 float-right">
      {loadingState === true && <LoadingSpiner />}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-blue-600 md:mb-6 lg:text-3xl">
              Update Your Projects
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <form
            onSubmit={handleOnSubmit}
            ref={formRef}
            className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
          >
            {/* Project name input  */}
            <div>
              <label
                htmlFor="projectName"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                New Project Name{" "}
              </label>
              <input
                name="projectName"
                id="projectName"
                onChange={(event) => setProjectName(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Enter Your Project Name Here"
              />
            </div>

            {/* Project owner input  */}
            <div>
              <label
                htmlFor="author"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                New Project Owner Name
              </label>
              <input
                name="author"
                id="author"
                onChange={(event) => setOwnerName(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Enter Project Owner Name"
              />
            </div>

            {/* Project host url input  */}
            <div className="sm:col-span-2">
              <label
                htmlFor="projectUrl"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                New Project Url
              </label>
              <input
                name="projectUrl"
                id="projectUrl"
                onChange={(event) => setProjctUrl(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Provide Us Your Project Host Url"
              />
            </div>

            {/* Project github repository input  */}
            <div className="sm:col-span-2">
              <label
                htmlFor="githubLink"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                New Github Repository
              </label>
              <input
                name="githubLink"
                id="githubLink"
                onChange={(event) => setGithubRepo(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Provide Us Your Github Repository"
              />
            </div>

            {/* Project thumbnail image input  */}
            <div className="sm:col-span-2">
              <div className="font-[sans-serif] max-w-md">
                <label
                  className="text-base text-blue-600 font-semibold mb-2 block"
                  htmlFor="projectThumbnail"
                >
                  Upload New Projects Thumbnail View
                </label>
                <input
                  type="file"
                  name="projectThumbnail"
                  id="projectThumbnail"
                  onChange={(event) => setThumbnailImg(event.target.files[0])}
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-blue-100 file:hover:bg-blue-200 file:text-gray-500 rounded"
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
              </div>
            </div>

            {/* Project first page view input  */}
            <div className="sm:col-span-2">
              <div className="font-[sans-serif] max-w-md">
                <label
                  className="text-base text-blue-600 font-semibold mb-2 block"
                  htmlFor="firstView"
                >
                  Upload New Projects First Page View
                </label>
                <input
                  type="file"
                  name="firstView"
                  id="firstView"
                  onChange={(event) => setFirstPageImg(event.target.files[0])}
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-blue-100 file:hover:bg-blue-200 file:text-gray-500 rounded"
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
              </div>
            </div>

            {/* Project second page view input  */}
            <div className="sm:col-span-2">
              <div className="font-[sans-serif] max-w-md">
                <label
                  className="text-base text-blue-600 font-semibold mb-2 block"
                  htmlFor="secondView"
                >
                  Upload New Projects Second Page View
                </label>
                <input
                  type="file"
                  name="secondView"
                  id="secondView"
                  onChange={(event) => setSecondPageImg(event.target.files[0])}
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-blue-100 file:hover:bg-blue-200 file:text-gray-500 rounded"
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
              </div>
            </div>

            {/* Project third page view input  */}
            <div className="sm:col-span-2">
              <div className="font-[sans-serif] max-w-md">
                <label
                  className="text-base text-blue-600 font-semibold mb-2 block"
                  htmlFor="thirdView"
                >
                  Upload New Projects Third Page View
                </label>
                <input
                  type="file"
                  name="thirdView"
                  id="thirdView"
                  onChange={(event) => setThirdPageImg(event.target.files[0])}
                  className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-blue-100 file:hover:bg-blue-200 file:text-gray-500 rounded"
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
              </div>
            </div>

            {/* Project description input  */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                New Project Description
              </label>
              <textarea
                name="description"
                id="description"
                onChange={(event) => setDescription(event.target.value)}
                className="h-64 w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                placeholder="Write A Project Description Here"
              ></textarea>
            </div>

            {/* Project submit button  */}
            <div className="flex items-center justify-between sm:col-span-2">
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-800 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Update This Project
              </button>

              <span className="text-sm text-gray-500">*Required</span>
            </div>

            <p className="text-xs text-gray-400">
              Update Your Project For Portfolio{" "}
              <a
                href="#"
                className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
