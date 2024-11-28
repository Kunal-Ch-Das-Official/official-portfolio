import React, { useEffect, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { MdImageNotSupported, MdNoteAdd } from "react-icons/md";
import SectionHeading from "../../utils/non-functional/common-heading/SectionHeading";
import TransparentLink from "../../utils/non-functional/anchor/TransparentLink";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import { TbNotesOff } from "react-icons/tb";
import { AiOutlineFileDone, AiOutlineFileExclamation } from "react-icons/ai";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import PrivateScreenModal from "../../utils/non-functional/modals/PrivateScreenModal";
import { useNavigate, useParams } from "react-router-dom";
interface IUploadResponse {
  message: string | null;
  details: string | null;
  statusIcon: React.ReactNode;
  buttonColor: string | null;
}

interface IResume {
  _id: string;
  resumeUrl: string;
}
const UpdateResume: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [previousResume, setPreviousResume] = useState<IResume>();
  const [preview, setPreview] = useState<string | null>(null);
  const [resume, setResume] = useState<File | null | undefined>();
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [updateResponse, setUpDateResponse] = useState<IUploadResponse>({
    message: null,
    details: null,
    statusIcon: null,
    buttonColor: null,
  });

  useEffect(() => {
    const getRequestedResume = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${envConfig.resumeManagementUrl}/${params.id}`
        );
        if (response) {
          setPreviousResume(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        throw new Error("Some thing went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getRequestedResume();
  }, [params.id]);

  // File preview handler
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResume(event.target.files?.[0]);
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  // Remove file from state handler
  const handleRemoveImage = () => {
    setPreview(null);
    setResume(null);
  };

  const handleResumeUpdate = async () => {
    setLoading(true);
    if (resume) {
      try {
        const superAdminToken = localStorage.getItem("super-admin") || null;

        const resumeForm = new FormData();
        resumeForm.append(
          "resumeUrl",
          (resume as Blob) || previousResume?.resumeUrl
        );
        const updateResponse = await axios.put(
          `${envConfig.resumeManagementUrl}/${params.id}`,
          resumeForm,
          {
            headers: {
              Authorization: `Bearer ${superAdminToken}`,
            },
          }
        );
        if (updateResponse) {
          if (updateResponse.status === 201) {
            setIsSuccess(true);
          }
          setUpDateResponse({
            message: updateResponse.data.message,
            details: updateResponse.data.details,
            statusIcon: (
              <AiOutlineFileDone className="text-7xl font-bold text-primary-button-background" />
            ),
            buttonColor: "bg-primary-button-background",
          });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setUpDateResponse({
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
    } else {
      setLoading(false);
    }
  };
  const handleCloseModal = () => {
    setIsAlertOpen(false);
    if (isSuccess) {
      navigate("/admin-console/manage-resume");
    }
  };
  return (
    <>
      {loading === true && <LoadingSpinner />}
      <PrivateScreenModal
        buttonText="Got it"
        showOrHide={isAlertOpen === true ? "visable" : "hidden"}
        closeButton={handleCloseModal}
        statusIcon={updateResponse.statusIcon}
        alertHead={updateResponse.message}
        message1={updateResponse.details}
        message2={null}
        buttonColor={updateResponse.buttonColor}
      />
      <main
        className="text-center min-h-screen mx-auto w-full px-10 md:w-[80%]
    bg-white pt-20 lg:pt-6 z-[-10000] lg:px-20"
      >
        <SectionHeading
          mainHeading="Update Resume Here"
          subHeading="Refresh resume with most recent skills and experiences. Make sure all details are up-to-date to accurately reflect qualifications."
        />

        <section
          className="flex flex-col items-center p-4 border border-dashed
     border-green-700 rounded-xl w-full h-full py-12"
        >
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            required={true}
          />

          {preview ? (
            <div className="mt-4">
              <img
                src={preview}
                alt="Uploaded Preview"
                className="max-w-full max-h-64 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          ) : (
            <div className="mt-8">
              <img
                src={previousResume?.resumeUrl}
                alt="Uploaded Preview"
                className="max-w-full max-h-64 rounded-md shadow-sm"
              />
            </div>
          )}

          <div className="mt-8">
            {preview ? (
              <>
                <p className="text-sm font-semibold my-2 text-gray-500">
                  {resume?.name}
                </p>
                <p className="text-sm text-green-600">
                  {resume && (resume?.size / 1000).toFixed(2)} KB
                </p>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold my-2 text-gray-600">
                  No file selected
                </p>
                <p className="text-xs font-semibold text-gray-600">
                  SVG, PNG, WEBP, JPG OR JPEG files are allowed
                </p>
              </>
            )}
          </div>

          <div className="flex justify-between gap-4 mt-8">
            <label
              htmlFor="fileInput"
              className="mb-4 p-2 border border-gray-300 font-semibold cursor-pointer bg-primary-button-background hover:bg-primary-button-background-hover text-center inline-flex items-center gap-2 rounded-xl "
            >
              <LuImagePlus className="text-xl" />
              Choose resume
            </label>
            {preview && (
              <button
                className="mb-4 px-4 py-1.5 border border-gray-300 rounded-xl inline-flex items-center
           cursor-pointer bg-primary-button-background hover:bg-primary-button-background-hover
            text-center gap-2 font-semibold"
                onClick={handleRemoveImage}
              >
                <MdImageNotSupported /> Cancel
              </button>
            )}
          </div>
        </section>

        <div className="flex flex-col md:flex-row justify-around gap-4 items-center mt-4">
          <ColorButton
            btnType="button"
            eventHandler={handleResumeUpdate}
            btnText={!resume ? "Please select resume" : "Update Resume"}
            icon={<MdNoteAdd className="text-xl" />}
          />
          <TransparentLink
            path="/admin-console/manage-resume"
            linkText="Discard "
            icon={<TbNotesOff className="text-xl" />}
          />
        </div>
      </main>
    </>
  );
};

export default UpdateResume;
