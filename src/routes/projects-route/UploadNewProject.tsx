import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../utils/non-functional/input-fields/TextInput";
import InputWithIcon from "../../utils/non-functional/input-fields/InputWithIcon";
import { FaGithub } from "react-icons/fa";
import { TbWorldUpload } from "react-icons/tb";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { AiOutlineFileDone, AiOutlineFileExclamation } from "react-icons/ai";
import TextArea from "../../utils/non-functional/input-fields/Textarea";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import TransparentLink from "../../utils/non-functional/anchor/TransparentLink";
import SectionHeading from "../../utils/non-functional/common-heading/SectionHeading";
import FileInputMini from "../../utils/non-functional/input-fields/FileInputMini";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import PrivateScreenModal from "../../utils/non-functional/modals/PrivateScreenModal";

interface IUploadResponse {
  message: string | null;
  details: string | null;
  statusIcon: React.ReactNode;
  buttonColor: string | null;
}
const UploadNewProject: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [uploadResponse, setUploadResponse] = useState<IUploadResponse>({
    message: null,
    details: null,
    statusIcon: null,
    buttonColor: null,
  });
  const [projectName, seProjectName] = useState<string>("");
  const [projectType, seProjectType] = useState<string>("");
  const [projectAuthor, seProjectAuthor] = useState<string>("");
  const [projectOwner, seProjectOwner] = useState<string>("");
  const [githubRepo, setGithubRepo] = useState<string>("");
  const [liveUrl, setLiveUrl] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File>();
  const [pageOneView, setPageOneView] = useState<File>();
  const [pageTwoView, setPageTwoView] = useState<File>();
  const [pageThreeView, setPageThreeView] = useState<File>();
  const [usedTechnology, setUsedTechnology] = useState<string[]>([]);
  const [projectDetails, setProjectDetails] = useState<string>("");

  // Tech stack used array
  const technologyArray = [
    "html",
    "ejs",
    "xml",
    "jsx",
    "css",
    "bootstrap",
    "tailwind",
    "react",
    "angular",
    "vue",
    "vite",
    "next",
    "node",
    "javascript",
    "typescript",
    "java",
    "c",
    ".net",
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

  // Technology pushed in array algorithm
  const addTechnology = (technology: string) => {
    setUsedTechnology((prevUsedTechnology) => {
      if (!prevUsedTechnology.includes(technology)) {
        return [...prevUsedTechnology, technology];
      } else {
        return prevUsedTechnology.filter((item) => item !== technology);
      }
    });
  };

  const handleProjectUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const projectFormData = new FormData();
    projectFormData.append("projectName", projectName);
    projectFormData.append("projectType", projectType);
    projectFormData.append("author", projectAuthor);
    projectFormData.append("owner", projectOwner);
    projectFormData.append("description", projectDetails);
    projectFormData.append("liveProjectUrl", liveUrl);
    projectFormData.append("githubRepoUrl", githubRepo);
    projectFormData.append("projectLogoUrl", thumbnail as Blob);
    projectFormData.append("firstPageImageUrl", pageOneView as Blob);
    projectFormData.append("secondPageImageUrl", pageTwoView as Blob);
    projectFormData.append("thirdPageImageUrl", pageThreeView as Blob);
    usedTechnology.forEach((tech) =>
      projectFormData.append("technologyUsed[]", tech)
    );

    try {
      const authToken = localStorage.getItem("auth-token");
      const visitorToken = sessionStorage.getItem("visitor-token");
      const token = authToken || visitorToken;
      const response = await axios.post(
        envConfig.postNewProjectUrl,
        projectFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        setUploadResponse({
          message: response.data.message,
          details: response.data.details,
          statusIcon: (
            <AiOutlineFileDone className="text-7xl font-bold text-primary-button-background" />
          ),
          buttonColor: "bg-primary-button-background",
        });
        setIsSuccessful(true);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setUploadResponse({
        message: error?.response?.data?.issue || "An error occurred",
        details: error?.response?.data?.details || "Please try again later",
        statusIcon: (
          <AiOutlineFileExclamation className="text-7xl font-bold text-red-700" />
        ),
        buttonColor: "bg-red-700",
      });
    } finally {
      setIsAlertOpen(true);
      setLoading(false);
      formRef.current?.reset();
    }
  };

  const handleCloseModal = () => {
    if (isSuccessful) {
      navigate("/admin-console/manage-projects");
    }
    setIsAlertOpen(false);
  };
  return (
    <>
      {loading === true && <LoadingSpinner />}
      <PrivateScreenModal
        buttonText="Got it"
        showOrHide={isAlertOpen === true ? "visable" : "hidden"}
        closeButton={handleCloseModal}
        statusIcon={uploadResponse.statusIcon}
        alertHead={uploadResponse.message}
        message1={uploadResponse.details}
        message2={null}
        buttonColor={uploadResponse.buttonColor}
      />

      <main className="min-h-screen mx-auto w-full px-6 md:px-0 lg:w-[80%] bg-white pt-6">
        <SectionHeading
          mainHeading="Project Submission Portal"
          subHeading="Submit your project details for review and publication. Complete all
        required fields to ensure accurate representation and accessibility of
        your work. Please include comprehensive descriptions and any relevant
        files to facilitate a thorough evaluation and seamless sharing process."
        />
        <section className="w-full md:w-[70%] md:mx-auto">
          <form
            id="project_upload_form"
            ref={formRef}
            onSubmit={handleProjectUpload}
          >
            {/*1. Project name and type input container */}
            <div id="project_name_&_type" className="flex justify-around gap-3">
              <div className="w-full">
                <TextInput
                  inputLabel="Project name"
                  defaultText={undefined}
                  textValue={seProjectName}
                  placeHolderText="Enter project name"
                  isRequired={true}
                  fieldId="projectName"
                />
              </div>
              <div className="w-full mt-[0.450rem]">
                <label
                  htmlFor="project_type"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Select project type
                </label>
                <select
                  id="project_type"
                  className="bg-white border border-gray-300 text-gray-500
                 text-sm rounded-lg focus:ring-primary-button-background
                  focus:border-primary-button-background block
                  w-full p-2 "
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    seProjectType(e.target.value)
                  }
                >
                  <option defaultValue={undefined}>Choose project type</option>
                  <option value="real-world">Real world</option>
                  <option value="hobby">Hobby</option>
                </select>
              </div>
            </div>

            {/*2. Project author and owner input container  */}
            <div id="project_ownership" className="flex justify-around gap-3">
              <div className="w-full">
                <TextInput
                  inputLabel="Project author"
                  defaultText={undefined}
                  textValue={seProjectAuthor}
                  placeHolderText="Enter author name"
                  isRequired={true}
                  fieldId="projectAuthor"
                />
              </div>
              <div className="w-full">
                <TextInput
                  inputLabel="Project owner"
                  defaultText={undefined}
                  textValue={seProjectOwner}
                  placeHolderText="Enter owner name"
                  isRequired={true}
                  fieldId="projectOwner"
                />
              </div>
            </div>

            {/*3. Github repo.. and project live url input container  */}
            <div id="project_access_urls" className="space-y-2">
              <InputWithIcon
                inputLabel="Github repository"
                placeholderText="Enter repository link"
                corespIcon={<FaGithub className="text-xl" />}
                getFieldValue={setGithubRepo}
                isRequired={true}
                fieldId="gitHubRepo"
                defaultText={undefined}
              />
              <InputWithIcon
                inputLabel="Project url"
                placeholderText="Enter project url"
                corespIcon={
                  <LiaExternalLinkSquareAltSolid className="text-2xl" />
                }
                getFieldValue={setLiveUrl}
                isRequired={true}
                fieldId="liveUrl"
                defaultText={undefined}
              />
            </div>

            {/*4. Project thumbnail and first page view input container  */}
            <div
              id="project_images_one_block"
              className="flex justify-around gap-3 mt-4"
            >
              <FileInputMini getFileValue={setThumbnail} isRequired={true} />
              <FileInputMini getFileValue={setPageOneView} isRequired={true} />
            </div>

            {/*5. Project first view and project second view input container  */}
            <div
              id="project_images_two_block"
              className="flex justify-around gap-3 mt-4"
            >
              <FileInputMini getFileValue={setPageTwoView} isRequired={true} />
              <FileInputMini
                getFileValue={setPageThreeView}
                isRequired={true}
              />
            </div>

            {/*6. Technology used check box container  */}
            <div id="tech_stack" className="mt-8 ">
              <h3 className="mb-2 text-sm font-medium text-gray-900">
                Choose tech stack
              </h3>
              <ul
                className="bg-white w-full  grid grid-flow-cols grid-cols-4 text-sm font-normal
             text-gray-900 border border-gray-200 rounded-lg"
              >
                {technologyArray.map((technology, index) => (
                  <li key={index} className="w-full cursor-pointer">
                    <div className="flex items-center ps-8 cursor-pointer">
                      <input
                        id={technology}
                        type="checkbox"
                        value={technology}
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded cursor-pointer"
                        onChange={() => addTechnology(technology)}
                      />
                      <label
                        htmlFor={technology}
                        className="w-full py-3 mr-28 ml-2 text-sm font-base text-gray-900 cursor-pointer"
                      >
                        {technology}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/*7. Project details text area input  */}
            <div className="mt-4">
              <TextArea
                editorLabel="Details"
                eventValue={projectDetails}
                eventHandler={setProjectDetails}
              />
            </div>

            {/* 8. Submit and cancel button container  */}
            <div
              id="submit_and_cancel_button"
              className="flex flex-col md:flex-row gap-3 pb-12"
            >
              <ColorButton
                btnType="submit"
                eventHandler={undefined}
                btnText="Upload Project"
                icon={<TbWorldUpload className="text-black text-xl" />}
              />
              <TransparentLink
                path="/admin-console/manage-projects"
                linkText="Manage"
                icon={
                  <MdOutlineTipsAndUpdates className="text-gray-600 text-xl" />
                }
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default UploadNewProject;
