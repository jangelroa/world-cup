import styled from "styled-components";
import { matchesday1 } from "../data/matches";
import { matchesday2 } from "../data/matches";
import { matchesday3 } from "../data/matches";
import {
  ThickLine,
  ThinLine,
  Flag,
  getTeam,
  getTeamName,
} from "./smallComponents";

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

const MatchesList = () => {
  return (
    <>
      <MatchesDay matchesday={matchesday1} title="Match day 1" />
      <MatchesDay matchesday={matchesday2} title="Match day 2" />
      <MatchesDay matchesday={matchesday3} title="Match day 3" />
    </>
  );
};

const MatchesDay = ({ matchesday, title }) => {
  return (
    <div className="partidos">
      <h2>{title}</h2>
      <span
        style={{
          color: "red",
          background: "yellow",
        }}
      >
        (test scores)
      </span>
      <ThickLine />
      <div>
        {matchesday.map((match, i) => {
          const team1 = getTeam(match.team1.fifa);
          const team2 = getTeam(match.team2.fifa);
          return (
            <div key={i}>
              <div
                // key={i}
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
                <div>{getScore(match)}</div>
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
    </div>
  );
};

export default MatchesList;
