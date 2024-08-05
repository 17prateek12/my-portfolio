'use client';
import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { DarkModeThemeIcon } from './DarkModeThemeIcon';
import { CgCloseO } from "react-icons/cg";

const NavBar = ({ sections }) => {
  const [mobiledropdown, setMobiledropdown] = useState(false);
  const ismobile = [
    { label: "Home", secid: "home" },
    { label: "Skills", secid: "skills" },
    { label: "Experience", secid: "experience" },
    { label: "Project", secid: "project" },
    { label: "Contact me", secid: "contact" },
  ];

  const handleScroll = (e, secid) => {
    e.preventDefault();
    const section = document.getElementById(secid);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
        const offset = -30;
        const elementPosition = section.getBoundingClientRect().top + window.scrollY + offset;
  
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      });
      setMobiledropdown(false);
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
    <div className='max-w-full h-[4rem] fixed top-0 border-b-2 w-full z-[100] dark:bg-[#131a31] bg-white'>
      <div className='flex w-full h-full justify-around items-center mx-4'>
        <div className='w-auto flex justify-center items-center'>
          <p className='text-4xl sm:text-2xl text-gray-900 dark:text-white'>Prateek Sharma</p>
        </div>
        <div className='flex justify-evenly items-center max-w-[600px] gap-6 navsm:hidden'>
          {ismobile.map((item, index) => (
            <div key={index}>
            <a href={`#${item.secid}`} onClick={(e) => handleScroll(e, item.secid)} className='hover:text-gray-400'>
                <p className='text-[14px]  font-normal text-gray-900 dark:text-white hover:dark:bg-[#bb7c35] hover:bg-[#131a31] hover:text-white hover:px-2 hover:py-2 hover:rounded-lg hover:scale-110 ease-in-out transition-all duration-500'>
                  {item.label}
                </p>
              </a>
            </div>
          ))}
          <button className='text-[14px] font-normal text-black dark:text-white hover:dark:bg-[#bb7c35] hover:bg-[#131a31] hover:text-white hover:px-2 hover:py-2 hover:rounded-lg hover:scale-110 ease-in-out transition-all duration-500'>
            <a href='/PRATEEK_SHARMA_.pdf' target="_blank" rel="noopener noreferrer" download>
              DownLoad CV
            </a>
          </button>
        </div>
        <div className='navsm:hidden'>
          <DarkModeThemeIcon />
        </div>
        <div className='hidden navsm:flex navsm:justify-center navsm:items-center mr-4'>
          <button onClick={() => setMobiledropdown(true)}>
            <GiHamburgerMenu className='text-xl text-black  dark:text-white' />
          </button>
          <div className={`fixed top-0 left-0 h-full w-full z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${mobiledropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed top-0 -left-2 h-full w-[300px] z-50 shadow-lg 
              transform transition-transform duration-300 ${mobiledropdown ? 'translate-x-0' : '-translate-x-full'}
              bg-white dark:bg-[#131a31]`}>
              <div className="flex flex-col items-start gap-2 p-4 lg:p-2 w-full">
                <div className='ml-8 flex items-center justify-between w-[80%]'>
                  <DarkModeThemeIcon />
                  <button onClick={() => setMobiledropdown(false)}>
                    <CgCloseO className='text-black dark:text-white text-xl' />
                  </button>
                </div>
                {ismobile.map((item, index) => (
                  <div key={index} onClick={(e) => handleScroll(e, item.secid)}
                    className=' w-[80%] hover:dark:bg-[#bb7c35] hover:dark:text-white text-[20px] pl-2 py-2 rounded-lg hover:bg-[#131a31] hover:text-white text-start mt-4 text-black dark:text-white ml-8 font-medium'>
                    {item.label}
                  </div>
                ))}
                <div className='w-[80%] hover:dark:bg-[#bb7c35] hover:dark:text-white text-[20px] pl-2 py-2 
                rounded-lg hover:bg-[#131a31] hover:text-white text-start mt-4 text-black dark:text-white ml-8 font-medium'>                
                  <a href='/PRATEEK_SHARMA_.pdf' target="_blank" rel="noopener noreferrer" download>
                    DownLoad CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
