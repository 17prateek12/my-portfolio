'use client';
import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Typography } from '@mui/material';
import { Heading } from './Heading';

const Experience = () => {
    const [showexp, setShowexp]= useState([]);
    const ResumeData=[
        {
            id:1,
            designation:'Frontend Lead',
            date:'April 2024 - September 2024',
            orgainization:'BHARATTECH TECH ECO-SYSTEM PVT LTD ',
            location:'Remote, India',
            point:[
                 'Led team of interns in development of  scalable web applications and dashboards, improved UI load time by 50%, used Git for version control, merged branches, and managed codebase',
                 'Supervised front-end development which uses React, Next.js, TypeScript, and Redux, implemented best practices and increased Lighthouse performance scores by 25%.',
                 'Collaborated with backend team to build and integrate RESTful APIs, ensuring seamless data flow between frontend and backend system',
                 'Designed 4 dashboards from scratch which showed improvement in responsiveness and 35% increase in SEO performance, leading to higher user engagement and satisfaction.'
            ]
        },
        {
            id:2,
            designation:'Frontend Developer',
            date:'September 2024 - Present',
            orgainization:'BHARATTECH TECH ECO-SYSTEM PVT LTD ',
            location:'Remote, India',
            point:[
                 'Design and develop SaaS product, web applications, adding new features, components and modernizing the UI using TypeScript, React, Redux, Next14 and Tailwind CSS.',
                 'Improved SEO up to 90%, user interface load times and performance by 50%, and implemented best front-end practices improving best practice score up to 76 percent.',
            ]
        },
        {
            id:3,
            designation:'Machine Learning Intern',
            date:'June 2022 - July 2022',
            orgainization:'Jaypee Institute of Information Technology',
            location:'Noida, India',
            point:[
                 'Engineered and deployed a custom false news detection system with four distinct combination models on a Flask-based web page; optimized model performance resulted in a reduction in false news dissemination.',
                 'Achieved an accuracy rate of up to 89.91% by developing and deploying complex predictive models, analyzing data trends, and creating visually compelling dashboards to drive strategic decision-making.'
            ]
        }
    ];

    const handleToggle = (id) => {
        setShowexp(prev =>
            prev.includes(id) ? prev.filter(expId => expId !== id) : [...prev, id]);
    };

  return (
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center items-center'>
        <Heading heading={"Work Experience"} isMainSection={true} />
        <div className='w-full'>
        {ResumeData.map((item,index)=>(
            <div key={index} className='flex-col flex mt-8 px-6 bg-[#ebeef1] dark:bg-[#2b2a4e] py-4'>
                <div className='flex flex-wrap sm:flex-col sm:items-start gap-4 items-baseline justify-between'>
                    <div className='w-auto sm:w-full text-[18px] sm:text-[14px] font-medium dark:text-white text-[#223354]'>
                        {item.designation}
                    </div>
                    <div className='w-[250px] sm:w-full text-[18px] sm:text-[14px] font-medium dark:text-white text-[#223354]'>
                        {item.orgainization}
                    </div>
                    <div className='w-[237px] navsm:w-full sm:w-full text-[18px] sm:text-[14px] font-medium 
                        flex justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-2 dark:text-white text-[#223354]'>
                        {item.date}
                        <div className='sm:w-full sm:justify-center sm:items-center sm:flex'>
                        {showexp.includes(item.id) ? (
                            <button className='text-[18px] font-medium dark:text-white text-[#223354]'
                            onClick={() => handleToggle(item.id)}>
                                <FaMinus />
                            </button>
                        ):(
                            <button className='text-[18px] font-medium dark:text-white text-[#223354]'
                            onClick={() => handleToggle(item.id)}>
                                <FaPlus />
                            </button>
                        )}
                    </div>
                    </div>
                </div>
                {showexp.includes(item.id) && (
                    <div className='mt-8'>
                    {item.point.map((val,index)=>(
                        <div className='flex flex-col mb-4 transform transition-transform ease-in-out duration-1000' key={index}>
                        <Typography className='text-wrap text-[16px] sm:text-[14px] font-normal dark:text-white text-[#223354]'>
                                {index+1}{". "}{val}
                            </Typography>
                    </div>  
                    ))}  
                    </div> 
                )
                }   
            </div>    
        ))}
        </div>
    </div>
  )
}

export default Experience
