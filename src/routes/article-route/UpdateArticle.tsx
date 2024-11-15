import React, { useEffect, useState } from "react";
import SectionHeading from "../../utils/non-functional/common-heading/SectionHeading";
import TextInput from "../../utils/non-functional/input-fields/TextInput";
import TextArea from "../../utils/non-functional/input-fields/Textarea";
import ColorButton from "../../utils/non-functional/buttons/ColorButton";
import { TbWorldUpload } from "react-icons/tb";
import TransparentLink from "../../utils/non-functional/anchor/TransparentLink";
import FileInput from "../../utils/non-functional/input-fields/FileInput";
import CommandInput from "../../utils/non-functional/input-fields/CommandInput";
import CodeEditor from "../../utils/non-functional/code-editor/CodeEditor";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import { AiOutlineFileDone, AiOutlineFileExclamation } from "react-icons/ai";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import PrivateScreenModal from "../../utils/non-functional/modals/PrivateScreenModal";
import { useNavigate, useParams } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface IBlogArticleResponse {
  _id: string;
  blogTitle: string;
  authorName: string;
  supportingImgUrl: string;
  statementHeading: string;
  statement: string;
  corespondingCode: string;
  commandLine: string;
  createdAt: string;
  updatedAt: string;
}

const UpdateArticle: React.FC = () => {
  // Form related hooks
  const params = useParams();
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [writerName, setWriterName] = useState<string>("");
  const [topicHeading, setTopicHeading] = useState<string>("");
  const [articleStatement, setArticleStatement] = useState<string>("");
  const [graphicalOverview, setGraphicalOverview] = useState<File>();
  const [requireCommand, setRequireCommand] = useState<string>("");
  const [requireCode, setRequireCode] = useState<string>("");
  const [requestedArticle, setRequestedArticle] =
    useState<IBlogArticleResponse>();
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

  useEffect(() => {
    const getPreviousArticle = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${envConfig.blogArticleUrl}/${params.id}`
        );
        if (response) {
          setRequestedArticle(response.data);
          setRequireCode(response.data.corespondingCode);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        throw new Error(
          `Some thing went wrong due to: ${error.message}. Please try again later.`
        );
      } finally {
        setLoading(false);
      }
    };
    getPreviousArticle();
  }, [params.id]);

  const handleArticleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const blogArticleData = new FormData();
      blogArticleData.append("blogTitle", articleTitle);
      blogArticleData.append("authorName", writerName);
      blogArticleData.append("statementHeading", topicHeading);
      blogArticleData.append("statement", articleStatement);
      blogArticleData.append(
        "supportingImgUrl",
        (graphicalOverview as Blob) || requestedArticle?.supportingImgUrl
      );
      blogArticleData.append("commandLine", requireCommand);
      blogArticleData.append("corespondingCode", requireCode);

      const authToken = localStorage.getItem("auth-token");
      const visitorToken = sessionStorage.getItem("visitor-token");
      const token = authToken || visitorToken;
      const response = await axios.patch(
        `${envConfig.blogArticleUrl}/${params.id}`,
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
        className="min-h-screen mx-auto w-full px-8 md:px-0 md:w-[80%]
       bg-white pt-6 lg:pt-6 z-[-10000]"
      >
        <SectionHeading
          mainHeading="Atricle update console"
          subHeading="Enhance and refine your tech article with new information"
        />

        <section className="w-full md:w-[70%] md:mx-auto">
          <form id="blog_article_update_form" onSubmit={handleArticleUpdate}>
            {/*1. Article title and writer name */}
            <div
              id="article_title_&_writer_name_update"
              className="flex justify-around gap-3"
            >
              {/* Article title  */}
              <div className="w-full">
                <TextInput
                  inputLabel="Article title"
                  defaultText={requestedArticle?.blogTitle}
                  textValue={setArticleTitle}
                  placeHolderText={undefined}
                  isRequired={false}
                  fieldId="articleTitleUpdate"
                />
              </div>
              {/*  Writer of the article  */}
              <div className="w-full">
                <TextInput
                  inputLabel="Writer"
                  defaultText={requestedArticle?.authorName}
                  textValue={setWriterName}
                  placeHolderText={undefined}
                  isRequired={false}
                  fieldId="writerOfArtileUpdate"
                />
              </div>
            </div>

            {/* 2. Required image  */}
            <div id="article_graphical_overview_update" className="my-4">
              <FileInput
                givenFile={graphicalOverview}
                fileName={graphicalOverview?.name}
                fileSize={graphicalOverview?.size || 0}
                setFile={setGraphicalOverview}
                isRequired={false}
                previousImage={requestedArticle?.supportingImgUrl}
              />
            </div>

            {/*3. Topic heading and statement */}
            <div id="topic_heading_&_statement_update" className="space-y-2">
              {/* Topic heading  */}
              <TextInput
                inputLabel="Topic heading"
                defaultText={requestedArticle?.statementHeading}
                textValue={setTopicHeading}
                placeHolderText={undefined}
                isRequired={false}
                fieldId="articleTopicUpdate"
              />

              {/* Article statement  */}
              <TextArea
                editorLabel="Statement"
                eventValue={requestedArticle?.statement}
                eventHandler={setArticleStatement}
              />
            </div>

            {/*4. Require command  */}
            <div id="require_command">
              <CommandInput
                placeHoderText={undefined}
                defaultCommand={requestedArticle?.commandLine}
                setValue={setRequireCommand}
                isRequired={false}
                inputId="commandLine"
                inputLabel="Require terminal command"
              />
            </div>

            {/*5 Require code  */}
            <div id="require_code_update">
              <CodeEditor
                caption="Update existing algorithm"
                themeColor="visual-studio"
                readOnlyOption={false}
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
                btnText="Update Article"
                icon={<TbWorldUpload className="text-black text-xl" />}
              />
              <TransparentLink
                path="/admin-console/manage-articles"
                linkText="Back to Manage"
                icon={
                  <LiaLongArrowAltRightSolid className="text-gray-600 text-xl" />
                }
              />
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default UpdateArticle;
