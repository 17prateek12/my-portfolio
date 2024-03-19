'use client';
import {useState} from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./Experience.css";
import ResumeData from './ResumeData';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Experince=()=>{
    const [work, setWork]=useState(ResumeData);
    return(
        <div>
            {
                work.map((item)=>{
                    return(
                    <div key={item.id}>
                        <div className='head'>
                        <Typography className='font'>{item.designation}</Typography>
                        <Typography className='font'>{item.date}</Typography>
                    </div>
                    <div className='head'>
                        <Typography className='font'>{item.orgainization}</Typography>
                        <Typography className='font'>{item.location}</Typography>
                    </div>
                    <div className='bodytext'>
                        {item.point.map((point,index) => (
                            <div className='text1'>
                            <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                            <Typography key={index} className='fontbody'> {point}</Typography>
                            </div>
                        ))}
                    </div>
                    </div>
                )})
            }
        </div>
    )

}
export default Experince;