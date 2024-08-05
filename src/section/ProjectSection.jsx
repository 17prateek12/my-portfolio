import { Heading } from '@/component/Heading'
import { ProjectList } from '@/component/ProjectList'
import { Uiclone } from '@/component/Uiclone';
import React from 'react';

const ProjectSection = () => {
    return (
        <div className='max-w-full mx-auto py-10  px-20 sm:px-6 bg-white dark:bg-[#192343]'>
            <div className='max-w-[1240px] mx-auto flex flex-col'>
                <Heading heading={"Project"} isMainSection={true} />
                <ProjectList />
                <Uiclone />
            </div>
        </div>
    )
}

export { ProjectSection }