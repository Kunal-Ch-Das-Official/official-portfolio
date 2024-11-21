import React, { useCallback, useEffect, useRef, useState } from "react";
import FloatingNavbar from "./FloatingNavbar";
import Sidebar from "./Sidebar";

const Pageheader: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLHtmlElement | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(true);
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

  const handleSidebarOpenAndClose = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <header ref={sidebarRef}>
      {isSticky === true && (
        <FloatingNavbar
          handleMenuOpenClick={handleSidebarOpenAndClose}
          sidebarVisability={isSidebarOpen}
        />
      )}
      {isMenuOpen === true && (
        <Sidebar
          sidebarVisability={isSidebarOpen}
          handleShowHide={setSidebarOpen}
        />
      )}
    </header>
  );
};

export default Pageheader;
