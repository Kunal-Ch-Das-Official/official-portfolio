import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { MdReviews } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import profilePic from '../../../assets/favicon.webp';

const SideBar = () => {

  const [showProjects, setShowProjects] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false);
  

  const handleProjectDropdown = useCallback(() => {
    setShowProjects((showProjects) => !showProjects);
  }, []);

  const handleResumeDropdown = useCallback(() => {
    setShowResume((showResume) => !showResume);
  }, []);

  const handleBlogsDropdown = useCallback(() => {
    setShowBlogs((showBlogs) => !showBlogs);
  }, []);




  return (
    <div>
        <nav
      className="bg-white shadow-lg h-screen fixed top-0 left-0 min-w-[220px] py-6 px-6 font-[sans-serif] flex flex-col overflow-auto">

      <div className="flex flex-wrap items-center cursor-pointer">
        <div className="relative">
          <img src={profilePic} className="w-12 h-12 rounded-full border-white" alt='Profile Picture'/>
          <span className="h-3 w-3 rounded-full bg-green-600 border-2 border-white block absolute bottom-0 right-0"></span>
        </div>

        <div className="ml-4">
          <p className="text-sm text-[#3949ab] font-semibold">Kunal Chandra Das</p>
          <p className="text-xs text-gray-500 mt-0.5">Web Developer</p>
        </div>
      </div>


      <ul className="space-y-8 pl-3 flex-1 mt-10">

{/* Dashboard Link  */}
        <li>
          <Link to={'/dashboard'} className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
            <MdDashboard className="text-2xl mr-3"/>
            <span>Dashboard</span>
          </Link>
        </li>



        

{/* Dashboard/Project Link  */}
        <ol className='cursor-pointer'>
          <li onClick={handleProjectDropdown}>
          <div className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
           <AiOutlineFundProjectionScreen className="text-2xl mr-3" />
            <span>Projects</span>
            <IoMdArrowDropdown className='ml-2'/>
          </div>
          </li>

          <div className={`${showProjects === true ? 'flex' : 'hidden'} flex-col cursor-pointer font-semibold text-sm my-2 text-[#3949ab]
          shadow-xl py-2 `}>
          <Link to={'/dashboard/project-manage'} className='mb-2 inline-flex items-center p-2'>
            <MdOutlineManageAccounts className="text-2xl mr-3"/>
            <span>Manage</span>
          </Link>
          <Link to={'/dashboard/project-post'} className='mb-2 inline-flex items-center p-2'>
            <FaCloudUploadAlt className="text-2xl mr-3"/>
            <span>Post</span>
          </Link>
          </div>
        </ol>







{/* Dashboard/Resume Link  */}
        <ol className='cursor-pointer'>
          <li onClick={handleResumeDropdown}>
          <div className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
             <LuClipboardList className="text-2xl mr-3"/>
            <span>Resume</span>
            <IoMdArrowDropdown className='ml-2'/>
          </div>
          </li>


          <div className={`${showResume === true ? 'flex' : 'hidden'} flex-col font-semibold text-sm my-2 text-[#3949ab]
          shadow-xl py-2 cursor-pointer`}>

          <Link to={'/dashboard/resume-manage'} className='mb-2 inline-flex items-center p-2'>
            <MdOutlineManageAccounts className="text-2xl mr-3"/>
            <span>Manage</span>
          </Link>

          <Link to={'/dashboard/resume-post'} className='mb-2 inline-flex items-center p-2'>
            <FaCloudUploadAlt className="text-2xl mr-3"/>
            <span>Post</span>
          </Link>
          </div>
        </ol>




{/* Dashboard/Blog Link  */}
<ol className='cursor-pointer'>
          <li onClick={handleBlogsDropdown}>
          <div className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
             <TbLogs className="text-2xl mr-3"/>
            <span>Blogs</span>
            <IoMdArrowDropdown className='ml-2'/>
          </div>
          </li>


          <div className={`${showBlogs === true ? 'flex' : 'hidden'} flex-col font-semibold text-sm my-2 text-[#3949ab]
          shadow-xl py-2 cursor-pointer`}>

          <Link to={'/dashboard/blog-manage'} className='mb-2 inline-flex items-center p-2'>
            <MdOutlineManageAccounts className="text-2xl mr-3"/>
            <span>Manage</span>
          </Link>

          <Link to={'/dashboard/blog-post'} className='mb-2 inline-flex items-center p-2'>
            <FaCloudUploadAlt className="text-2xl mr-3"/>
            <span>Post</span>
          </Link>
          </div>
        </ol>




        <ol>
          <li>
          <Link to={'/dashboard/review-manage'} className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all ">
           <MdReviews className="text-2xl mr-3"/>
            <span>Reviews</span>
          </Link>
          </li>
        </ol>

        <ol>
          <li>
          <Link to={'/dashboard/emails-manage'} className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all ">
           <MdMarkEmailUnread className="text-2xl mr-3"/>
            <span>Emails</span>
          </Link>
          </li>
        </ol>
      </ul>



      <ul className="space-y-8 pl-3 mt-8">
       
      <Link to={'/'} className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md left-0 hover:left-1 relative transition-all">
             <RiLogoutCircleRLine className="text-2xl mr-3"/>
            <span>Logout</span>
        </Link>
      </ul>
    </nav>
    </div>
  )
}

export default SideBar;