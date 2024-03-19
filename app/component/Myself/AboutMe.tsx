'use client';
import { useState } from "react";
import * as React from "react";
import "./AboutMe.css";
import AboutMeData from "./AboutMeData";
import Typography from '@mui/material/Typography';

const AboutMe = () => {
    const [data, setData] = useState(AboutMeData);
    return (
        <div className="box2">
            <Typography className="about">About My-self</Typography>
            {
                data.map((item) => {
                    return (
                        <div key={item.id}>
                            <Typography className="font2">{item.title}</Typography>
                            <Typography className="font2">{item.myself}</Typography>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default AboutMe