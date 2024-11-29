import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center mt-4 border border-white 
                  dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1
                  transition-colors duration-300 ease-in-out"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={21} />
      
      <div
        className={`absolute bg-white dark:bg-medium w-6 h-6 border border-white rounded-full shadow-md
                    transform transition-transform duration-300 ease-in-out`}
        style={{ transform: darkMode ? "translateX(32px)" : "translateX(0)" }}
      ></div>
      
      <FaSun className="text-yellow-300 ml-auto" size={21} />
    </div>
  );
}
