import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import FloatingNavbar from "./FloatingNavbar";
import Sidebar from "./Sidebar";

// import { useLocation } from "react-router-dom";
import handleResumeDownload from "../../../reuseable-functions/download-resume/downloadResume";

const Pageheader: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLHtmlElement | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [isSticky, setIsSticky] = useState<boolean>(false);
  const [downloadPending, setDownloadPending] = useState<boolean>(false);
  const [isDownloaded, setIsDownloaded] = useState<string>("");
  // const { pathname } = useLocation();
  // Identify the screen width
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth < 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Initialize screen width

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  // Main function for handle click outside side bar
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (window.innerWidth < 1024) {
          if (isSidebarOpen === true) {
            setSidebarOpen(false);
          }
        } else {
          setSidebarOpen(true);
        }
      }
    },
    [isSidebarOpen]
  );

  // Is side bar is open then listen the event otherwise remove listener
  useEffect(() => {
    if (isSidebarOpen === true) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, handleClickOutside]);

  // Scroll down navbar show handler
  // const handleScroll = useCallback(() => {
  //   if (pathname === "/" && window.scrollY > 10) {
  //     setIsSticky(pathname === "/");
  //   } else if (pathname !== "/") {
  //     setIsSticky(pathname !== "/");
  //   } else {
  //     setIsSticky(false);
  //   }
  // }, [pathname]);

  // Scroll down navbar show
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [pathname, handleScroll]);

  // Resume download function wrapper
  const handleDownloadWrapper = async () => {
    await handleResumeDownload(
      setDownloadPending,
      setIsDownloaded,
      isDownloaded
    ).catch((error) => {
      console.error("Download error:", error);
    });
  };

  // Side bar open and close
  const handleSidebarOpenAndClose = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <header ref={sidebarRef}>

        <FloatingNavbar
          isDownloaded={isDownloaded}
          handleMenuOpenClick={handleSidebarOpenAndClose}
          sidebarVisability={isSidebarOpen}
          downloadResumeEventHandler={handleDownloadWrapper}
          downloadStatus={downloadPending}
        />


      {isMenuOpen === true && (
        <Sidebar
          isDownloaded={isDownloaded}
          sidebarVisability={isSidebarOpen}
          handleShowHide={setSidebarOpen}
          downloadResumeEventHandler={handleDownloadWrapper}
          downloadStatus={downloadPending}
        />
      )}
    </header>
  );
};

export default memo(Pageheader);
