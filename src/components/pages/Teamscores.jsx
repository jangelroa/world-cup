import { useState, useContext } from "react";
import { LanguageContext } from "../../data/languages/LanguageContext";
import { Text } from "../../data/languages/Text";
import styled from "styled-components";
import { ThickLine, AnnouncementPool2 } from "../smallComponents";
import { ThinLine } from "../smallComponents";
import { teamScoresList } from "../../data/teams";
import { MatchesDay } from "./MatchesList";
import { allMatches } from "../../data/matches";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
// console.log({
//   teamScoresList: teamScoresList(),
// });

const Flag = styled.img`
  height: 20px;
  width: 25px;
`;

const TeamScores = () => {
  const { userLanguage } = useContext(LanguageContext);
  return (
    <>
      <AnnouncementPool2 />
      <div className="team-list">
        <h2>
          <Text tid="Team Points per rules" />
        </h2>
        {/* <span
          style={{
            color: "red",
            background: "yellow",
          }}
        >
          (test points)
        </span> */}
        <ThickLine />
        <div>
          {teamScoresList()
            .sort((a, b) => b.points - a.points)
            .map((team, index) => {
              return (
                <div key={index}>
                  <TeamScoreListRow team={team} index={index} />
                </div>
              );
            })}
        </div>
      </div>
      <br />
    </>
  );
};

const TeamScoreListRow = ({ team, index }) => {
  const { userLanguage } = useContext(LanguageContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <div onClick={(e) => setExpanded((exp) => !exp)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
            gap: "15px",
          }}
        >
          <div>{index + 1}.</div>
          <div>
            <Flag src={team.flag} alt={team.flagAlt} />
          </div>
          <div>{userLanguage === "en" ? team.name : team.spanishName} </div>
        </div>
        <div>
          {team.points}{" "}
          <span
            style={{
              color: "#666",
              fontSize: ".8rem",
            }}
          >
            <Text tid="points" />
          </span>
          {expanded ? (
            <BiChevronRight style={{ fontSize: "1.5rem" }} />
          ) : (
            <BiChevronDown style={{ fontSize: "1.5rem" }} />
          )}
        </div>
      </div>
      {expanded && <TeamMatchesDetails team={team} />}
      <ThinLine />
    </div>
  );
};

const TeamMatchesDetails = ({ team }) => {
  const { userLanguage } = useContext(LanguageContext);
  const teamMatches = allMatches.filter((match) => {
    return team.fifa === match.team1.fifa || team.fifa === match.team2.fifa;
  });
  const teamName = userLanguage === "en" ? team.name : team.spanishName;
  return (
    <div
      style={{
        border: "1px dashed black",
        marginBottom: "7px",
        cursor: "pointer",
        background: "#e5dcdc",
        borderRadius: "50px",
      }}
    >
      {/* <div>{team.name}</div> */}
      <MatchesDay matchesday={teamMatches} title={teamName} subtitle="Games" />
    </div>
  );
};

export default TeamScores;
