import React from 'react'
import { Typography } from '@mui/material';
import { SiGithub } from "react-icons/si";
import { CiLink } from "react-icons/ci";
import Link from 'next/link';

const Uiclone = () => {
    const showproject = [
        {
            title:"Nexcent Figma Design",
            link:"https://nexcent-figma-ui.vercel.app/",
            git:"https://github.com/17prateek12/nexcent-figma-ui",
        },
    ]

    return (
        <div className='flex flex-col gap-4 justify-start items-start my-12'>
            <p className='text-xl dark:text-white text-[#223354] font-semibold'>UI CLONE AND DESIGN</p>
        <div className='w-full flex flex-wrap items-baseline justify-between gap-8'>
            {showproject.map((item, index) => (
                <div key={index} className='w-[520px] rounded-2xl h-auto flex flex-col p-4 border dark:border-white border-black bg-[#ebeef1] dark:bg-[#2b2a4e]'>
                    <div className={`w-full flex justify-between items-center`}>
                        <Typography className='text-base font-medium sm:text-sm dark:text-white text-[#223354]'>
                            {item.title}
                        </Typography>
                        <div className='flex items-center gap-4'>
                            <Link href={item.link} target="_blank">
                                <CiLink className={`text-base dark:text-white text-[#223354] ${item.link ? '' : 'hidden'}`} />
                            </Link>
                            <Link href={item.git} target="_blank">
                                <SiGithub className='text-base sm:text-sm dark:text-white text-[#223354]' />
                            </Link>
                        </div>
                    </div>
                
                </div>
            ))}
        </div>
        </div>
    )
}

export { Uiclone }