import React, { useRef, useState } from "react";
import SectionHeading from "../../utils/non-functional/common-heading/SectionHeading";
import TextInput from "../../utils/non-functional/input-fields/TextInput";
import TextArea from "../../utils/non-functional/input-fields/Textarea";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import { TbWorldUpload } from "react-icons/tb";
import TransparentLink from "../../utils/non-functional/anchor/TransparentLink";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import FileInput from "../../utils/non-functional/input-fields/FileInput";
import CommandInput from "../../utils/non-functional/input-fields/CommandInput";
import CodeEditor from "../../utils/non-functional/code-editor/CodeEditor";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import { AiOutlineFileDone, AiOutlineFileExclamation } from "react-icons/ai";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import PrivateScreenModal from "../../utils/non-functional/modals/PrivateScreenModal";
import { useNavigate } from "react-router-dom";
const PostArticle: React.FC = () => {
  // Form related hooks
  const articleFormRef = useRef<HTMLFormElement | null>(null);
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [writerName, setWriterName] = useState<string>("");
  const [topicHeading, setTopicHeading] = useState<string>("");
  const [articleStatement, setArticleStatement] = useState<string>("");
  const [graphicalOverview, setGraphicalOverview] = useState<File>();
  const [requireCommand, setRequireCommand] = useState<string>("");
  const [requireCode, setRequireCode] = useState<string>("");

  // Submission releted hooks
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [uploadResponse, setUploadResponse] = useState<IUploadResponse>({
    message: null,
    details: null,
    statusIcon: null,
    buttonColor: null,
  });

  interface IUploadResponse {
    message: string | null;
    details: string | null;
    statusIcon: React.ReactNode;
    buttonColor: string | null;
  }

  const handleArticlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const blogArticleData = new FormData();
      blogArticleData.append("blogTitle", articleTitle);
      blogArticleData.append("authorName", writerName);
      blogArticleData.append("statementHeading", topicHeading);
      blogArticleData.append("statement", articleStatement);
      blogArticleData.append("supportingImgUrl", graphicalOverview as Blob);
      blogArticleData.append("commandLine", requireCommand);
      blogArticleData.append("corespondingCode", requireCode);

      const authToken = localStorage.getItem("auth-token");
      const visitorToken = sessionStorage.getItem("visitor-token");
      const token = authToken || visitorToken;
      const response = await axios.post(
        envConfig.blogArticleUrl,
        blogArticleData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        setIsSuccessful(true);
        setUploadResponse({
          message: response.data.message,
          details: response.data.details,
          statusIcon: (
            <AiOutlineFileDone className="text-7xl font-bold text-primary-button-background" />
          ),
          buttonColor: "bg-primary-button-background ",
        });
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
      setLoading(false);
      setOpenAlert(true);
      articleFormRef.current?.reset();
    }
  };

  const handleCloseModal = () => {
    if (isSuccessful === true) {
      navigate("/admin-console/manage-articles");
    }
    setOpenAlert(false);
  };
  return (
    <>
      {loading === true && <LoadingSpinner />}
      <PrivateScreenModal
        buttonText="Got it"
        showOrHide={openAlert === true ? "visable" : "hidden"}
        closeButton={handleCloseModal}
        statusIcon={uploadResponse.statusIcon}
        alertHead={uploadResponse.message}
        message1={uploadResponse.details}
        message2={null}
        buttonColor={uploadResponse.buttonColor}
      />

      <main
        className="min-h-screen mx-auto w-full px-0 lg:w-[80%]
       bg-white pt-20 lg:pt-6 z-[-10000]"
      >
        <SectionHeading
          mainHeading="Latest Insights in Technology"
          subHeading="Stay Updated with Cutting-Edge Innovations, Trends, and Expert Analysis"
        />

        <section className="w-full md:w-[70%] md:mx-auto">
          <form
            id="blog_article_upload_form"
            ref={articleFormRef}
            onSubmit={handleArticlePost}
          >
            {/*1. Article title and writer name */}
            <div
              id="article_title_&_writer_name"
              className="flex justify-around gap-3"
            >
              {/* Article title  */}
              <div className="w-full">
                <TextInput
                  inputLabel="Article title"
                  defaultText={undefined}
                  textValue={setArticleTitle}
                  placeHolderText="Enter article title"
                  isRequired={true}
                  fieldId="articleTitle"
                />
              </div>
              {/*  Writer of the article  */}
              <div className="w-full">
                <TextInput
                  inputLabel="Writer"
                  defaultText={undefined}
                  textValue={setWriterName}
                  placeHolderText="Enter your name"
                  isRequired={true}
                  fieldId="writerOfArtile"
                />
              </div>
            </div>

            {/* 2. Required image  */}
            <div id="article_graphical_overview" className="my-4">
              <FileInput
                givenFile={graphicalOverview}
                fileName={graphicalOverview?.name}
                fileSize={graphicalOverview?.size || 0}
                setFile={setGraphicalOverview}
                isRequired={true}
                previousImage={undefined}
              />
            </div>

            {/*3. Topic heading and statement */}
            <div id="topic_heading_&_statement" className="space-y-2">
              {/* Topic heading  */}
              <TextInput
                inputLabel="Topic heading"
                defaultText={undefined}
                textValue={setTopicHeading}
                placeHolderText="Enter the article topic"
                isRequired={true}
                fieldId="articleTopic"
              />

              {/* Article statement  */}
              <TextArea
                editorLabel="Statement"
                eventValue={articleStatement}
                eventHandler={setArticleStatement}
              />
            </div>

            {/*4. Require command  */}
            <div id="require_command">
              <CommandInput
                placeHoderText="sudo --add command"
                defaultCommand={undefined}
                setValue={setRequireCommand}
                isRequired={false}
                inputId="commandLine"
                inputLabel="Require terminal command"
              />
            </div>

            {/*5 Require code  */}
            <div id="require_code">
              <CodeEditor
                initialValue={requireCode}
                onChange={(value) => setRequireCode(value || "")}
              />
            </div>

            {/* 6. Submit and cancel button container  */}
            <div
              id="submit_and_cancel_button"
              className="flex flex-col md:flex-row gap-3 pb-12"
            >
              <ColorButton
                btnType="submit"
                eventHandler={undefined}
                btnText="Submit Article"
                icon={<TbWorldUpload className="text-black text-xl" />}
              />
              <TransparentLink
                path="/admin-console/manage-projects"
                linkText="Manage Existing"
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

export default PostArticle;
