import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

// get text according to id & current language
export function Text({ tid }) {
  const { userLanguage, dictionary } = useContext(LanguageContext);
  return dictionary[tid] || tid;
}
