import React,{useState, useContext} from 'react'
import ThemeContext from '@/context/ThemeContext';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Typography } from '@mui/material';
import { Heading } from './Heading';

const Experience = () => {
    const [showexp, setShowexp]= useState([]);
    const { darkMode } = useContext(ThemeContext);
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
    <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center'>
        <Heading heading={"Work Experience"} isMainSection={true} />
        <div className='w-full'>
        {ResumeData.map((item,index)=>(
            <div key={index} className='flex-col flex mt-8'>
                <div className='flex flex-wrap md:flex-col md:items-start gap-4 items-baseline justify-between'>
                    <div className={`w-auto md:w-full text-[18px] md:text-[14px] font-medium ${darkMode?'text-white':'text-black'}`}>
                        {item.designation}
                    </div>
                    <div className={`w-[250px] md:w-full text-[18px] md:text-[14px] font-medium ${darkMode?'text-white':'text-black'}`}>
                        {item.orgainization}
                    </div>
                    <div className={`w-[237px] navmd:w-full md:w-full text-[18px] md:text-[14px] font-medium 
                        flex justify-between items-center md:flex-col md:justify-start md:items-start md:gap-2 ${darkMode?'text-white':'text-black'}`}>
                        {item.date}
                        <div className='md:w-full md:justify-center md:items-center md:flex'>
                        {showexp.includes(item.id) ? (
                            <button className={`text-[18px] font-medium ${darkMode?'text-white':'text-black'}`}
                            onClick={() => handleToggle(item.id)}>
                                <FaMinus />
                            </button>
                        ):(
                            <button className={`text-[18px] font-medium ${darkMode?'text-white':'text-black'}`}
                            onClick={() => handleToggle(item.id)}>
                                <FaPlus />
                            </button>
                        )}
                    </div>
                    </div>
                </div>
                {showexp.includes(item.id) && (
                    <div className='my-8'>
                    {item.point.map((val,index)=>(
                        <div className='flex flex-col mb-4 transform transition-transform ease-in-out duration-1000' key={index}>
                        <Typography className={`text-wrap text-[16px] md:text-[14px] font-normal
                            ${darkMode? 'text-white':'text-black'}`}>
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