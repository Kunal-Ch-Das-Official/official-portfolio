import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import envConfig from "../../../envConfig";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingSpiner from "../../utils/loading-spinner/LoadingSpiner";
import { FaArrowCircleLeft } from "react-icons/fa";

const EditProject = () => {
  const { id } = useParams();
  const [prevProjectData, setPrevProjectData] = useState({});
  const [updatedProjectName, setProjectName] = useState("");
  const [updatedAuthorrName, setAuthorrName] = useState("");
  const [updateProjectType, setProjectType] = useState("");
  const [updatedOwnerName, setOwnerName] = useState("");
  const [updatedProjectUrl, setProjctUrl] = useState("");
  const [updatedGithubRepo, setGithubRepo] = useState("");
  const [updatedThumbnailImg, setThumbnailImg] = useState("");
  const [updatedFirstPageImg, setFirstPageImg] = useState("");
  const [updatedSecondPageImg, setSecondPageImg] = useState("");
  const [updatedThirdPageImg, setThirdPageImg] = useState("");
  const [updatedDescription, setDescription] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [usedTechnology, setUsedTechnology] = useState([]);
  const formRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const getPrevProject = async () => {
      try {
        await axios.get(`${envConfig.getProjectApiUrl}/${id}`).then((res) => {
          setPrevProjectData(res.data);
        });
      } catch (error) {
        console.log(`Unable to get projects due to:${error}`);
      }
    };
    getPrevProject();
  }, []);

  const technologyArray = [
    "html",
    "ejs",
    "jsx",
    "css",
    "bootstrap",
    "tailwind",
    "react",
    "angular",
    "vue",
    "next",
    "vite",
    "node",
    "javascript",
    "typescript",
    "java",
    "python",
    "php",
    "ruby",
    "express",
    "cloudflare",
    "prisma",
    "django",
    "flusk",
    "spring",
    "laravel",
    "rails",
    "mongodb",
    "mysql",
    "postgres",
  ];

  const editTechnology = (technology) => {
    if (!usedTechnology.includes(technology)) {
      setUsedTechnology([...usedTechnology, technology]);
    } else {
      setUsedTechnology(usedTechnology.filter((item) => item !== technology));
    }
  };

  const handleOnSubmit = async (event) => {
    setLoadingState(true);
    event.preventDefault();

    const updatedFormData = new FormData();
    updatedFormData.append("projectName", updatedProjectName);
    updatedFormData.append("author", updatedAuthorrName);
    updatedFormData.append("projectType", updateProjectType);
    updatedFormData.append("owner", updatedOwnerName);
    updatedFormData.append("description", updatedDescription);
    updatedFormData.append("projectThumbnail", updatedThumbnailImg);
    updatedFormData.append("firstView", updatedFirstPageImg);
    updatedFormData.append("secondView", updatedSecondPageImg);
    updatedFormData.append("thirdView", updatedThirdPageImg);
    updatedFormData.append("projectUrl", updatedProjectUrl);
    updatedFormData.append("githubLink", updatedGithubRepo);
    usedTechnology.forEach((tech) => {
      updatedFormData.append("technologyUsed[]", tech);
    });

    try {
      await axios
        .patch(`${envConfig.editProjectApiUrl}/${id}`, updatedFormData)
        .then(() => {
          setLoadingState(false);
          navigate("/dashboard/project-manage");
        });
    } catch (error) {
      console.log(error);
      setLoadingState(false);
      navigate("/dashboard/project-manage");
    }

    formRef.current.reset();
    setUsedTechnology([]);
  };

  return (
    <div className="w-5/6 float-right">
      {loadingState === true && <LoadingSpiner />}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Link to={"/dashboard/project-manage"}>
        <FaArrowCircleLeft className="text-3xl mb-4 ml-8 cursor-pointer"/>
        </Link>
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-blue-600 md:mb-6 lg:text-3xl">
              Update Your Existing Projects
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
                Change Existing Project Name{" "}
              </label>
              <input
                name="projectName"
                id="projectName"
                onChange={(event) => setProjectName(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={prevProjectData.projectName}
              />
            </div>

            {/* Project author input  */}
            <div>
              <label
                htmlFor="author"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                Change Existing Project Author Name
              </label>
              <input
                name="author"
                id="author"
                onChange={(event) => setAuthorrName(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={prevProjectData.author}
              />
            </div>

            {/* Project type input */}
            <div>
              <label
                htmlFor="type"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                Project Type
              </label>
              <input
                name="type"
                id="type"
                onChange={(event) => setProjectType(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={prevProjectData.projectType}
              />
            </div>

            {/* Project current owner input */}
            <div>
              <label
                htmlFor="owner"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                Project Owner
              </label>
              <input
                name="owner"
                id="owner"
                onChange={(event) => setOwnerName(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={prevProjectData.owner}
              />
            </div>

            {/* Project host url input  */}
            <div className="sm:col-span-2">
              <label
                htmlFor="projectUrl"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                Change Existing Project Url
              </label>
              <input
                name="projectUrl"
                id="projectUrl"
                onChange={(event) => setProjctUrl(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={prevProjectData.projectUrl}
              />
            </div>

            {/* Project github repository input  */}
            <div className="sm:col-span-2">
              <label
                htmlFor="githubLink"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                Change Existing Github Repository
              </label>
              <input
                name="githubLink"
                id="githubLink"
                onChange={(event) => setGithubRepo(event.target.value)}
                className="w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={prevProjectData.githubLink}
              />
            </div>

            {/* Project thumbnail image input  */}
            <div className="sm:col-span-2">
              <div className="font-[sans-serif] max-w-md">
                <label
                  className="text-base text-blue-600 font-semibold mb-2 block"
                  htmlFor="projectThumbnail"
                >
                  Change Existing Projects Thumbnail View
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
                  Change Existing Projects First Page View
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
                  Change Existing Projects Second Page View
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
                  Change Existing Projects Third Page View
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

            {/* Technology used section  */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-blue-700">
                Change Existing Used Technology
              </h3>
              <ul className="bg-blue-50 w-[550px] grid grid-flow-cols grid-cols-4 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg">
                {technologyArray.map((technology, index) => (
                  <li key={index} className="w-full cursor-pointer">
                    <div className="flex items-center ps-8 cursor-pointer">
                      <input
                        id={technology}
                        type="checkbox"
                        value={technology}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
                        onChange={() => editTechnology(technology)}
                      />
                      <label
                        htmlFor={technology}
                        className="w-full py-3 mr-28 ml-2 text-sm font-medium text-gray-900 cursor-pointer"
                      >
                        {technology}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project description input  */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 inline-block text-lg text-blue-600 sm:text-base font-bold "
              >
                Change Existing Project Description
              </label>
              <textarea
                name="description"
                id="description"
                onChange={(event) => setDescription(event.target.value)}
                className="h-64 w-full rounded border bg-blue-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                defaultValue={prevProjectData.description}
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
