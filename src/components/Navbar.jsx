import { Link, useLocation } from "react-router-dom";

import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, translations } = useLanguage();
  const { isDark, toggleDarkMode } = useDarkMode();

  const { darkMode, lightMode, toHome, toContact } = translations.navBar;

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-[#faf6ed] dark:bg-[#003049]">
      <div className="relative z-5 w-[75vw] mx-auto flex justify-end items-center gap-5 px-5 py-5  text-[#1A1A1A] dark:text-white">
        <button onClick={toggleDarkMode} className="flex items-center gap-2">
          <div className="w-10 h-5 bg-[#669BBC] dark:bg-[#6a8b9b] rounded-full flex items-center px-1 cursor-pointer">
            <div
              className={`block w-3 h-3 bg-yellow-300 dark:bg-gray-600 rounded-full transition-transform duration-300
      ${isDark ? "translate-x-5" : "translate-x-0"}
    `}
            />
          </div>
          <span className="text-sm font-semibold cursor-pointer">
            {isDark ? lightMode : darkMode}
          </span>
        </button>

        <div className="text-sm font-semibold flex items-center gap-1 ">
          <button
            onClick={toggleLanguage}
            className={`cursor-pointer
              ${language === "tr" ? "text-[#669BBC] dark:text-[#8ECAE6]" : ""}`}
          >
            TR
          </button>
          <span>/</span>
          <button
            onClick={toggleLanguage}
            className={`cursor-pointer
              ${language === "en" ? "text-[#669BBC] dark:text-[#8ECAE6]" : ""}`}
          >
            EN
          </button>
        </div>
        <Link
          to={currentPath === "/" ? "/contact" : "/"}
          className="font-bold text-[#669BBC] dark:text-[#8ECAE6]"
        >
          {currentPath === "/" ? toContact :  toHome}
        </Link>
      </div>
    </nav>
  );
}
