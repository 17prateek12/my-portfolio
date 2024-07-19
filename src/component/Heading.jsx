import React from 'react';
import { Typography } from '@mui/material';


const Heading = ({ heading, isMainSection }) => {
    return (
        <div>
            {isMainSection ? (
                <Typography className='text-[45px] sm:text-[32px] text-center font-bold dark:text-white text-[#223354]'>
                    {heading}
                </Typography>
            ) : (
                <Typography className='text-[35px] sm:text-[24px] text-center font-medium dark:text-white text-[#223354]'>
                    {heading}
                </Typography>
            )}
        </div>

    )
}

export { Heading }