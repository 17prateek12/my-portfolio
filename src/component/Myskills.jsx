import React, { useState, useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { Heading } from './Heading';


const Myskills = () => {
    const { darkMode } = useContext(ThemeContext);
    const [allskill, setAllskill] = useState(false);
    const skills = [
        { logo: <SiCplusplus />, label: "C++" },
        { logo: <SiPython />, label: "Python" },
        { logo: <SiJavascript />, label: "JavaScript" },
        { logo: <SiTypescript />, label: "TypeScript" },
        { logo:<FaDatabase />, label:'SQL'},
        { logo: <SiReact />, label: "React.JS" },
        { logo: <RiNextjsFill />, label: "Next.JS" },
        { logo: <SiRedux />, label: "Redux" },
        { logo: <SiNodedotjs />, label: "Node.JS" },
        { logo: <SiExpress />, label: "Express.JS" },
        { logo: <SiDjango />, label: "Django" },
        { logo: <SiFlask />, label: "Flask" },
        { logo: <SiHtml5 />, label: "HTML" },
        { logo: <SiCss3 />, label: "CSS" },
        { logo: <SiTailwindcss />, label: "TailWind CSS" },
        { logo: <SiMongodb />, label: "MongoDB" },
        { logo: <SiMysql />, label: "MySQL" },
        { logo: <SiPandas />, label: "Pandas"},
        { logo: <SiNumpy />, label: "Numpy"},
        { logo: <SiTensorflow />, label: "TensorFlow" },
        { logo: <SiScikitlearn />, label: "Scikit learn" },
        { logo: <SiGit />, label: "Git" },
        { logo: <SiGithub />, label: "Github" },
        { logo: <SiPostman />, label: "Postman" },
    ];

    return (
        <div className=' w-full flex flex-col justify-center items-center'>
            <Heading heading={"Tech Stack I Used"} isMainSection={false}/>
            <div className='w-full flex flex-wrap justify-between gap-8 items-center pt-6'>
                {skills.slice(0,allskill ? skills.length : 6).map((item, index) => (
                    <div key={index} className={`w-[160px] h-[50px] text-[14px] rounded-xl md:w-[130px] md:px-2
                              flex justify-center items-center gap-4 md:gap-2 hover:scale-105 transition-all ease-in-out duration-500
                             ${darkMode ? 'text-white hover:border-2 hover:border-white' : 'text-black hover:border-2 hover:border-black'}`}>
                        <p className='text-xl'>{item.logo}</p>
                        {item.label}
                    </div>
                ))}
                {!allskill ?(
                    <div className={`w-[160px] h-[50px] text-[14px] rounded-xl md:w-[130px] md:px-2
                        flex justify-center items-center gap-4 md:gap-2 hover:scale-105 transition-all ease-in-out duration-500
                       ${darkMode ? 'text-white hover:border-2 hover:border-white' : 'text-black hover:border-2 hover:border-black'}`}
                       onClick={()=>setAllskill(true)}>
                       Show All
              </div>
                ):(
                    <div className={`w-[160px] h-[50px] text-[14px] rounded-xl md:w-[130px] md:px-2
                        flex justify-center items-center gap-4 md:gap-2 hover:scale-105 transition-all ease-in-out duration-500
                       ${darkMode ? 'text-white hover:border-2 hover:border-white' : 'text-black hover:border-2 hover:border-black'}`}
                       onClick={()=>setAllskill(false)}>
                       Hide
              </div>
                )}
            </div>
        </div>
    )
}

export {Myskills}