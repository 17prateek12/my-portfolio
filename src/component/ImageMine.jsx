import React, {useContext} from 'react'
import ThemeContext from '@/context/ThemeContext'
import hero from "../asset/prateek.png";
import Image from 'next/image';
import { Avatar} from '@mui/material';

const ImageMine = () => {
    const { darkMode } = useContext(ThemeContext);

  return (
    <Avatar className={`w-[15rem] h-[15rem] ${darkMode ? 'bg-[#545454]' : 'bg-gray-300'} rounded-[50%] mx-auto`}>
            <Image src={hero} alt="hero" className='w-full h-full object-contain' />
    </Avatar>
  )
}

export {ImageMine}