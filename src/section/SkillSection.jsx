import React  from 'react';
import { AboutMe } from '@/component/AboutMe';
import { Myskills } from '@/component/Myskills';
import { Expertise } from '@/component/Expertise';


const SkillSection = () => {
    return (
        <div className='max-w-full mx-auto py-10 bg-white dark:bg-[#192343]'>
            <div className='flex justify-center flex-col items-center px-20 sm:px-6'>
                <AboutMe />
                <div className='max-w-[1240px] gap-12 mx-auto flex flex-col navsm:flex-col-reverse'>
                    <Myskills />
                   <Expertise />
                </div>
            </div>
        </div>
    )
}

export { SkillSection }