'use client';
import React  from 'react';
import { Typography } from '@mui/material';
import {useTypewriter} from './useTypewriter';

const IamPrateek = () => {
  const [text] = useTypewriter({
    words: ["PRATEEK SHARMA","FULLSTACK DEVELOPER"],
    loop: true,
  });

  return (
    <div className='w-auto relative h-[140px] sm:h-[60px] pl-4'>
      <Typography className='text-[50px] font-bold  sm:text-2xl dark:text-white text-[#223354]'>HELLO, I&apos;M</Typography>
      <div className='text-[45px] font-bold sm:text-[18px] relative sm:w-[280px] w-[620px] dark:text-white text-[#223354]'>
        {text}
      </div>
    </div>
  );
}

export { IamPrateek };
