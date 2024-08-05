"use client";
import React, { useEffect, useRef, useState } from "react";
import BlogHeader from "../blog-header/BlogHeader";
import BlogContainer from "../blog-container/BlogContainer";
import axios from "axios";
import envConfig from "@/envConfig";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
import { useThemeContext } from "@/utils/theme-context/ThemeContext";
import Pagination from "../pagination/Pagination";

interface GetAllBlogs {
  id: string;
  blogTitle: string;
  authorName: string;
  supportingImg: string;
  statement: string;
  createdAt: any;
}

const BlogCanvas = () => {
  // Get all blog hooks
  const [allBlogs, setAllBlogs] = useState<GetAllBlogs[]>([]);
  const [filteredOutput, setFilterdOutput] = useState<GetAllBlogs[]>([]);

  // Light and dark mode hooks
  const { layoutTheme, setLayoutTheme } = useThemeContext();

  // Pagination Hooks
  const [blogsPerPage, setBlogsPerPage] = useState<number>(2);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCurrentIndex, setIsCurrentIndex] = useState<any>();

  // Search Query Hooks
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Other Hooks
  const [loadingState, setLoadingState] = useState<boolean>(true);

  // Get current page alogrithm
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlog = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page algorithm
  const paginate = (event: any, pageNumber: number) => {
    const paginationEvent = parseInt(event.currentTarget.id);
    setIsCurrentIndex(paginationEvent);
    setCurrentPage(pageNumber);
  };

  // getting api response
  useEffect(() => {
    const getAllBlogs = async () => {
      try {
        await axios.get(envConfig.getAllBlogsApiUrl).then((res) => {
          setAllBlogs(res.data);
          setLoadingState(false);
        });
      } catch (error) {
        console.log(`Internal server error. Reason:${error}.`);
        setLoadingState(false);
      }
    };
    getAllBlogs();
  }, []);

  // Search features implementation //

  // Onsearch getting result feature
  function getSearchInput(e: any) {
    setSearchQuery(e.target.value);
    const userSearchQuery = searchQuery.toLowerCase();
    const result = allBlogs.filter((title) => {
      const searchOutput = title.blogTitle.toLowerCase();
      return searchOutput.includes(userSearchQuery);
    });
    setFilterdOutput(result);
  }


// After submiting getting result feature 
  const searchBlogs = async (event: any) => {
    event.preventDefault();
    const userSearchQuery = searchQuery.toLowerCase();
    const result = allBlogs.filter((title) => {
      const searchOutput = title.blogTitle.toLowerCase();
      return searchOutput.includes(userSearchQuery);
    });
    setFilterdOutput(result);
    event.target.reset();
  };

  // Dark and light mode implementation
  const handleValue = () => {
    if (layoutTheme === true) {
      setLayoutTheme(false);
    } else {
      setLayoutTheme(true);
    }
  };

 
  return (
    <main>
      <BlogHeader
        getSearchResult={searchBlogs}
        totalBlogs={allBlogs.length}
        inputValue={layoutTheme}
        inputHandler={handleValue}
        searchInput={(e: any) => getSearchInput(e)}
      />

      {searchQuery ? (
        <BlogContainer
          backgroundColor={
            layoutTheme === true
              ? "bg-gray-100 text-gray-900"
              : "text-gray-50 bg-black"
          }
          backendRes={filteredOutput}
        />
      ) : (
        <>
          {loadingState === true ? (
            <div className="mt-12">
              <ComponentSpinner />
            </div>
          ) : (
            <>
              {allBlogs.length === 0 ? (
                <h1 className="text-center font-bold text-orange-500 text-xl">
                  Currently no abogs are available. It will upload soon
                </h1>
              ) : (
                <BlogContainer
                  backgroundColor={
                    layoutTheme === true
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-50 bg-black"
                  }
                  backendRes={currentBlog}
                />
              )}
              <Pagination
                isCurrentPage={isCurrentIndex}
                blogPerPage={blogsPerPage}
                totalBlog={allBlogs.length}
                pagination={paginate}
              />
            </>
          )}
        </>
      )}
    </main>
  );
};

export default BlogCanvas;
