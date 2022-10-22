import { useState } from "react";
import styled from "styled-components";
import {
  ThickLine,
  ThinLine,
  getTeam,
  Flag,
  truncate,
} from "../smallComponents";
import { UserScoresList } from "../../data/users";

const UserScores = () => {
  return (
    <>
      <div className="user-list">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Participant Scores</h2>
          <h5 style={{ textAlign: "right" }}>(click in a row for details)</h5>
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

const FlagPointList = ({ user }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          minHeight: "50px",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        {user.poolTeams.map((teamFifa, i) => {
          const team = getTeam(teamFifa);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "4px",
              }}
            >
              <div>
                <Flag src={team.flag} alt={team.flagAlt} title={team.name} />
              </div>
              <div>{user.poolTeamsScore[i]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const UserSccoreListRow = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "50px",
        }}
        onClick={(e) => setExpanded((exp) => !exp)}
      >
        <div>
          {expanded ? truncate(user.name, 10) : truncate(user.name, 15)}
        </div>
        {expanded && <FlagPointList user={user} />}
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
        </div>
      </div>
      <ThinLine />
    </div>
  );
};
