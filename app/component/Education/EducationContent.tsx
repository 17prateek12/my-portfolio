'use client';
import * as React from "react";
import { useState } from "react";
import "./EducationContent.css";
import EducationData from "./EducationData";
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const EducationContent = () =>{
    const [edu, setEdu]=useState(EducationData);
    return(
        <div>
            {
                edu.map((item)=>{
                    return(
                        <div key={item.id} className="mainpart">
                            <div className="body">
                                <Typography className="font3"><FiberManualRecordIcon sx={{fontSize:10}}/>{item.organization}</Typography>
                                <Typography className="font3">{item.location}</Typography>
                            </div>
                            <div className="bodytwo">
                                <Typography className="font4">{item.course}</Typography>
                                <Typography className="font4">{item.date}</Typography>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EducationContent;