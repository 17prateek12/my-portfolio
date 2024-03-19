import * as React from 'react';
import Typography from '@mui/material/Typography';
import "./Home.css"
import AboutMe from "../component/Myself/AboutMe"

export default function HomePage() {

    return (
        <div className='back'>
            <Typography className='fonthello'>Hello</Typography>
            <Typography className='fonthello'>I m'</Typography>
            <Typography className='fonthello'>Prateek Sharma</Typography>
            <AboutMe />
            <div className='cardholder'>
                <div className='card'>WEB DEVELOPMENT</div>
                <div className='card'>AI/ML</div>
                <div className='card'>WEB3.0</div>
                <div className='card'>DSA</div>
            </div>
        </div>
    )
}