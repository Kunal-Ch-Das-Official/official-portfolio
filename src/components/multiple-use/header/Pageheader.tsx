import React, { useCallback, useEffect, useRef, useState } from "react";
import FloatingNavbar from "./FloatingNavbar";
import Sidebar from "./Sidebar";
import handleDownload from "../../../download-resume-functions/downloadResume";

const Pageheader: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLHtmlElement | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(true);

  const [downloadPending, setDownloadPending] = useState<boolean>(false);
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

  // Scroll down navbar show
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Resume download function wrapper
  const handleDownloadWrapper = async () => {
    await handleDownload(setDownloadPending).catch((error) => {
      console.error("Download error:", error);
    });
  };
  console.log(downloadPending);
  const handleSidebarOpenAndClose = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <header ref={sidebarRef}>
      {isSticky === true && (
        <FloatingNavbar
          handleMenuOpenClick={handleSidebarOpenAndClose}
          sidebarVisability={isSidebarOpen}
          downloadResumeEventHandler={handleDownloadWrapper}
          downloadStatus={downloadPending}
        />
      )}
      {isMenuOpen === true && (
        <Sidebar
          sidebarVisability={isSidebarOpen}
          handleShowHide={setSidebarOpen}
          downloadResumeEventHandler={handleDownloadWrapper}
          downloadStatus={downloadPending}
        />
      )}
    </header>
  );
};

export default Pageheader;
