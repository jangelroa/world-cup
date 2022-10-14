import React from "react";
import styled from "styled-components";
import { ThickLine, ThinLine } from "./home";
import { teamScoresList } from "../../data/teams";

console.log({
  teamScoresList: teamScoresList(),
});

const Flag = styled.img`
  height: 20px;
  width: 25px;
`;

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
          (test points)
        </span>
        <ThickLine />
        <div>
          {teamScoresList()
            .sort((a, b) => b.points - a.points)
            .map((team, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "50px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        // justifyContent: "space-between",
                        alignItems: "center",
                        height: "50px",
                        gap: "15px",
                      }}
                    >
                      <div>{index + 1}.</div>
                      <div>
                        <Flag src={team.flag} alt={team.flagAlt} />
                      </div>
                      <div>{team.name}</div>
                    </div>
                    <div>
                      {team.points}{" "}
                      <span
                        style={{
                          color: "#666",
                          fontSize: ".8rem",
                        }}
                      >
                        puntos
                      </span>
                    </div>
                  </div>
                  <ThinLine />
                </div>
              );
            })}
        </div>
      </TeamList>
      <br />
    </>
  );
};

export default TeamScores;
