//ref https://www.youtube.com/watch?v=L7E3XEncsqI
'use client';
import { useState,useEffect } from 'react';
import {FaMoon} from 'react-icons/fa';
import {BSSunFill} from 'react-icons/fa';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if(theme === 'dark'){
            setDarkMode(true);
        }
    
    },[]);


    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');
        }
},[darkMode]);


    return(
        <div className='relative w-16 h-8 flex items-center 
        dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1' 
        onClick={()=> setDarkMode(!darkMode)}>
        <FaMoon className ="text-white " size={24}/>
        <div className='absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md
                        transform transition-transform duration-300'>

        </div>
            
        </div>
    )
}