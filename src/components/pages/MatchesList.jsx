import { useState, useContext } from "react";
import { LanguageContext } from "../../data/languages/LanguageContext";
import { matchesday1 } from "../../data/matches";
import { matchesday2 } from "../../data/matches";
import { matchesday3 } from "../../data/matches";
import { matchesday4 } from "../../data/matches";
import { matchesday5 } from "../../data/matches";
import { matchesday6 } from "../../data/matches";
import { matchesday7 } from "../../data/matches";
import { matchesday8 } from "../../data/matches";
import {
  ThickLine,
  ThinLine,
  Flag,
  getTeam,
  AnnouncementPool2,
} from "../smallComponents";
import { Text } from "../../data/languages/Text";
import logo from "../../images/qatar-logo.jpg";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

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

const GetScore = (match) => {
  if (typeof match.team1.score !== "number") {
    return (
      <div>
        <div style={{ fontSize: "0.9rem" }}>{match.date}</div>
        <div style={{ fontSize: "0.7rem" }}>{match.time}</div>
      </div>
    );
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
      <AnnouncementPool2 />
      <MatchesDay matchesday={matchesday1} title="Match day" day="1" />
      <MatchesDay matchesday={matchesday2} title="Match day" day="2" />
      <MatchesDay matchesday={matchesday3} title="Match day" day="3" />
      <MatchesDay
        matchesday={matchesday4}
        title="Match day"
        subtitle="Round of 16"
        day="4"
      />
      <MatchesDay
        matchesday={matchesday5}
        title="Match day"
        subtitle="Quarterfinals"
        day="5"
      />
      <MatchesDay
        matchesday={matchesday6}
        title="Match day"
        subtitle="Semifinals"
        day="6"
      />
      <MatchesDay
        matchesday={matchesday7}
        title="Match day"
        subtitle="3rd and 4th"
        day="7"
      />
      <MatchesDay
        matchesday={matchesday8}
        title="Match day"
        subtitle="Final"
        day="8"
      />
    </>
  );
};

export const MatchesDay = ({ matchesday, title, subtitle, day }) => {
  const { userLanguage, userLanguageChange, dictionary } =
    useContext(LanguageContext);
  return (
    <div className="partidos">
      <div className="game-titles">
        <h2>
          <Text tid={title} /> {day}
        </h2>
        {subtitle && <span>-</span>}
        <h4>
          <Text tid={subtitle} />
        </h4>
      </div>
      {/* <span
        style={{
          color: "red",
          background: "yellow",
        }}
      >
        (test scores)
      </span> */}
      <ThickLine />
      <div>
        {matchesday.map((match, i) => {
          const [expanded, setExpanded] = useState(false);

          const matchTeam1 = {
            name: match.team1.name,
            spanishName: match.team1.spanishName,
            flag: logo,
            flagAlt: "Default flag",
          };
          const matchTeam2 = {
            name: match.team2.name,
            spanishName: match.team2.spanishName,
            flag: logo,
            flagAlt: "Default flag",
          };
          const team1 = getTeam(match.team1.fifa) || matchTeam1;
          const team2 = getTeam(match.team2.fifa) || matchTeam2;

          return (
            <div key={i} onClick={(e) => setExpanded((exp) => !exp)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: "60px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "38%",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Flag src={team1.flag} alt={team1.flagAlt} />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    {userLanguage === "en" ? team1.name : team1.spanishName}
                  </div>
                </div>
                <div>{GetScore(match)}</div>
                <div
                  style={{
                    display: "flex",
                    width: "38%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginRight: "10px", textAlign: "right" }}>
                    {userLanguage === "en" ? team2.name : team2.spanishName}
                  </div>
                  <div>
                    <Flag src={team2.flag} alt={team2.flagAlt} />
                  </div>
                  {expanded ? (
                    <BiChevronRight style={{ fontSize: "1.5rem" }} />
                  ) : (
                    <BiChevronDown style={{ fontSize: "1.5rem" }} />
                  )}
                </div>
              </div>
              {expanded && <MatchDetails match={match} />}
              <ThinLine />
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "right", fontSize: "0.7rem" }}>
        * California Time
      </div>
    </div>
  );
};

const MatchDetails = ({ match }) => {
  return (
    <div
      style={{
        border: "1px dashed black",
        marginBottom: "7px",
        cursor: "pointer",
        background: "#e5dcdc",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="game-highlight">
        <Iframe highlights={match.highlights} />
      </div>
    </div>
  );
};

const Iframe = ({ highlights }) => {
  if (highlights) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={highlights}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    );
  }

  return <div>highlights coming soon</div>;
};

export default MatchesList;
