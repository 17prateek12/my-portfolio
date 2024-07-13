'use client';
import React, { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { EmailComp } from '@/component/EmailComp';
import { Heading } from '@/component/Heading';
import { SocialLinks } from '@/component/SocialLinks';
import { Typography } from '@mui/material';

const Contactme = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`max-w-full mx-auto py-10  px-20 md:px-6 ${darkMode ? 'bg-[#272727]' : 'bg-white'}`}>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
                <Heading heading={"Contact Me"} isMainSection={true} />
                <div className='flex flex-wrap w-full justify-between items-baseline gap-8 my-8'>
                    <div className='flex flex-col gap-12 md:gap-8 justify-start items-start w-[500px]'>
                        <div className='flex flex-col gap-4'>
                            <Typography className={`text-2xl md:text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                                Connect With Me
                            </Typography>
                            <Typography className={`text-base md:text-[14px] font-normal ${darkMode ? 'text-white' : 'text-black'}`}
                            >If you want to know more about me or my work, or if you would just
                                like to say hello, send me a message. I'd love to hear from you.
                            </Typography>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography className={`text-2xl md:text-xl font-normal ${darkMode ? 'text-white' : 'text-black'}`}>
                                Socials
                            </Typography>
                            <SocialLinks />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography className={`text-xl md:text-[14px] font-normal ${darkMode ? 'text-white' : 'text-black'}`}>
                                Call me at +91-8287674188
                            </Typography>
                        </div>
                    </div>
                    <EmailComp />
                </div>
            </div>
        </div>
    )
}

export default Contactme