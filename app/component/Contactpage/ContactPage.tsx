'use client';
import * as React from "react";
import Typography from '@mui/material/Typography';
import './ContactPage.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sendEmail } from "@/app/api/send/sendEmail";



export default function ContactPage(){
    
 
     return(
        <div className="contactfield">
            <form className="boxtwo"  
             action={async (formData) => {
                const { data, error } = await sendEmail(formData);
      
                if (error) {
                  alert(error);
                  return;
                }
      
                alert("Email sent successfully!");
              }}
        >
                <div className="field">
                    <Typography className="fontcontact" >E-MAIL</Typography>
                    <TextField placeholder="Type your Email id" className="textfields" name="senderemail" />
                </div>
                <div className="field">
                    <Typography className="fontcontact" >SUBJECT</Typography>
                    <TextField placeholder="Subject" className="textfields" name="subject"/>
                </div>
                <div className="field">
                    <Typography className="fontcontact" >MESSAGE</Typography>
                    <TextField placeholder="Write your message" multiline rows={4} className="textfields" name="message"/>
                </div>
                <Button className="submit" type="submit">SUBMIT</Button>
            </form>
            <Typography className="contactme">Or Contact me directly at <a href="mailto:17prateek12@gmail.com">17prateek12@gmail.com</a></Typography>
        </div>
     )
}