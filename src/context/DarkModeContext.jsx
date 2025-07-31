
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";


const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    const stored = localStorage.getItem("darkMode");

    if (stored === "true") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("darkMode", isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);


  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};


export const useDarkMode = () => useContext(DarkModeContext);
