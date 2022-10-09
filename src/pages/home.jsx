import React from "react";
import { navColor } from "../components/Navbar/NavbarElements";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        background: "#ddd",
        // height: "90vh",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          WORLD CUP QATAR 2022
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "1900",
            background: navColor,
            color: "#fff",
            padding: "2px",
          }}
        >
          GROUPS
        </h2>
      </div>
    </div>
  );
};

export default Home;
