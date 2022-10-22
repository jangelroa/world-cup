import { useContext } from "react";
import { LanguageContext } from "../../data/languages/LanguageContext";

const AddPool = () => {
  const { userLanguage } = useContext(LanguageContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#ddd",
        // alignItems: "center",
        // height: "100vh",
      }}
    >
      {userLanguage === "en" ? (
        <iframe
          // English Rules
          src="https://docs.google.com/forms/d/e/1FAIpQLSfQHO6X88e9oUo984TMHm9JCA3SeM0OJL-giTFofF2Jvo9zJA/viewform?embedded=true"
          width="1200"
          // height="520"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      ) : (
        <iframe
          // Spanish Rules
          src="https://docs.google.com/forms/d/e/1FAIpQLSci60WHlp5R8OVsrbn5ExlSS8B9Uetosvxl2TAduQJUB51huw/viewform?embedded=true"
          width="1200"
          // height="520"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      )}
    </div>
  );
};

export default AddPool;
