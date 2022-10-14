import React from "react";
import styled from "styled-components";
import { ThickLine, ThinLine } from "./pages/home";
import { teamScoresList } from "../data/teams";

console.log({
  teamScoresList: teamScoresList(),
});

const Flag = styled.img`
  height: 20px;
  width: 25px;
`;

const TeamList = styled.div`
  padding: 0 60px 60px 60px;
  max-width: 1000px;
  margin: 0 auto;
`;

const RankingFifa = () => {
  return (
    <>
      <TeamList>
        <h2>Ranking Fifa</h2>
        <ThickLine />
        <div>
          {teamScoresList()
            .sort((a, b) => a.fifa - b.fifa)
            .map((team, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "space-between",
                      alignItems: "center",
                      height: "50px",
                      gap: "15px",
                    }}
                  >
                    <Flag src={team.flag} alt={team.flagAlt} />
                    <div>{team.name}</div>
                    <div>({team.fifa})</div>
                  </div>
                  <ThinLine />
                </div>
              );
            })}
        </div>
      </TeamList>
    </>
  );
};

export default RankingFifa;
