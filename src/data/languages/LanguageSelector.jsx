import { useContext } from "react";
import { Select } from "../../components/Select";
import { languageOptions } from "./languages";
import { LanguageContext } from "./LanguageContext";
import { Flag } from "../../components/smallComponents";
import spain from "../../images/flags/spain.webp";
import usa from "../../images/flags/usa.webp";

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

const Label = ({ src, lang }) => {
  return (
    <div className="select-label">
      <Flag src={src} alt="Spanish" /> {lang}
    </div>
  );
};

function SelectLanguage() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  return (
    <Select
      initialValue={languageOptions[userLanguage]}
      label={
        <Label
          src={userLanguage === "en" ? usa : spain}
          lang={languageOptions[userLanguage]}
        />
      }
      // label={languageOptions[userLanguage]}
      values={Object.values(languageOptions)}
      onChange={(v) => userLanguageChange(getKeyByValue(languageOptions, v))}
      options={[
        {
          value: languageOptions["en"],
          item: <Label src={usa} lang={languageOptions["en"]} />,
        },
        {
          value: languageOptions["es"],
          item: <Label src={spain} lang={languageOptions["es"]} />,
        },
      ]}
    />
  );
}

export default SelectLanguage;
