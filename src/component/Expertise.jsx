import React, { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { Typography } from '@mui/material';
import { Heading } from './Heading';

const Expertise = () => {
    const { darkMode } = useContext(ThemeContext);
    const frontend = [
        { skill: 'REACT', rating: '80%' },
        { skill: 'NEXT', rating: '80%' },
        { skill: 'REDUX', rating: '60%' },
        { skill: 'TAILWIND CSS', rating: '90%' },
    ];
    const backend = [
        { skill: 'NODE', rating: '60%' },
        { skill: 'EXPRESS', rating: '60%' },
        { skill: 'DJANGO', rating: '70%' },
    ]
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <Heading heading={"My Expertise"} isMainSection={false}/>
            <div className='w-full'>
            <div className='flex flex-wrap gap-8 pt-8 navmd:flex-col justify-between items-start navmd:gap-8 navmd:items-center navmd:justify-center md:items-center md:justify-center'>
                <div className='flex flex-col justify-start items-start gap-4'>
                    <Typography className={`text-[18px] md:text-[14px] font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                        FRONTEND
                    </Typography>
                    {frontend.map((item, index) => (
                        <div className='flex justify-start items-start flex-col' key={index}>
                            <Typography className={`text-base md:text-[14px] ${darkMode ? 'text-white' : 'text-black'} `}>
                                {item.skill}
                            </Typography>
                            <div className='md:w-[280px] xl:w-[380px] w-[500px] h-4 rounded-2xl bg-neutral-300 overflow-hidden'>
                                <div style={{ width: item.rating }} className='h-full rounded-2xl bg-orange-400'>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col justify-start items-start gap-4'>
                    <Typography className={`text-[18px] md:text-[14px] font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
                        BACKEND
                    </Typography>
                    {backend.map((item, index) => (
                        <div className='flex justify-start items-start flex-col' key={index}>
                            <Typography className={`text-base md:text-[14px] ${darkMode ? 'text-white' : 'text-black'} `}>
                                {item.skill}
                            </Typography>
                            <div className='md:w-[280px] xl:w-[380px] w-[500px] h-4 rounded-2xl bg-neutral-300 overflow-hidden'>
                                <div style={{ width: item.rating }} className='h-full rounded-2xl bg-orange-400'>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export { Expertise }