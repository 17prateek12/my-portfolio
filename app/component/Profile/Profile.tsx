import './Profile.css';
import ProfileImage from './ProfileImage';
import Typography from '@mui/material/Typography';
import * as React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProfileCard(){
    return (
        
        <div className='nav'>
            <div>
                <ProfileImage />
                <Typography className='name'>Prateek Sharma</Typography>
            </div>
            <div className='contacts'>
                <Typography className='contactdetail'>+91-8287674188</Typography>
                <Typography className='contactdetail'><a href="mailto:17prateek12@gmail.com" style={{textDecoration:'none', color:'rgb(30, 29, 29)'}}>17prateek12@gmail.com</a></Typography>
            </div>
            <div className='link'>
           <a href="https://www.linkedin.com/in/prateek-sharma1712/" target="_blank" style={{color:'black'}}><LinkedInIcon sx={{fontSize:25}}/></a>
           <a href="https://github.com/17prateek12" target="_blank" style={{color:'black'}}><GitHubIcon sx={{fontSize:25}}/></a>
           <a href='https://leetcode.com/17prateek12/' target="_blank"><img src="leetcode.png" alt="..." style={{height:25, width:25, mixBlendMode:'darken'}}/></a>
           <a href='https://www.codingninjas.com/studio/profile/17prateek12' target="_blank"><img src="coding.png" alt="..." style={{height:25, width:100, mixBlendMode:'darken'}}/></a>
           </div>
           <Typography style={{fontSize:14,fontWeight:'bold', marginTop:20}}><a href='https://drive.google.com/file/d/1U7U1PzOnFSlfOVM-D-Cxno7nfhO3nE1V/view?usp=drive_link' target="_blank" style={{textDecoration:'none', color:'black'}}>RESUME</a></Typography>
        </div>
      
    )
};