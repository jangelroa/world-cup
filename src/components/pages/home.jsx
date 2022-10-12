import React from "react";
// import { navColor } from "../Navbar/NavbarElements";
// import groups from "../../images/groups.jpeg";
import background1 from "../../images/background1.png";
import whiteLogo from "../../images/white-logo.svg";
import styled from "styled-components";

import { teamsGroupA } from "../../data/teams";
import { teamsGroupB } from "../../data/teams";
import { teamsGroupC } from "../../data/teams";
import { teamsGroupD } from "../../data/teams";
import { teamsGroupE } from "../../data/teams";
import { teamsGroupF } from "../../data/teams";
import { teamsGroupG } from "../../data/teams";
import { teamsGroupH } from "../../data/teams";
import { allTeams } from "../../data/teams";

import { matchday1 } from "../../data/matches";

const allGroups = [
  teamsGroupA,
  teamsGroupB,
  teamsGroupC,
  teamsGroupD,
  teamsGroupE,
  teamsGroupF,
  teamsGroupG,
  teamsGroupH,
];

const Quadrant = styled.div`
  background-image: url(${background1});
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  padding: 30px;
`;

const Subtitle = styled.h2`
  color: white;
  text-align: center;
`;

const GroupsContainer = styled.div`
  padding: 30px;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const GroupContainer = styled.div`
  // padding: 30px;
  // display: flex;
`;

const GroupTitle = styled.div`
  color: white;
  margin-bottom: 5px;
`;

const Teams = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Team = styled.div`
  display: flex;
  background: white;
  align-items: center;
  padding: 5px;
  border-radius: 3px;
`;

const TeamName = styled.div`
  color: red;
  margin-left: 7px;
`;

const Flag = styled.img`
  height: 20px;
  width: 25px;
`;

const Partidos = styled.div`
  // background-image: url(${background1});
  padding: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ThickLine = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
`;

const ThinLine = styled.hr`
  border: 0;
  height: 1px;
  background: #000;
`;

const letters = "ABCDEFGH";

const Group = ({ group, index }) => {
  return (
    <GroupContainer>
      <GroupTitle>Group {letters.charAt(index)}</GroupTitle>
      <Teams>
        {group &&
          group.map((team, idx) => (
            <Team key={team.fifa}>
              <Flag src={team.flag} alt={team.flagAlt} />
              <TeamName>
                {idx + 1}. {team.name.toUpperCase()} ({team.fifa})
              </TeamName>
            </Team>
          ))}
      </Teams>
    </GroupContainer>
  );
};

let count = 0;

const getTeamName = (fifaTeam) => {
  const team = allTeams.find((team) => {
    return team.fifa === fifaTeam;
  });
  return team.name;
};

const getTeam = (fifaTeam) => {
  const team = allTeams.find((team) => {
    return team.fifa === fifaTeam;
  });
  return team;
};

const MatchScore = ({ match }) => (
  <div>
    {match.team1.score}-{match.team2.score}
  </div>
);
const PenaltiesScore = ({ match }) => {
  if (!match.team1.penalties) {
    return;
  }
  return (
    <div>
      ({match.team1.penalties}-{match.team2.penalties})
    </div>
  );
};

const getScore = (match) => {
  if (!match.team1.score) {
    return match.date;
  }

  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
      <MatchScore match={match} />
      <PenaltiesScore match={match} />
    </div>
  );
};

const Home = () => {
  return (
    <div
      style={{
        // display: "flex",
        background: "#ddd",
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: "50px",
        // height: "90vh",
      }}
    >
      <Quadrant>
        <div
          style={{
            display: "flex",
            margin: "50px",
          }}
        >
          <div
            style={{
              background: "#ccc",
              borderRadius: "24px",
              // display: "inline-block",
              padding: "10px",
              // height: "250px",
            }}
          >
            <img src={whiteLogo} alt="white logo" style={{ height: "150px" }} />
          </div>
          <div>
            <Title>WORLD CUP QATAR 2022</Title>
            <Subtitle>GROUPS</Subtitle>
          </div>
        </div>
        <GroupsContainer>
          {allGroups &&
            allGroups.map((group, index) => (
              <Group group={group} index={index} key={index} />
            ))}
        </GroupsContainer>
      </Quadrant>
      {/* <div>
        <img style={{ width: "800px" }} src={groups} alt="groups" />
      </div> */}
      <Partidos>
        <h2>Primeros Partidos</h2>
        <ThickLine />
        <div>
          {matchday1.map((match, i) => {
            const team1 = getTeam(match.team1.fifa);
            const team2 = getTeam(match.team2.fifa);
            return (
              <div key={i}>
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                  }}
                >
                  <div style={{ display: "flex", width: "40%" }}>
                    <Flag src={team1.flag} alt={team1.flagAlt} />
                    <div style={{ marginLeft: "10px" }}>
                      {getTeamName(match.team1.fifa)}
                    </div>
                  </div>
                  <div>
                    {/* {match.team1.score
                      ? `${match.team1.score}-${match.team2.score} `
                      : match.date}
                    {match.team1.penalties
                      ? `(${match.team1.penalties}-${match.team2.penalties})`
                      : ""} */}
                    {getScore(match)}
                  </div>
                  {/* <div>{match.team1.score && match.date}</div> */}
                  <div
                    style={{
                      display: "flex",
                      width: "40%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      {getTeamName(match.team2.fifa)}
                    </div>
                    <Flag src={team2.flag} alt={team2.flagAlt} />
                  </div>
                </div>
                <ThinLine />
              </div>
            );
          })}
        </div>
      </Partidos>
    </div>
  );
};

export default Home;
