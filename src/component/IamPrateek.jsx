import React , {useContext} from 'react';
import { Typography } from '@mui/material';
import {useTypewriter} from './useTypewriter';
import ThemeContext from '@/context/ThemeContext';

const IamPrateek = () => {
  const { darkMode } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: ["PRATEEK SHARMA","FRONTEND DEVELOPER"],
    loop: true,
  });

  return (
    <div className='w-auto relative h-[140px] md:h-[60px]'>
      <Typography className={`text-[50px] font-bold md:text-2xl ${darkMode? 'text-white':'text-black'}`}>HELLO, I'M</Typography>
      <div className={`text-[45px] font-bold md:text-[22px] relative md:w-[280px] w-[620px] ${darkMode?'text-white':'text-black'}`}>
        {text}
      </div>
    </div>
  );
}

export { IamPrateek };
