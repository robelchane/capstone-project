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
        <div>
            ThemeToggle
        </div>
    )
}