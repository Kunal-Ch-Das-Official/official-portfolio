import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

interface BlogHeaderProps {
  inputValue: any;
  totalBlogs: number;
  inputHandler: () => void;
  searchInput: (inputEvent: any) => void;
  getSearchResult: (event: any) => void;
}
const BlogHeader: React.FC<BlogHeaderProps> = ({
  inputValue,
  totalBlogs,
  inputHandler,
  searchInput,
  getSearchResult,
}) => {
  return (
    <div>
      <main className="flex items-center lg:justify-start flex-wrap gap-5 relative py-3 px-10 border-orange-500 border-b lg:min-h-[80px] max-lg:min-h-[60px] bannerBackground">
        <div className="space-x-6 md:absolute md:right-10 flex items-center max-md:ml-auto">

          
          {/* Total Blogs  */}
          <section
            id="blog-count"
            className="bg-white px-2 justify-center py-2 rounded-full min-[430px]:inline-flex sm:inline-flex md:inline-flex items-center hidden"
          >
            <div className="px-2 inline-flex justify-center items-center">
              <span className="text-black text-sm mr-1 ">Total </span>
              <span className="text-black mr-2 text-sm hidden md:inline lg:inline">
                Blog:
              </span>
              <span className="text-orange-500">{totalBlogs}</span>
            </div>
          </section>

          {/* Search Bar filtering  */}
          <section id="search-bar">
            <form onSubmit={(event) => getSearchResult(event)} id="searchBar">
              <div className="flex">
                <div className="relative w-full ">
                  <label htmlFor="blogSearchInput">
                  <input
                    type="search"
                    id="blogSearchInput"
                    className="rounded-lg block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:outline-none"
                    placeholder="Search Blogs..."
                    onChange={(event: any) => searchInput(event)}
                  />
                  </label>
                  <button
                    type="submit" aria-label="blog-search-button"
                    className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-orange-400 rounded-e-lg border border-orange-700 hover:bg-orange-800 "
                  >
                    <BsSearch className="font-bold text-lg" />
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* Theme Changer  */}
          <section
            id="theme-changer"
            className="inline-block border-gray-300 border-l-2 pl-6 cursor-pointer"
          >
            <label htmlFor="themeController" className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                 id="themeController"
                className="theme-controller"
                value={inputValue}
                onChange={inputHandler}
              />

              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current text-orange-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BlogHeader;
