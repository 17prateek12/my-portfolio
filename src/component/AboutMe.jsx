import React from 'react';
import { Typography } from '@mui/material';
import { Heading } from './Heading';


const AboutMe = () => {
    return (
        <div className='flex max-w-[1240px] px-5 mb-12 mx-auto h-auto py-4 justify-center items-center sm:flex-col gap-8 bg-[#ebeef1] dark:bg-[#2b2a4e]'>
            <Heading heading={"About Me"} isMainSection={true} />
            <Typography className='text-xl font-normal tracking-wide text-justify sm:text-[14px] dark:text-white text-[#223354]'>
                My name is Prateek Sharma, and an enthuastic software developer.
                I have a background in electronics, but web programming is
                where my real interest lies. I enjoy creating programs that are aesthetically
                pleasing, intuitive to use, and functional. I graduated in June 2023 with a B.Tech
                in Electronics and Communication from the Jaypee Institute of Information Technology
                in Noida. I&apos;m an intern frontend developer at BharatTech Tech Eco-System Pvt. Ltd.
                right now.
            </Typography>
        </div>
    )
}

export {AboutMe}