'use client';
import {useState} from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./ProjectPage.css";
import ProjectData from './ProjectData';

export default function ProjectPage(){
    const [pro, setPro]=useState(ProjectData);

    return(
        <div className='maincontent'>
            {
                pro.map((item)=>{
                    return(
                        <div key={item.id}>
                            <div className='link'>
                                <Typography className='heading'>{item.title}</Typography>
                                <Typography>{item.git}</Typography>
                            </div>
                            <Typography className='stack'>{item.tech}</Typography>
                            <div>
                            {item.point2.map((index) => (
                            <div className='explain'>
                            <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                            <Typography className='font5'> {index}</Typography>
                            </div>
                        ))}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}