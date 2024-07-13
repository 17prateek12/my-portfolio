'use client';
import React ,{useContext} from 'react';
import ThemeContext from '@/context/ThemeContext';
import { AboutMe } from '@/component/AboutMe';
import { Myskills } from '@/component/Myskills';
import { Expertise } from '@/component/Expertise';


const SkillSection = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`max-w-full mx-auto py-10 ${darkMode ? 'bg-[#272727]' : 'bg-white'}`}>
            <div className='flex justify-center flex-col items-center px-20 md:px-6'>
                <AboutMe />
                <div className='max-w-[1200px] gap-12 mx-auto flex flex-col navmd:flex-col-reverse'>
                    <Myskills />
                    <Expertise />
                </div>
            </div>
        </div>
    )
}

export { SkillSection }