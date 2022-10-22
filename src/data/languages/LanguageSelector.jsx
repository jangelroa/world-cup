import { useContext } from "react";
import { languageOptions } from "./languages";
import { LanguageContext } from "./LanguageContext";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  // set selected language by calling context method
  const handleLanguageChange = (e) => {
    console.log("target", e.target.value);
    console.log(
      "userLanguageChange(e.target.value)",
      userLanguageChange(e.target.value)
    );
    console.log("userLanguage", userLanguage);

    return;
  };
  return (
    <>
      <select onChange={handleLanguageChange} value={userLanguage}>
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
