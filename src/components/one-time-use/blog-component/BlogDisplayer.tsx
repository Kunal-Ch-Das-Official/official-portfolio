import React, { useEffect, useState } from "react";
import axios from "../../../../axios/axios";
import envConfig from "../../../../conf/envConfig";
import BlogCard from "./BlogCard";
import PageLoader from "../../../utils/page-loader/PageLoader";
import { LuSearch } from "react-icons/lu";
import OrangeButtun from "../../../utils/buttons/OrangeButtun";
interface ArticlesInterface {
  _id: string;
  blogTitle: string;
  authorName: string;
  supportingImgUrl: string;
  statement: string;
  createdAt: Date;
}

const BlogDisplayer: React.FC = () => {
  const [responseLength, setReponseLength] = useState<number>(0);
  const [allArticles, setArticles] = useState<ArticlesInterface[]>([]);
  const [pending, setPending] = useState<boolean>(false);
  const [filteredOutput, setFilterdOutput] = useState<
    ArticlesInterface[] | undefined
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Pagination Hooks
  const [articlePerPage, setArticlePerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setPending(true);
        const response = await axios.get(envConfig.blogArticleUrl);
        if (response) {
          setArticles(response.data);
          setReponseLength(response.data.length);
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(`Unable to fetch blog data due to:${error.message}`);
      } finally {
        setPending(false);
      }
    };
    fetchData();
  }, []);
  const showAndHideAllData = () => {
    setArticlePerPage(responseLength);
  };
  // Get current page alogrithm
  const indexOfLastBlog = currentPage * articlePerPage;
  const indexOfFirstBlog = indexOfLastBlog - articlePerPage;
  const currentPageData = allArticles?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Onsearch getting result feature
  const getSearchInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
    const userSearchQuery = searchQuery.toLowerCase();
    const result = allArticles?.filter((title) => {
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
    const result = allArticles?.filter((title) => {
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
    <main>
      {pending && <PageLoader />}
      <section>
        <div
          className="flex flex-col items-center justify-between gap-4 
        md:flex-row py-4 bg-yellow-200 rounded-b-lg px-4"
        >
          <div className="block w-full overflow-hidden md:w-max">
            <nav>
              <ul
                role="tablist"
                className="relative flex flex-row p-1 rounded-lg bg-blue-gray-50"
              >
                <OrangeButtun
                  buttonText="See All"
                  buttonType="button"
                  onClickHandler={showAndHideAllData}
                />

                <div className="font-semibold  ml-4 px-4 inline-flex items-center">
                  <span className="mr-2">Total Article:</span>
                  <span>{responseLength}</span>
                </div>
              </ul>
            </nav>
          </div>

          {/* Search bar  */}
          <form className="w-full md:w-72 bg-white rounded-lg">
            <div className="relative h-10 w-full min-w-[200px]">
              <div
                className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 
              place-items-center text-blue-gray-500"
              >
                <button
                  onClick={searchArticle}
                  aria-label="Search Article by Name"
                >
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
        <>
          {filteredOutput?.length === 0 && searchQuery.length !== 0 ? (
            <h2 className="text-center text-orange-500 font-bold mt-8">
              Article Dose Not Exist.
            </h2>
          ) : (
            <>
              {searchQuery ? (
                <>
                  {filteredOutput &&
                    filteredOutput.map((output, index) => (
                      <BlogCard
                        key={index}
                        writerName={output.authorName}
                        imageUrl={output.supportingImgUrl}
                        posedIn={output.createdAt}
                        title={output.blogTitle}
                        briefDescription={output.statement}
                        readArticleLink={`/tech-article/${output._id}`}
                      />
                    ))}
                </>
              ) : (
                <>
                  {currentPageData &&
                    currentPageData.map((article, index) => (
                      <BlogCard
                        key={index}
                        writerName={article.authorName}
                        imageUrl={article.supportingImgUrl}
                        posedIn={article.createdAt}
                        title={article.blogTitle}
                        briefDescription={article.statement}
                        readArticleLink={`/tech-article/${article._id}`}
                      />
                    ))}
                </>
              )}
            </>
          )}
        </>
      </section>
      {/* Pagination section  */}
      <div className="flex items-center pb-12 justify-between p-4 border-t border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {}
          Page {currentPage} of {pageNumber.length}
        </p>
        <div className={`${responseLength === 0 && "hidden"} flex gap-2`}>
          <button
            aria-label="Previous Page"
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
            aria-label="Next Page"
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
    </main>
  );
};

export default BlogDisplayer;
