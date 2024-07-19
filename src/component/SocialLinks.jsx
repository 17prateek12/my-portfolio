import React from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className='w-[150px] flex items-center justify-between mx-auto'>
            <Link href="https://github.com/17prateek12" target="_blank" className='text-black text-2xl no-underline'><FaGithub className=' dark:text-white  text-[#223354] text-2xl hover:scale-125 transition-all ease-in-out duration-500' /></Link>
            <Link href="https://www.linkedin.com/in/prateek-sharma1712/" target="_blank" className='text-black text-2xl no-underline'><FaLinkedin className=' dark:text-white  text-[#223354] text-2xl hover:scale-125 transition-all ease-in-out duration-500' /></Link>
            <Link href="https://x.com/walkclick" target="_blank" className='text-black text-2xl no-underline'><FaTwitter className=' dark:text-white  text-[#223354] text-2xl hover:scale-125 transition-all ease-in-out duration-500' /></Link>
        </div>
    )
}

export {SocialLinks}