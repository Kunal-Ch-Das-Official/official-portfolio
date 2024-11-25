import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import notebookStyle from "./ArticlePreview.module.css";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import envConfig from "../../../conf/envConfig";
import PageLoader from "../../utils/page-loader/PageLoader";
import CodeEditor from "../../utils/code-editor/CodeEditor";
import axios from "../../../axios/axios";
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
const RequestedBlog: React.FC = () => {
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
      {loading === true && <PageLoader />}

      <main
        className="bg-white min-h-screen  px-0 pb-8 pt-16 lg:pt-8
      mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem]
     2xl:max-w-12xl py-2 mt-[3.2rem] xl:mt-[5.7rem]
      "
      >
        <div className="w-[95%] mx-auto ">
          <Link to={"/tech-article"} aria-label="See Full Article">
            <PiArrowBendUpLeftBold
              className="transform translate-1 hover:scale-110 text-2xl
             text-orange-600 hover:text-blue-700 cursor-pointer"
            />
          </Link>
        </div>
        <div className="max-w-full mx-auto pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:px-20 lg:px-0">
            {/* First column  */}
            <div className="lg:flex-1 order-first lg:order-none">
              <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                <img
                  className="w-full h-full block mt-8 lg:mt-0 rounded-xl border border-gray-300 object-cover aspect-[1097/845]"
                  src={requestedArticle?.supportingImgUrl}
                  alt={requestedArticle?.statement}
                  width={500}
                  height={500}
                />
              </div>
              {/* Command line  */}
              <label className="inline-flex font-semibold mb-1 mt-2">
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
                  <p className="text-orange-400 mr-2">$ sudo</p>
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
                <span className="text-orange-600 font-medium mr-1">
                  Published:
                </span>
                <span>
                  {new Date(
                    requestedArticle?.createdAt || ""
                  ).toLocaleDateString()}
                </span>
              </p>

              <p className="text-gray-500 text-start text-sm mb-4">
                <span className="text-orange-600 font-medium mr-1">
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
                  <span className="font-medium mr-2 text-orange-500">
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

export default RequestedBlog;
