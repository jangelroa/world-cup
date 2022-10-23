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
        overflow: "hidden",
        // alignItems: "center",
        // height: "1200px",
      }}
    >
      {userLanguage === "en" ? (
        <iframe
          // English Rules
          src="https://docs.google.com/forms/d/e/1FAIpQLSfQHO6X88e9oUo984TMHm9JCA3SeM0OJL-giTFofF2Jvo9zJA/viewform?embedded=true"
          width="1200"
          // height="520"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden",
            // height: "100%",
            width: "100%",
            // position: "absolute",
            // top: "0px",
            // left: "0px",
            // right: "0px",
            // bottom: "0px",
          }}
        >
          Loading…
        </iframe>
      ) : (
        <iframe
          // Spanish Rules
          src="https://docs.google.com/forms/d/e/1FAIpQLSci60WHlp5R8OVsrbn5ExlSS8B9Uetosvxl2TAduQJUB51huw/viewform?embedded=true"
          width="1200"
          // height="520"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden",
            // height: "100%",
            width: "100%",
            // position: "absolute",
            // top: "0px",
            // left: "0px",
            // right: "0px",
            // bottom: "0px",
          }}
        >
          Loading…
        </iframe>
      )}
    </div>
  );
};

export default AddPool;
