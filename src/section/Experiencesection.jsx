'use client';
import React ,{useContext} from 'react';
import ThemeContext from '@/context/ThemeContext';
import Experience from '@/component/Experience';

const Experiencesection = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`max-w-full mx-auto py-10 px-20 md:px-6 ${darkMode ? 'bg-[#272727]' : 'bg-white'}`}>
        <Experience />
    </div>
  )
}

export {Experiencesection}