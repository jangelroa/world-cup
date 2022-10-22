import { useState } from "react";
import { dictionaryList } from "./languages";
import { LanguageContext } from "./LanguageContext";

// it provides the language context to app
export function LanguageProvider({ children }) {
  const lang = window.localStorage.getItem("wcp-lang");
  const [userLanguage, setUserLanguage] = useState(lang || "en");
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      //   const defaultLanguage = window.localStorage.getItem("wcp-lang");
      //   const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");
      setUserLanguage(selected);
      window.localStorage.setItem("wcp-lang", selected);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
