"use server";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY); 

const validateString =(value:unknown)=>{
    if(!value || typeof value!=="string"){
        return false;
    }
    return true;
}

const getErrorMessage =(error:unknown): string =>{
    let message: string;
    if(error instanceof Error){
        message=error.message;
    }else if(error && typeof error==="object" && "message" in error){
        message=String(error.message);
    }else if(typeof error ==="string"){
        message=error;
    }else{
        message="Something went wrong";
    }
    return message;
};

export const sendEmail= async (formData:FormData)=>{
    const senderemail= formData.get("senderemail");
    const subject= formData.get("subject");
    const message = formData.get("message");
 
    console.log(senderemail)
    if(!validateString(senderemail)){
        return {
            error:'Invalid email address'
        }
    }
    if(!validateString(message))
    {
        return {
            error:"Invalid message"
        }
    }

    if(!validateString(subject)){
        return{
            error:"Invalid subject"
        }
    }

    let data;

    try{
        data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to:'17prateek12@gmail.com',
            reply_to:senderemail as string,
            subject:subject as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderemail: senderemail as string,
              }),
        });

    }catch(error: unknown){
        return {
            error:getErrorMessage(error),
        }
    };
    return {
        data,
      };
};




  
   

