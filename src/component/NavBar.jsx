'use client';
import React, { useContext, useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { DarkModeThemeIcon } from './DarkModeThemeIcon';
import ThemeContext from '@/context/ThemeContext';
import { CgCloseO } from "react-icons/cg";

const NavBar = ({ sections }) => {
  const [mobiledropdown, setMobiledropdown] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const ismobile = [
    { label: "Home", secid: "home" },
    { label: "Skills", secid: "skills" },
    { label: "Experience", secid: "experience" },
    { label: "Project", secid: "project" },
    { label: "Contact me", secid: "contact" },
  ];

  const handleScroll = (section) => {
    if (sections[section] && sections[section].current) {
      const offset = -20; // Adjust this value as needed
      const element = sections[section].current;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      setMobiledropdown(false);
    } else {
      console.error(`Section ref for ${section} is not defined`);
    }
  };

  useEffect(() => {
    if (mobiledropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobiledropdown]);

  return (
    <div className={`max-w-full h-[4rem] fixed top-0 border-b-2 w-full z-[100]
      ${darkMode ? 'bg-[#272727]' : 'bg-white'}`}>
      <div className='flex w-full h-full justify-around items-center mx-4'>
        <div className='w-auto flex justify-center items-center'>
          <p className={`text-4xl md:text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>Prateek Sharma</p>
        </div>
        <div className='flex justify-evenly items-center max-w-[600px] gap-6 navmd:hidden'>
          {ismobile.map((item, index) => (
            <div key={index}>
              <button onClick={() => handleScroll(item.secid)} className='hover:text-gray-400'>
                <p className={`text-[14px] ${darkMode ? 'text-white' : 'text-black'} font-normal`}>
                  {item.label}
                </p>
              </button>
            </div>
          ))}
          <button className={`text-[14px] ${darkMode ? 'text-white' : 'text-black'} font-normal`}>
            <a href='/resume_prateek_sharma.pdf' target="_blank" rel="noopener noreferrer" download>
              DownLoad CV
            </a>
          </button>
        </div>
        <div className='navmd:hidden'>
          <DarkModeThemeIcon />
        </div>
        <div className='hidden navmd:flex navmd:justify-center navmd:items-center mr-4'>
          <button onClick={() => setMobiledropdown(true)}>
            <GiHamburgerMenu className={`text-xl ${darkMode ? 'text-white' : 'text-black'}`} />
          </button>
          <div className={`fixed top-0 left-0 h-full w-full z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${mobiledropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed top-0 -left-2 h-full w-[350px] z-50 shadow-lg 
              transform transition-transform duration-300 ${mobiledropdown ? 'translate-x-0' : '-translate-x-full'}
              ${darkMode ? 'bg-[#272727]' : 'bg-white'}`}>
              <div className="flex flex-col items-start gap-2 p-4 lg:p-2 w-full">
                <div className='ml-8 flex items-center justify-between w-[80%]'>
                  <DarkModeThemeIcon />
                  <button onClick={() => setMobiledropdown(false)}>
                    <CgCloseO className={`${darkMode ? 'text-white' : 'text-black'} text-xl`} />
                  </button>
                </div>
                {ismobile.map((item, index) => (
                  <div key={index}>
                    <button onClick={() => handleScroll(item.secid)}>
                      <p className={`text-[20px] text-start mt-4 ${darkMode ? 'text-white' : 'text-gray-700'} ml-8 font-medium hover:text-black`}>
                        {item.label}
                      </p>
                    </button>

                  </div>
                ))}
                <button  className={`text-[20px] text-start mt-4 ${darkMode ? 'text-white' : 'text-gray-700'} ml-8 font-medium hover:text-black`}>
                  <a href='/resume_prateek_sharma.pdf' target="_blank" rel="noopener noreferrer" download>
                    DownLoad CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
