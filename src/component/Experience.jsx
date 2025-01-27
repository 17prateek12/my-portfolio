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
            designation:'Full-Stack Developer',
            date:'April 2024 - December 2024',
            orgainization:'BHARATTECH TECH ECO-SYSTEM PVT LTD ',
            location:'Remote, India',
            point:[
                 'Enhanced responsiveness, upgraded and designed new modules using React, Material UI, Redux, and JavaScript. and implemented Rest Apis in Django REST to include features such as search capabilities and data filtering across several pages.',
                 'Designed one SaaS product using Next.js 14, TypeScript, and Tailwind CSS, led the team to facilitate the incorporation of new features and functionalities, and constructed a constructed an express server that auto-updates data in the MongoDB database once a day.',
                 'Optimized the website through conditional rendering, lazy loading, and image optimization to improve the Lighthouse score up to 60% and the SEO score up to 90%.',
                 'Revamped four new portals with React and Material UI and collaborated with the backend team to develop the Django API to have features for the microservice and integrated real-time messaging using web sockets, authentication for enhancing security using JWT, and done API integration for seamless flow of data between the backend and frontend.'
            ]
        },
        {
            id:2,
            designation:'Contributor',
            date:'June 2023 - Feb 2024',
            orgainization:'IEEE',
            location:'Remote, India',
            point:[
                'Conducted an in-depth analysis of different algorithms, research papers, and blogs and conducted an in-depth comparative analysis of the two algorithms, transform and convolutional neural networks (CNNs), for autonomous vehicle navigation.',
                'Engineered an autonomous prototype vehicle using Raspberry Pi and a camera to detect the lane itself, take turns accordingly, and do a comparison between approaches by achieving CNN accuracy of approximately 77%.',
                'Applied Python, OpenCV, Linux, image processing techniques, and TensorFlow to develop and test algorithms, collaborating with peers and mentors to ensure robust outcomes, and authored a research paper in the 9th ICSC.'
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
                    <div className='w-[250px] sm:w-full text-[18px] sm:text-[14px] text-center font-medium dark:text-white text-[#223354]'>
                        {item.orgainization}
                    </div>
                    <div className='w-[237px] navsm:w-full sm:w-full text-[18px] sm:text-[14px] font-medium 
                        flex justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-2 dark:text-white text-[#223354]'>
                        {item.date}
                      {/*  <div className='sm:w-full sm:justify-center sm:items-center sm:flex'>
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
                    </div> */}
                    </div>
                </div>
                {/*showexp.includes(item.id) && (
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
                */}   
            </div>    
        ))}
        </div>
    </div>
  )
}

export default Experience
