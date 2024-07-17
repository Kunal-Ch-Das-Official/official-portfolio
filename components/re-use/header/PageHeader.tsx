"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pageLogo from "@/public/images/banner-images/Potfolio-logo.png";
import { usePathname } from "next/navigation";
import SideNav from "./SideNav";
import { MdSegment } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

interface NavItem {
  link: string;
  path: string;
}

const PageHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number | undefined>();
  const currentPath = usePathname();

  const navItems: NavItem[] = [
    {
      link: "Projects",
      path: "/projects",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Hire Me",
      path: "/hire",
    },
    {
      link: "Blogs",
      path: "/blogs",
    },
  ];

  // Active link handler
  const isActive = (thePath: string) => {
    return currentPath === thePath;
  };

  // Toggle Menu handler
  const toggleMenu = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  // if window width is greater than 767px then automatically close toggle.
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 767) {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Initialize screen width

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // if user scroll on y axis then navbar colour will be change.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu close on click over the link
  const closeToggle = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navbar body  */}
      <header
        id="navBar"
        className={`w-full fixed top-0 left-0 right-0 ${
          isMenuOpen ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <nav
          className={`py-4 lg:px-24 px-4 ${
            isSticky && isMenuOpen === false
              ? "sticky top-0 left-0 right-0 blurBackground"
              : ""
          }`}
        >
          <div className="flex justify-between items-center sm:mr-1">
            {/* Rendering logo  */}
            <div className="bottomTooltip">

            <Link href="/" className={"flex items-center gap-2"}>
              <Image
                src={pageLogo}
                alt="Kunal Chandra Das"
                height={200}
                width={200}
                className={"inline-block rounded-full mt-2"}
                loading="eager"
                priority={true}
              />
            </Link>
            <span className="bottomTooltipText mt-3 cursor-pointer">Home</span>
            </div>
            {/* Nav item for large device  */}
            <ul className={"md:flex space-x-12 mr-16 hidden"}>
              {navItems.map(({ link, path }) => (
                <Link
                  prefetch={true}
                  key={path}
                  href={path}
                  className={`block text-sm align-center
                               text-white uppercase cursor-pointer
                               hover:text-orange-300 font-bold ${
                                 isActive(path) ? "activeLink" : ""
                               }`}
                >
                  {link}
                </Link>
              ))}
            </ul>

            {/* Github and linkdin button  */}
            <div className="inline-flex items-center">
              <a href='https://github.com/Kunal-Ch-Das-Official' target="_blank">
                <FaGithub className="text-2xl flex items-center mr-5 text-gray-400 hover:text-white"/>
              </a>
              <a href='#'>
                <FaLinkedin className="text-2xl flex items-center text-gray-400 hover:text-white"/>
              </a>
            </div>
            {/* Menu close button for mobile device  */}
            <div className={"md:hidden"}>
              <button onClick={toggleMenu} className={"focus:outline-none"}>
                {isMenuOpen ? (
                  ""
                ) : (
                  <MdSegment className="text-5xl font-extrabold hover:transition-transform hover:scale-110 hover:text-orange-500" />
                )}
              </button>
            </div>

            {/* Navigation for small devices */}
            {isMenuOpen && <SideNav closeMenu={closeToggle} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default PageHeader;
