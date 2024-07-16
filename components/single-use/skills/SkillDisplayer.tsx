'use client';
import BackgroundEffect from '@/components/user-interface/application-background/BackgroundEffect';
import React, { useState } from 'react';
import SkillSection from './SkillSection';
import { MdOutlineCancel } from "react-icons/md";

interface kcd{
  xxx: boolean
}


const SkillDisplayer:React.FC = () => {
  const [skillHidden, setSkillHidden] = useState<boolean>(false);
  const handleSkillClose = () => {
    setSkillHidden(false);
  }
  
  return (
    <main >
      <section className={skillHidden === true ? "flex" : "hidden"}>
      <BackgroundEffect />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <MdOutlineCancel className='text-white text-5xl float-right mr-4 mt-4 cursor-pointer hover:text-red-300' onClick={handleSkillClose}/>
      <SkillSection />
      </div>
      </section>
    </main>
    
  )
}

export default SkillDisplayer;