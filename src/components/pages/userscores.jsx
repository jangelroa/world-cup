import { useState, useContext } from "react";
import { LanguageContext } from "../../data/languages/LanguageContext";
import { Text } from "../../data/languages/Text";
import {
  ThickLine,
  ThinLine,
  getTeam,
  Flag,
  truncate,
} from "../smallComponents";
import { UserScoresList } from "../../data/users";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const UserScores = () => {
  return (
    <>
      <div className="user-list">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>
            <Text tid="Participant Scores" />
          </h2>
          <h5 style={{ textAlign: "right" }}>
            (<Text tid="click in a row for details" />)
          </h5>
        </div>
        <ThickLine />
        <div>
          {UserScoresList()
            .sort((a, b) => b.totalPoint - a.totalPoint)
            .filter((user) => user) // ALL USERS
            .map((user, index) => {
              return (
                <div key={index}>
                  <UserSccoreListRow user={user} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default UserScores;

const UserEntryDetails = ({ user }) => {
  const { userLanguage } = useContext(LanguageContext);
  const winnerTeam = getTeam(user.poolWinner);
  return (
    <div
      style={{
        padding: "20px 20px 0 20px",
        border: "1px dashed black",
        marginBottom: "7px",
        cursor: "pointer",
        background: "#e5dcdc",
        borderRadius: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          minHeight: "60px",
          gap: "5px 25px",
          flexWrap: "wrap",
        }}
      >
        {user.poolTeams.map((teamFifa, i) => {
          const team = getTeam(teamFifa);
          const teamName = userLanguage === "en" ? team.name : team.spanishName;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "4px",
                margin: "0 auto",
              }}
            >
              <div>
                <Flag src={team.flag} alt={team.flagAlt} title={team.name} />
              </div>
              <div
                style={{
                  minWidth: "150px",
                }}
              >
                {teamName}
              </div>
              <div>{user.poolTeamsScore[i]} pts</div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "50%",
            margin: "20px auto",
            gap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              gap: "5px",
            }}
          >
            <span>
              <Text tid="Winner" />:
            </span>
            <Flag
              src={winnerTeam.flag}
              alt={winnerTeam.flagAlt}
              title={winnerTeam.name}
            />
            <span>{winnerTeam.name}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            margin: "20px auto",
            gap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              gap: "5px",
            }}
          >
            <span>
              <Text tid="Goals" />:
            </span>
            <span>{user.poolGoals}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserSccoreListRow = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div onClick={(e) => setExpanded((exp) => !exp)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "60px",
          cursor: "pointer",
        }}
      >
        <div>{truncate(user.name, 30)}</div>
        <div>
          {user.totalPoint}{" "}
          <span
            style={{
              color: "#666",
              fontSize: ".8rem",
            }}
          >
            puntos
          </span>
          {expanded ? (
            <BiChevronRight style={{ fontSize: "1.5rem" }} />
          ) : (
            <BiChevronDown style={{ fontSize: "1.5rem" }} />
          )}
        </div>
      </div>
      {expanded && <UserEntryDetails user={user} />}
      <ThinLine />
    </div>
  );
};
