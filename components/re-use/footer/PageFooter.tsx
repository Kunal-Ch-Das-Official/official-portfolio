import React from "react";
import footerStyle from "./FooterStyle.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import footerLogo from '@/public/images/banner-images/Potfolio-logo.png';

const PageFooter: React.FC = () => {
  return (
    <div className="mt-12">
      <main className={footerStyle.body}>
        <div className={footerStyle.loopWrapper}>
          <div className={footerStyle.mountain}></div>
          <div className={footerStyle.hill}></div>
          <div className={footerStyle.tree}></div>
          <div className={footerStyle.tree}></div>
          <div className={footerStyle.tree}></div>
          <div className={footerStyle.rock}></div>
          <div className={footerStyle.truck}></div>
          <div className={footerStyle.wheels}></div>
        </div>
      </main>
      <footer className="footer bannerBackground text-neutral-content items-center p-4 pb-6 lg:pb-0">
        <aside className="flex flex-col">
          <Image src={footerLogo} alt="Kunal Chandra Das Portfolio" height={200} width={200}/>
          <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
           <FaGithub className="text-3xl cursor-pointer hover:transition-transform hover:scale-110"/>
          </a>
          <a>
           <FaLinkedin className="text-3xl text-blue-500 cursor-pointer hover:transition-transform hover:scale-110"/>
          </a>
          <a>
           <FaTwitter className="text-3xl text-blue-500 cursor-pointer hover:transition-transform hover:scale-110"/>
          </a>
          <a>
           <IoLogoWhatsapp className="text-3xl text-green-500 cursor-pointer hover:transition-transform hover:scale-110"/>
          </a>
          <a>
           <MdEmail className="text-3xl text-red-500 cursor-pointer hover:transition-transform hover:scale-110"/>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default PageFooter;
