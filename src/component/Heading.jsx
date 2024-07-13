import React, { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';
import { Typography } from '@mui/material';


const Heading = ({ heading, isMainSection }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div>
            {isMainSection ? (
                <Typography className={`text-[45px] navmd:text-[32px] text-center md:text-[20px] font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    {heading}
                </Typography>
            ) : (
                <Typography className={`text-[35px] navmd:text-[26px] text-center md:text-[16px] font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
                    {heading}
                </Typography>
            )}
        </div>

    )
}

export { Heading }