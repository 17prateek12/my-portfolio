'use client';
import React, { useState } from 'react'
import { ProjectData } from './ProjectData';
import { Typography } from '@mui/material';
import { SiGithub } from "react-icons/si";
import { CiLink } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Link from 'next/link';

const ProjectList = () => {
    const [showproject, setShowproject] = useState([]);
    const handleToggle = (id) => {
        setShowproject(prev =>
            prev.includes(id) ? prev.filter(expId => expId !== id) : [...prev, id]);
    }
    return (
        <div className='w-full mt-6 flex flex-wrap items-baseline justify-between gap-8'>
            {ProjectData.map((item, index) => (
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
                            {showproject.includes(item.id) ? (
                                <button className='text-base sm:text-sm dark:text-white text-[#223354]'
                                    onClick={() => handleToggle(item.id)}>
                                    <FaMinus />
                                </button>
                            ) : (
                                <button className='text-base sm:text-sm dark:text-white text-[#223354]'
                                    onClick={() => handleToggle(item.id)}>
                                    <FaPlus />
                                </button>
                            )}
                        </div>
                    </div>
                    {showproject.includes(item.id) && (
                        <div className='mt-4'>
                            {item.point2.map((val, index) => (
                                <div className='flex flex-col mb-4 transform transition-transform ease-in-out duration-1000' key={index}>
                                    <Typography className='text-wrap text-[16px] sm:text-[14px] font-normal dark:text-white text-[#223354]'>
                                        {index + 1}{". "}{val}
                                    </Typography>
                                </div>
                            ))}
                            <Typography className='text-wrap text-[16px] sm:text-[14px] font-normal dark:text-white text-[#223354]'>
                                Tech Stack: {item.tech}</Typography>
                        </div>
                    )
                    }
                </div>
            ))}
        </div>
    )
}

export { ProjectList }