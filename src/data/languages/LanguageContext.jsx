import { createContext } from "react";
import { languageOptions, dictionaryList } from "./languages";
// create the language context with default selected language
const lang = window.localStorage.getItem("wcp-lang");
export const LanguageContext = createContext({
  userLanguage: lang || "en",
  dictionary: dictionaryList[lang] || dictionaryList.en,
});
