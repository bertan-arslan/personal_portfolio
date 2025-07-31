
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";
import en from "../data/locales/en.json";
import tr from "../data/locales/tr.json";


const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(en);

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang === "tr") {
      setLanguage("tr");
      setTranslations(tr);
    } else {
      setLanguage("en");
      setTranslations(en);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    setTranslations(language === "tr" ? tr : en);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = () => useContext(LanguageContext);
