import { useContext } from "react";
import { languageOptions } from "./languages";
import { LanguageContext } from "./LanguageContext";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  // set selected language by calling context method

  return (
    <>
      <select
        onChange={(e) => userLanguageChange(e.target.value)}
        value={userLanguage}
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <h1>{userLanguage}</h1>
    </>
  );
}
