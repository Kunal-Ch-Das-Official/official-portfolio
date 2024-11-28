import React, { useEffect, useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import BlogTableRow from "../../components/single-use/table-component/BlogTableRow";

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
const ManageArticle: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false);
  const [responseLength, setReponseLength] = useState<number>(0);
  const [allArticle, setAllArticle] = useState<[IBlogArticleResponse]>();
  const [filteredOutput, setFilterdOutput] = useState<
    IBlogArticleResponse[] | undefined
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Pagination Hooks
  const [articlePerPage, setArticlePerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fetch article data
  useEffect(() => {
    const getAllArticle = async () => {
      setLoading(true);
      try {
        const response = await axios.get(envConfig.blogArticleUrl);
        if (response) {
          setAllArticle(response.data);
          setReponseLength(response.data.length);
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
    getAllArticle();
    const superAdminToken = localStorage.getItem("super-admin");
    if (superAdminToken) {
      setIsSuperAdmin(true);
    }
  }, []);

  const showAndHideAllData = () => {
    setArticlePerPage(responseLength);
  };
  // Get current page alogrithm
  const indexOfLastBlog = currentPage * articlePerPage;
  const indexOfFirstBlog = indexOfLastBlog - articlePerPage;
  const currentPageData = allArticle?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Onsearch getting result feature
  const getSearchInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
    const userSearchQuery = searchQuery.toLowerCase();
    const result = allArticle?.filter((title) => {
      const searchOutput = title.blogTitle.toLowerCase();
      return searchOutput.includes(userSearchQuery);
    });
    setFilterdOutput(result);
  };

  // After submiting getting result feature
  const searchArticle: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    const userSearchQuery = searchQuery.toLowerCase();
    const result = allArticle?.filter((title) => {
      const searchOutput = title.blogTitle.toLowerCase();
      return searchOutput.includes(userSearchQuery);
    });
    setFilterdOutput(result);
    // event.target.reset();
  };

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(responseLength / articlePerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      {loading === true && <LoadingSpinner />}

      <main
        className="text-center min-h-screen mx-auto w-full px-0 md:w-[80%]
       bg-white pt-20 lg:pt-6 z-[-10000]"
      >
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
            <div className="flex items-center justify-between gap-8 mb-8">
              {/* Page Heading */}
              <div>
                <h5 className="block text-xl text-left antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Tech Blog Management console
                </h5>
                <p className="block mt-1 text-start font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  Add, Update, View, And Delete your existing blog article form
                  here.
                </p>
              </div>
              {/* Add article button  */}
              <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
                <Link
                  to={"/admin-console/post-article"}
                  className="flex select-none items-center gap-3 rounded-lg bg-primary-button-background py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-100 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <MdAssignmentAdd className="text-xl" />
                  Add Article
                </Link>
              </div>
            </div>
            {/* Search and table heading */}
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="block w-full overflow-hidden md:w-max">
                <nav>
                  <ul
                    role="tablist"
                    className="relative flex flex-row p-1 rounded-lg bg-blue-gray-50"
                  >
                    <button
                      onClick={showAndHideAllData}
                      className="flex items-center justify-center 
                     text-base font-normal
                       text-center cursor-pointer 
                        bg-primary-button-background px-4 py-1 text-white rounded-lg 
                        focus:outline-1 outline-blue-700 transform translate-2 hover:scale-110"
                    >
                      See All
                    </button>

                    <div className="border rounded-md border-gray-300 ml-4 px-4 inline-flex items-center">
                      <span className="mr-2">Total Article:</span>
                      <span>{responseLength}</span>
                    </div>
                  </ul>
                </nav>
              </div>

              {/* Search bar  */}
              <form className="w-full md:w-72">
                <div className="relative h-10 w-full min-w-[200px]">
                  <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                    <button onClick={searchArticle}>
                      <LuSearch />
                    </button>
                  </div>
                  <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    onChange={getSearchInput}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Search article
                  </label>
                </div>
              </form>
            </div>
          </div>
          {/* Main article content  */}
          <div className="p-6 px-0 overflow-scroll">
            <table className="w-full mt-4 text-left table-auto min-w-max">
              {/* Table heading  */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Title
                    </p>
                  </th>
                  <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Publisher
                    </p>
                  </th>
                  <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Published At
                    </p>
                  </th>
                  <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Edited At
                    </p>
                  </th>
                  <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Manage
                    </p>
                  </th>
                </tr>
              </thead>
              {responseLength === 0 ? (
                <tbody id="Error_message_blog_article">
                  <tr>
                    <td className="p-6 font-semibold text-base text-accent-color">
                      Articles are not available, please upload one.
                    </td>
                  </tr>
                </tbody>
              ) : (
                <>
                  {/* Table Body */}
                  {filteredOutput?.length === 0 && searchQuery.length !== 0 ? (
                    <h2 className="text-center text-orange-500 font-bold mt-8">
                      Article Dose Not Exist.
                    </h2>
                  ) : (
                    <>
                      {searchQuery ? (
                        <>
                          {filteredOutput?.map((output, index) => (
                            <BlogTableRow
                              isSuperAdmin={isSuperAdmin}
                              key={index}
                              title={output.blogTitle}
                              authorName={output.authorName}
                              addedIn={output.createdAt}
                              editedIn={output.updatedAt}
                              previewLink={`/admin-console/preview-article/${output._id}`}
                              updateLink={`/admin-console/edit-article/${output._id}`}
                              removeLink={`/admin-console/remove-article/${output._id}`}
                            />
                          ))}
                        </>
                      ) : (
                        <>
                          {currentPageData?.map((article, index) => (
                            <BlogTableRow
                              isSuperAdmin={isSuperAdmin}
                              key={index}
                              title={article.blogTitle}
                              authorName={article.authorName}
                              addedIn={article.createdAt}
                              editedIn={article.updatedAt}
                              previewLink={`/admin-console/preview-article/${article._id}`}
                              updateLink={`/admin-console/edit-article/${article._id}`}
                              removeLink={`/admin-console/remove-article/${article._id}`}
                            />
                          ))}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </table>
          </div>

          {/* Pagination button  */}
          <div className="flex items-center justify-between p-4 border-t border-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {}
              Page {currentPage} of {pageNumber.length}
            </p>
            <div className={`${responseLength === 0 && "hidden"} flex gap-2`}>
              <button
                className={`rounded-lg border border-gray-900 py-2 px-4 text-center
                   align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all
                    hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] 
                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                    ${currentPage === 1 ? "hidden" : "visable"}
                    
                    `}
                type="button"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <button
                className={`select-none rounded-lg border border-gray-900 py-2 px-4
                     text-center align-middle font-sans text-xs font-bold uppercase
                      text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300
                       active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 
                       disabled:shadow-none
                       ${
                         currentPage === pageNumber.length
                           ? "hidden"
                           : "visable"
                       }
                       
                        `}
                type="button"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ManageArticle;
