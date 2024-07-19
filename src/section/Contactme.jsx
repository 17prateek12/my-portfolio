import React from 'react';
import { EmailComp } from '@/component/EmailComp';
import { Heading } from '@/component/Heading';
import { SocialLinks } from '@/component/SocialLinks';
import { Typography } from '@mui/material';

const Contactme = () => {
    return (
        <div className='max-w-full mx-auto py-10  px-20 sm:px-6 bg-white dark:bg-[#192343]'>
            <div className='max-w-[1240px] mx-auto flex flex-col items-center'>
                <Heading heading={"Contact Me"} isMainSection={true} />
                <div className='flex flex-wrap w-full justify-between items-baseline gap-8 my-8'>
                    <div className='flex flex-col gap-12 sm:gap-8 justify-start items-start w-[500px]'>
                        <div className='flex flex-col gap-4'>
                            <Typography className='text-2xl sm:text-xl font-semibold dark:text-white text-[#223354]'>
                                Connect With Me
                            </Typography>
                            <Typography className='text-base sm:text-[14px] font-normal dark:text-white text-[#223354]'>
                                If you want to know more about me or my work, or if you would just
                                like to say hello, send me a message. I&apos;d love to hear from you.
                            </Typography>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography className='text-2xl sm:text-xl font-normal dark:text-white text-[#223354]'>
                                Socials
                            </Typography>
                            <SocialLinks />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography className='text-xl sm:text-[14px] font-normal dark:text-white text-[#223354]'>
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