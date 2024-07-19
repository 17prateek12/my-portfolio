'use client';
import React from "react";
import { sendEmail } from "../app/api/send/SendEmail";
import { Typography } from "@mui/material";

const EmailComp =() => {
  return (
    <div className='flex flex-col mb-4 p-8 sm:p-4 w-[500px] sm:w-full rounded-lg dark:border dark:border-white bg-[#ebeef1] dark:bg-[#2b2a4e]'>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            alert(error);
            return;
          }

          alert("Email sent successfully!");
        }}
      >
        <div className="mb-4">
          <label className='block font-semibold mb-2 dark:text-white text-[#223354]'>E-MAIL</label>
          <input
            type="email"
            placeholder="Type your Email id"
            name="senderemail"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className='block font-semibold mb-2 dark:text-white text-[#223354]'>SUBJECT</label>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className='block font-semibold mb-2 dark:text-white text-[#223354]'>MESSAGE</label>
          <textarea
            placeholder="Write your message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className='w-full py-2 font-semibold rounded-md transition-transform transform hover:scale-105
            dark:bg-white dark:text-gray-700 hover:dark:bg-neutral-400 bg-black text-white hover:bg-gray-700'>
          SUBMIT
        </button>
      </form>
      <Typography className='text-wrap text-center mt-4 text-[16px] sm:text-[14px] font-normal dark:text-white text-[#223354]'>
       <a href="mailto:17prateek12@gmail.com">Send me Email directly</a>
    </Typography>  
    </div>
  );
}

export {EmailComp}