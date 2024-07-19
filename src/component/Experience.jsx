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
            designation:'Frontend developer Intern',
            date:'April 2024 - Present',
            orgainization:'BHARATTECH TECH ECO-SYSTEM PVT LTD ',
            location:'Remote, India',
            point:[
                 'Design and develop SaaS product, web applications, incorporating new features, components and modernizing the UI using React, Redux, Next and Tailwind CSS.',
                 'Collaborated and managed the team of 4+ intern to ensure seamless integration of new features, responsiveness of website and enhancements.',
                 'Improved SEO by 90%, user interface load times and performance by 82%, and implemented best front-end practices including conditional rendering and reusable components.',
                 'Integrated RESTful APIs to enhance application functionality and streamline data flow between the front-end and back-end services.',
                 'Utilized Git for version control, collaborating with team members on feature branches, and managing codebase integrity.',
            ]
        },
        {
            id:2,
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