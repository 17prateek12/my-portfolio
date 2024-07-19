import React from 'react'
import hero from "../asset/prateek.png";
import Image from 'next/image';
import { Avatar} from '@mui/material';
import wheel from "../asset/illustration-cogwheel.png"

const ImageMine = () => {

  return (
    <>
    <div className='flex justify-center items-center overflow-hidden'>
    <Avatar className='w-[15rem] h-[15rem] dark:bg-[#545454] bg-gray-200 rounded-[50%] mx-auto z-[5]'>
            <Image src={hero} alt="hero" className='w-full h-full object-contain' />
    </Avatar>
    <Image src={wheel} alt="..." className='max-w-[40rem] max-h-[40rem] absolute dark:opacity-50 animate-spin-slow z-0' />
    </div>
    </> 
  )
}

export {ImageMine}