'use client';
import { FiSun, FiMoon } from "react-icons/fi"
import { useContext } from 'react'
import ThemeContext from "@/context/ThemeContext";

const DarkModeThemeIcon = () => {
    const { darkMode, setDarkMode}=useContext(ThemeContext);
  
    const toggleDarkMode = () =>{
      setDarkMode(!darkMode);
    };
  
    return (
      <button className={`rounded-lg flex justify-center items-center p-2 ${
        darkMode ? "bg-gray-600" : 'bg-white border-1 border-gray-100 shadow-md'
      }`}
      onClick={toggleDarkMode}
      >
          {darkMode ? (
            <FiMoon className='text-yellow-400 brightness-125' />
        ):(
        <FiSun className='text-orange-600' />
    )}
      </button>
    );
  };
  
  export {DarkModeThemeIcon}