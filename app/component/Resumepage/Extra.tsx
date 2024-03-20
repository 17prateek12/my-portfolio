'use client';
import {useState} from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./Experience.css";
import ExtraCirr from './ExtraCirrcular';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const ExtraCurricular=()=>{
    const [extra, setExtra]=useState(ExtraCirr);
    return(
        <div>
            {
                extra.map((item)=>{
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
                        {item.point.map((index,idx) => (
                            <div key={idx} className='text1'>
                            <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                            <Typography className='fontbody'> {index}</Typography>
                            </div>
                        ))}
                    </div>
                    </div>
                )})
            }
        </div>
    )

}
export default ExtraCurricular;