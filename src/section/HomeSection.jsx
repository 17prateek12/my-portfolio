import React from 'react';
import { IamPrateek } from '../component/IamPrateek';
import { ImageMine } from '@/component/ImageMine';
import { SocialLinks } from '@/component/SocialLinks';
import wheel from "../asset/illustration-cogwheel.png"
import Image from 'next/image';


const HomeSection = () => {
  return (
    <div className='max-w-full mx-auto bg-[#e8ecff] dark:bg-[#131a31] relative overflow-hidden'>
      <Image src={wheel} alt="..." className='max-w-[30rem] max-h-[30rem] absolute dark:opacity-50 top-10 -left-10 animate-spin-slow lg:hidden ' />
      <Image src={wheel} alt="..." className='max-w-[30rem] max-h-[30rem] -right-10 top-[-30%] lg:hidden absolute dark:opacity-50 animate-spin-slow justify-center' />
      <div className='w-full flex py-10 px-16 xl:px-8 items-center justify-around sm:px-4 navsm:items-center navsm:justify-center navsm:flex-col'>
        <div className='flex flex-col items-center justify-center gap-4 p-4'>
          <ImageMine />
          <IamPrateek />
          <SocialLinks />
        </div>
      </div>
      <div className='w-[30rem] h-[30rem] rounded-[50%] absolute -bottom-[30%] -right-[12%]  lg:hidden border-[3rem] border-white' />
    </div>
  )
}

export { HomeSection }