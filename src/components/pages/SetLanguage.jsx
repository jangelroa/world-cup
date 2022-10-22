import { Redirect } from "react-router-dom";

export const Spanish = () => {
  // setLanguage to Spanish
  // http://localhost:5173/es
  window.localStorage.setItem("wcp-lang", "es");
  return <Redirect to="/" />;
};

export const English = () => {
  // setLanguage to English
  // http://localhost:5173/en
  window.localStorage.setItem("wcp-lang", "en");
  return <Redirect to="/" />;
};
