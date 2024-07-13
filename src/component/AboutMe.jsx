import React, {useContext} from 'react';
import ThemeContext from '@/context/ThemeContext';
import { Typography } from '@mui/material';
import { Heading } from './Heading';


const AboutMe = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className='flex max-w-[1200px] mb-12 mx-auto h-auto justify-center items-center md:flex-col gap-8'>
            <Heading heading={"About Me"} isMainSection={true} />
            <Typography className={`text-xl font-normal tracking-wide text-justify md:text-[14px] ${darkMode ? 'text-white' : 'text-black'}`}>
                My name is Prateek Sharma, and an enthuastic software developer.
                I have a background in electronics, but web programming is
                where my real interest lies. I enjoy creating programs that are aesthetically
                pleasing, intuitive to use, and functional. I graduated in June 2023 with a B.Tech
                in Electronics and Communication from the Jaypee Institute of Information Technology
                in Noida. I'm an intern frontend developer at BharatTech Tech Eco-System Pvt. Ltd.
                right now.
            </Typography>
        </div>
    )
}

export {AboutMe}