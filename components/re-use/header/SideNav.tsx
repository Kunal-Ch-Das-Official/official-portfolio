"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import brandLogo from "@/public/images/header-footer/Potfolio-logo.webp";
import { usePathname } from "next/navigation";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { FaUsersViewfinder } from "react-icons/fa6";
import { ImBlog } from "react-icons/im";

interface SideNavProps {
  closeMenu: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ closeMenu }) => {

  const normalPath = usePathname();
  const pathname = useMemo(() => normalPath, [normalPath]);

  return (
    <nav className="blurBackground shadow-2xl h-screen fixed top-0 left-0 min-w-[320px] py-6 px-4 overflow-auto">
      <div className="mt-0">
        <button aria-label="Close navigarion menu"
          className="float-right mt-2 hover:transition-transform hover:scale-110 hover:rounded-full"
          onClick={closeMenu}
        >
          <IoCloseCircleOutline className="text-5xl font-bold hover:text-orange-500" />
        </button>
        <ul onClick={closeMenu}>
      
          <Link
            href="/"
            className={"text-2xl font-bold text-white flex items-center gap-2 mb-8"}
          >
            <Image
              src={brandLogo}
              alt="Tech10x logo"
              height={150}
              width={150}
              className={"inline-block mt-2"}
              loading="eager"
              priority
            />
          </Link>
       
          <li>
            <Link
              className={`text-white hover:text-orange-500 text-sm font-bold flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/projects" ? "activeLink" : ""
              }`}
              href="/projects"
            >
              <GoProjectSymlink className="w-[18px] h-[18px] mr-4" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              className={`text-white hover:text-orange-500 text-sm font-bold flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/about" ? "activeLink" : ""
              }`}
              href="/about"
            >
              <BsExclamationOctagonFill className="w-[18px] h-[18px] mr-4" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              className={`text-white hover:text-orange-500 text-sm font-bold flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/hire" ? "activeLink" : ""
              }`}
              href="/hire"
            >
              <FaUsersViewfinder className="w-[18px] h-[18px] mr-4" />
              <span>Hire Me</span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              className={`text-white hover:text-orange-500 text-sm font-bold flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/blogs" ? "activeLink" : ""
              }`}
              href="/blogs"
            >
              <ImBlog className="w-[18px] h-[18px] mr-4" />
              <span>Blogs</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(SideNav);