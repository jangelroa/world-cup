import { Redirect } from "react-router-dom";

export const Spanish = () => {
  // setLanguage to Spanish
  // http://localhost:5173/es
  window.localStorage.setItem("wcp-lang", "Español");
  console.log("SETTING SPANISH");
  return <Redirect to="/" />;
};

export const English = () => {
  // setLanguage to English
  // http://localhost:5173/en
  window.localStorage.setItem("wcp-lang", "English");
  console.log("SETTING ENGLISH");
  return <Redirect to="/" />;
};
