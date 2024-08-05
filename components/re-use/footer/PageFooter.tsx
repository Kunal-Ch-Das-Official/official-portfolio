import React from "react";
import footerStyle from "./FooterStyle.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import footerLogo from "@/public/images/header-footer/Potfolio-logo.webp";


const PageFooter: React.FC = () => {
  return (
    <footer className="mt-12">
      <main className={footerStyle.body}>
        <div className={footerStyle.loopWrapper}>
          <div className="md:bg-[#00000093] bg-transparent">
          </div>
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
      <div className="footer flex flex-col md:justify-around md:flex-row h-full md:h-24 bannerBackground text-neutral-content items-center p-4 pb-6 lg:pb-0">
        <aside className="flex flex-col">
          <Image
            src={footerLogo}
            alt="Kunal Chandra Das Portfolio"
            height={200}
            width={200}
          />
        </aside>
        <p className="text-sm text-orange-500">Copyright © ${new Date().getFullYear()} - All right reserved</p>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://github.com/Kunal-Ch-Das-Official" target="_blank" aria-label="github" rel="noopener" className="ring-1 ring-orange-500 rounded-full px-2 py-2">
            <FaGithub className="text-xl hover:text-orange-500 cursor-pointer hover:transition-transform hover:scale-110" />
          </a>
          <a href="#" rel="noopener" aria-label="linkdin" className="ring-1 ring-orange-500 rounded-full px-2 py-2">
            <FaLinkedin className="text-xl text-white hover:text-orange-500 cursor-pointer hover:transition-transform hover:scale-110" />
          </a>
          <a href="#" rel="noopener" aria-label="twitter" className="ring-1 ring-orange-500 rounded-full px-2 py-2">
            <FaTwitter className="text-xl text-white hover:text-orange-500 cursor-pointer hover:transition-transform hover:scale-110" />
          </a>
          <a href="tel: +919874353723" rel="noopener" aria-label="whatsapp" className="ring-1 ring-orange-500 rounded-full px-2 py-2">
            <IoLogoWhatsapp className="text-xl text-white hover:text-orange-500 cursor-pointer hover:transition-transform hover:scale-110" />
          </a>
          <a href="mailto:kunalchandradasofficial@gmail.com" aria-label="gmail" rel="noopener" className="ring-1 ring-orange-500 rounded-full px-2 py-2">
            <MdEmail className="text-xl text-white hover:text-orange-500 cursor-pointer hover:transition-transform hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
