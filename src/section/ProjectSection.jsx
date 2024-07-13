'use client';
import { Heading } from '@/component/Heading'
import { ProjectList } from '@/component/ProjectList'
import React ,{useContext} from 'react';
import ThemeContext from '@/context/ThemeContext';

const ProjectSection = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`max-w-full mx-auto py-10  px-20 md:px-6 ${darkMode ? 'bg-[#272727]' : 'bg-white'}`}>
            <div className='max-w-[1200px] mx-auto flex flex-col items-center'>
                <Heading heading={"Project"} isMainSection={true} />
                <ProjectList />
            </div>
        </div>
    )
}

export { ProjectSection }