'use client';
import * as React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AcheviementData from "./AcheviementData";
import "./Acheviement.css";

const Acheviement=()=>{
    const [acheive, setAcheive]=useState(AcheviementData);
    return (
        <div>
            {
                acheive.map((item)=>{
                    return(
                        <div key={item.id}>
                            <div className="achee">
                            <FiberManualRecordIcon sx={{fontSize:10}} />
                            <Typography className="award">{item.point1}</Typography>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Acheviement;