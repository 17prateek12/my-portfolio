'use client';
import React, { useContext } from 'react';
import { IamPrateek } from '../component/IamPrateek';
import ThemeContext from '@/context/ThemeContext';
import { ImageMine } from '@/component/ImageMine';
import { SocialLinks } from '@/component/SocialLinks';


const HomeSection = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`max-w-full mx-auto ${darkMode ? 'bg-[#272727]' : 'bg-white'}`}>
      <div className='w-full flex py-10 px-16 xl:px-8 items-center justify-around md:px-4 
        navmd:items-center navmd:justify-center navmd:flex-col'>
        <div className='flex flex-col items-start justify-center gap-4 p-4'>
          <ImageMine />
          <IamPrateek />
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export { HomeSection }