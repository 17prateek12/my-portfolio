import React ,{useContext} from 'react';
import Link from 'next/link';
import ThemeContext from '@/context/ThemeContext';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className='w-[150px] flex items-center justify-between mx-auto'>
            <Link href="https://github.com/17prateek12" target="_blank" className='text-black text-2xl no-underline'><FaGithub className={`${darkMode ? 'text-white' : 'text-black'} text-2xl hover:scale-125 transition-all ease-in-out duration-500`} /></Link>
            <Link href="https://www.linkedin.com/in/prateek-sharma1712/" target="_blank" className='text-black text-2xl no-underline'><FaLinkedin className={`${darkMode ? 'text-white' : 'text-black'} text-2xl hover:scale-125 transition-all ease-in-out duration-500`} /></Link>
            <Link href="https://x.com/walkclick" target="_blank" className='text-black text-2xl no-underline'><FaTwitter className={`${darkMode ? 'text-white' : 'text-black'} text-2xl hover:scale-125 transition-all ease-in-out duration-500`} /></Link>
        </div>
    )
}

export {SocialLinks}