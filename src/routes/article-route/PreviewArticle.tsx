import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import notebookStyle from "./ArticlePreview.module.css";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import CodeEditor from "../../utils/non-functional/code-editor/CodeEditor";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
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
const PreviewArticle: React.FC = () => {
  const [requestedArticle, setRequestedArticle] =
    useState<IBlogArticleResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams();

  useEffect(() => {
    const getPreviousArticle = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${envConfig.blogArticleUrl}/${params.id}`
        );
        if (response) {
          setRequestedArticle(response.data);
          // setRequireCode(response.data.corespondingCode);
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
  return (
    <>
      {loading === true && <LoadingSpinner />}

      <main className="bg-white min-h-screen mx-auto w-full px-0 md:w-[80%] pb-8 pt-16 lg:pt-8">
        <div className="w-[95%] mx-auto">
          <Link to={"/admin-console/manage-articles"}>
            <PiArrowBendUpLeftBold className="transform translate-1 hover:scale-110 text-2xl text-green-600 hover:text-blue-700 cursor-pointer" />
          </Link>
        </div>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:px-20 lg:px-0">
            {/* First column  */}
            <div className="lg:flex-1 px-4 order-2 lg:order-none">
              <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                <img
                  className="w-full h-full object-cover mt-8 lg:mt-0 rounded-xl"
                  src={requestedArticle?.supportingImgUrl}
                  alt={requestedArticle?.statement}
                />
              </div>
              {/* Command line  */}
              <label className="inline-flex font-semibold mb-1">
                Useful command{" "}
              </label>
              <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm">bash</p>
                </div>
                <div className="mt-4 inline-flex">
                  <p className="text-green-400 mr-2">$ sudo</p>
                  <p className="text-white">{requestedArticle?.commandLine}</p>
                </div>
              </aside>

              {/* Code Displayer  */}
              <div id="require_code_update">
                <CodeEditor
                  caption="Coresponding code"
                  themeColor="vs-dark"
                  readOnlyOption={true}
                  initialValue={requestedArticle?.corespondingCode}
                  onChange={() => null}
                />
              </div>
            </div>
            {/* Second column  */}
            <div className="lg:flex-1 px-4">
              <h2 className="text-lg text-start font-semibold text-gray-700 mb-1">
                {requestedArticle?.blogTitle}
              </h2>
              <p className="text-gray-500 text-start text-sm mb-2">
                {requestedArticle?.authorName}
              </p>

              <p className="text-gray-500 text-start text-sm mb-1">
                <span className="text-green-600 font-medium mr-1">
                  Published:
                </span>
                <span>
                  {new Date(
                    requestedArticle?.createdAt || ""
                  ).toLocaleDateString()}
                </span>
              </p>

              <p className="text-gray-500 text-start text-sm mb-4">
                <span className="text-green-600 font-medium mr-1">
                  Updated:
                </span>
                <span>
                  {requestedArticle?.createdAt === requestedArticle?.updatedAt
                    ? "Not yet"
                    : new Date(
                        requestedArticle?.updatedAt || ""
                      ).toLocaleDateString()}
                </span>
              </p>
              <div>
                <h3 className=" text-gray-700 text-start pb-2">
                  <span className="font-medium mr-2 text-green-500">
                    About:
                  </span>
                  <span className="text-sm">
                    {requestedArticle?.statementHeading}
                  </span>
                </h3>
                <div className={notebookStyle.page}>
                  <div className={notebookStyle.margin}></div>
                  <p>{requestedArticle?.statement}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PreviewArticle;
