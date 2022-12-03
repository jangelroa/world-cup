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
          src="https://docs.google.com/forms/d/e/1FAIpQLScE76WeIc71tuUo0sQVTucvFMt1g44Nqxs82Ch9QVJTncxH2w/viewform?embedded=true"
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
          src="https://docs.google.com/forms/d/e/1FAIpQLSf2lse6lKWqO_pyDqNj6pWIlErw1Ljb8BpXnCCBa-uH2YTk3w/viewform?embedded=true"
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
