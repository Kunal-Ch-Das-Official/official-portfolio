import { useParams } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../utils/non-functional/input-fields/TextInput";
import InputWithIcon from "../../utils/non-functional/input-fields/InputWithIcon";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { AiOutlineFileDone, AiOutlineFileExclamation } from "react-icons/ai";
import { RiFileEditFill } from "react-icons/ri";
import TextArea from "../../utils/non-functional/input-fields/Textarea";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import TransparentLink from "../../utils/non-functional/anchor/TransparentLink";
import SectionHeading from "../../utils/non-functional/common-heading/SectionHeading";
import FileInputMini from "../../utils/non-functional/input-fields/FileInputMini";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import PrivateScreenModal from "../../utils/non-functional/modals/PrivateScreenModal";
import { HiArrowLongRight } from "react-icons/hi2";
interface IUploadResponse {
  message: string | null;
  details: string | null;
  statusIcon: React.ReactNode;
  buttonColor: string | null;
}

interface IPreviousData {
  _id: string;
  projectName: string;
  author: string;
  projectType: string;
  owner: string;
  description: string;
  projectLogoUrl: string;
  firstPageImageUrl: string;
  secondPageImageUrl: string;
  thirdPageImageUrl: string;
  liveProjectUrl: string;
  githubRepoUrl: string;
  technologyUsed: [string];
  createdAt: string;
  updatedAt: string;
}
const UpdateProject: React.FC = () => {
  const params = useParams();
  const [previousData, setPreviousData] = useState<IPreviousData>();
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

  // 1. Get previous project data
  useEffect(() => {
    const fetchPreviousProject = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${envConfig.projectUrl}/${params.id}`
        );
        if (response) {
          setPreviousData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        throw new Error(
          `Something went wrong due to: ${error.message}, please try again later.`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchPreviousProject();
  }, [params.id]);

  // 2. Declare tech stack used array
  const technologyArray = useMemo(() => {
    return [
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
  }, []);

  // 3. Add previous technology used inside usedTechnology
  useEffect(() => {
    // Create a copy of the current used technologies
    const selectedTechnologies = [...usedTechnology];

    technologyArray.forEach((element) => {
      if (previousData?.technologyUsed.includes(element)) {
        const getCheckbox = document.getElementById(
          element
        ) as HTMLInputElement;
        if (getCheckbox) getCheckbox.checked = true;

        // Add the element to the selectedTechnologies array if it's not already there
        if (!selectedTechnologies.includes(element)) {
          selectedTechnologies.push(element);
        }
      }
    });

    // Update state with the selected technologies
    setUsedTechnology(selectedTechnologies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousData?.technologyUsed, technologyArray]);

  // 4. Add new technology along with previous one
  const addTechnology = (technology: string) => {
    setUsedTechnology((prevUsedTechnology) => {
      if (!prevUsedTechnology.includes(technology)) {
        return [...prevUsedTechnology, technology];
      } else {
        return prevUsedTechnology.filter((item) => item !== technology);
      }
    });
  };

  // 5. Handle update project function
  const handleProjectUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
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
    projectFormData.append("projectLogoUrl", (thumbnail as Blob) || null);
    projectFormData.append("firstPageImageUrl", (pageOneView as Blob) || null);
    projectFormData.append("secondPageImageUrl", (pageTwoView as Blob) || null);
    projectFormData.append(
      "thirdPageImageUrl",
      (pageThreeView as Blob) || null
    );
    usedTechnology.forEach((tech) =>
      projectFormData.append("technologyUsed[]", tech)
    );

    try {
      const superAdminToken = localStorage.getItem("super-admin") || null;
      const response = await axios.patch(
        `${envConfig.projectUrl}/${params.id}`,
        projectFormData,
        {
          headers: {
            Authorization: `Bearer ${superAdminToken}`,
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

      <main className="min-h-screen mx-auto w-full px-8 md:px-0 md:w-[80%] bg-white pt-6 overflow-x-hidden">
        <SectionHeading
          mainHeading="Project Update Portal"
          subHeading="Submit your project details for review and publication. Complete all
        required fields to ensure accurate representation and accessibility of
        your work. Please include comprehensive descriptions and any relevant
        files to facilitate a thorough evaluation and seamless sharing process."
        />
        <section className="w-full md:w-[70%] md:mx-auto">
          <form id="project_upload_form" onSubmit={handleProjectUpdate}>
            {/*1. Project name and type input container */}
            <div
              id="update_project_name_&_type"
              className="flex flex-col md:flex-row md:justify-around gap-3"
            >
              <div className="w-full">
                <TextInput
                  inputLabel="Project name"
                  defaultText={previousData?.projectName}
                  textValue={seProjectName}
                  placeHolderText={undefined}
                  isRequired={false}
                  fieldId="projectName"
                />
              </div>
              <div className="w-full mt-0 md:mt-[0.450rem]">
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
                  w-full p-2 capitalize"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    seProjectType(e.target.value)
                  }
                >
                  <option defaultValue={previousData?.projectType}>
                    {previousData?.projectType}
                  </option>
                  {previousData?.projectType === "real-world" ? (
                    <option value="hobby">Hobby</option>
                  ) : (
                    <option value="real-world">Real world</option>
                  )}
                </select>
              </div>
            </div>

            {/*2. Project author and owner input container  */}
            <div
              id="update_project_ownership"
              className="flex flex-col md:flex-row md:justify-around gap-3"
            >
              <div className="w-full">
                <TextInput
                  inputLabel="Project author"
                  defaultText={previousData?.author}
                  textValue={seProjectAuthor}
                  placeHolderText={undefined}
                  isRequired={false}
                  fieldId="projectAuthor"
                />
              </div>
              <div className="w-full">
                <TextInput
                  inputLabel="Project owner"
                  defaultText={previousData?.owner}
                  textValue={seProjectOwner}
                  placeHolderText={undefined}
                  isRequired={false}
                  fieldId="projectOwner"
                />
              </div>
            </div>

            {/*3. Github repo.. and project live url input container  */}
            <div id="update_project_access_urls" className="space-y-2">
              <InputWithIcon
                inputLabel="Github repository"
                placeholderText={undefined}
                corespIcon={<FaGithub className="text-xl" />}
                getFieldValue={setGithubRepo}
                isRequired={false}
                fieldId="gitHubRepo"
                defaultText={previousData?.githubRepoUrl}
              />
              <InputWithIcon
                inputLabel="Project url"
                placeholderText={undefined}
                corespIcon={
                  <LiaExternalLinkSquareAltSolid className="text-2xl" />
                }
                getFieldValue={setLiveUrl}
                isRequired={false}
                fieldId="liveUrl"
                defaultText={previousData?.liveProjectUrl}
              />
            </div>

            {/*4. Project thumbnail and first page view input container  */}
            <div
              id="update_project_images_one_block"
              className="flex flex-col lg:flex-row lg:justify-around gap-3 mt-4"
            >
              <FileInputMini
                getFileValue={setThumbnail}
                fileInput={thumbnail}
                isRequired={false}
                fieldlabel="Choose thumbnail"
                defaultValue={
                  previousData?.projectLogoUrl
                    ? `${previousData.projectName
                        .toLocaleLowerCase()
                        .replace(/ /g, "_")}_thumbnail`
                    : ""
                }
              />
              <FileInputMini
                fileInput={pageOneView}
                getFileValue={setPageOneView}
                isRequired={false}
                fieldlabel="Choose first page"
                defaultValue={
                  previousData?.firstPageImageUrl
                    ? `${previousData.projectName
                        .toLocaleLowerCase()
                        .replace(/ /g, "_")}_first_page_image`
                    : ""
                }
              />
            </div>

            {/*5. Project first view and project second view input container  */}
            <div
              id="update_project_images_two_block"
              className="flex flex-col lg:flex-row lg:justify-around gap-3 mt-4"
            >
              <FileInputMini
                fileInput={pageTwoView}
                getFileValue={setPageTwoView}
                isRequired={false}
                fieldlabel="Choose second page"
                defaultValue={
                  previousData?.secondPageImageUrl
                    ? `${previousData.projectName
                        .toLocaleLowerCase()
                        .replace(/ /g, "_")}_second_page_image`
                    : ""
                }
              />
              <FileInputMini
                fileInput={pageThreeView}
                getFileValue={setPageThreeView}
                isRequired={false}
                fieldlabel="Choose third page"
                defaultValue={
                  previousData?.thirdPageImageUrl
                    ? `${previousData.projectName
                        .toLocaleLowerCase()
                        .replace(/ /g, "_")}_third_page_image`
                    : ""
                }
              />
            </div>

            {/*6. Technology used check box container  */}
            <div id="update_tech_stack" className="mt-8 ">
              <h3 className="mb-2 text-sm font-medium text-gray-900">
                Choose tech stack
              </h3>
              <ul
                className="bg-white w-full grid grid-flow-cols grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-sm font-normal
             text-gray-700 border border-gray-200 rounded-lg"
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
                        className="w-full py-3 mr-2 ml-2 text-sm font-base text-gray-900 cursor-pointer"
                      >
                        {technology}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/*7. Project details text area input  */}
            <div className="mt-4" id="update_text_area">
              <TextArea
                editorLabel="Details"
                eventValue={previousData?.description}
                eventHandler={setProjectDetails}
              />
            </div>

            {/* 8. Submit and cancel button container  */}
            <div
              id="update_and_back_button"
              className="flex flex-col md:flex-row gap-3 pb-12"
            >
              <ColorButton
                btnType="submit"
                eventHandler={undefined}
                btnText="Update Project"
                icon={<RiFileEditFill className="text-black text-xl" />}
              />
              <TransparentLink
                path="/admin-console/manage-projects"
                linkText="Back to management "
                icon={<HiArrowLongRight className="text-gray-600 text-xl" />}
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default UpdateProject;
