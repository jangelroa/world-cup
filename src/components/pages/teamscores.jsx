import React from "react";
import styled from "styled-components";
import { ThickLine, ThinLine } from "./home";
import { teamScoresList } from "../../data/teams";

console.log({
  teamScoresList: teamScoresList(),
});

const TeamList = styled.div`
  padding: 60px;
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamScores = () => {
  return (
    <>
      <TeamList>
        <h2>Puntuación Equipos</h2>
        <span
          style={{
            color: "red",
            background: "yellow",
          }}
        >
          (testing points)
        </span>
        <ThickLine />
        <div>
          {teamScoresList()
            .sort((a, b) => b.points - a.points)
            .map((team, index) => {
              return (
                <>
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "50px",
                    }}
                  >
                    <div>{team.name}</div>
                    <div>{team.points}</div>
                  </div>
                  <ThinLine />
                </>
              );
            })}
        </div>
      </TeamList>
    </>
  );
};

export default TeamScores;

/*
https://us04web.zoom.us/j/74894271845?pwd=cuUAc4PzkWiHDUbaTxWf2ZAbALvvUr.1


*/
