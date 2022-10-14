import React from "react";
import styled from "styled-components";

const TeamList = styled.div`
  padding: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamScores = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        background: "#ddd",
      }}
    >
      <h1>Team Scores</h1>
      {/* <TeamList>
        <h2>Primeros Partidos</h2>
        <ThickLine />
      </TeamList> */}
    </div>
  );
};

export default TeamScores;

/*
https://us04web.zoom.us/j/74894271845?pwd=cuUAc4PzkWiHDUbaTxWf2ZAbALvvUr.1


*/
