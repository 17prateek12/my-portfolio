import React from 'react';
import { Typography } from '@mui/material';
import { Heading } from './Heading';

const Expertise = () => {
    const expertise = [
        {
            domain: 'FRONTEND',
            tech: [
                { skill: 'REACT', rating: '80%' },
                { skill: 'NEXT', rating: '80%' },
                { skill: 'REDUX', rating: '60%' },
                { skill: 'TAILWIND CSS', rating: '90%' }],
        },
        {
            domain: 'BACKEND',
            tech: [
                { skill: 'NODE', rating: '60%' },
                { skill: 'EXPRESS', rating: '60%' },
                { skill: 'DJANGO', rating: '70%' },
            ]
        }
    ];

    return (
        <div className='w-full px-5 py-4 flex flex-col justify-center items-center bg-[#ebeef1] dark:bg-[#2b2a4e]'>
            <Heading heading={"My Expertise"} isMainSection={false} />
            <div className='w-full'>
                <div className='flex flex-wrap gap-8 pt-8 navsm:flex-col justify-between items-start navsm:gap-8 navsm:items-center navsm:justify-center sm:items-center sm:justify-center'>

                    {expertise.map((item, index) => (
                        <div className='flex w-[45%] navsm:w-full flex-col justify-start items-start gap-4' key={index}>

                            <Typography className='text-[18px] sm:text-[14px] font-semibold dark:text-white text-[#223354]'>
                                {item.domain}
                            </Typography>
                            <div className='w-full'>
                                {item.tech.map((val, idx) => (
                                    <div className='flex justify-start items-start flex-col' key={idx}>
                                        <Typography className='text-base sm:text-[14px] dark:text-white text-[#223354]'>
                                            {val.skill}
                                        </Typography>

                                        <div className='w-full h-4 rounded-2xl bg-neutral-300 overflow-hidden'>
                                            <div style={{ width: val.rating }} className='h-full rounded-2xl bg-orange-400'>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { Expertise }