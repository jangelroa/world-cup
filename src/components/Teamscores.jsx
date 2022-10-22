import styled from "styled-components";
import { ThickLine } from "./smallComponents";
import { ThinLine } from "./smallComponents";
import { teamScoresList } from "../data/teams";

console.log({
  teamScoresList: teamScoresList(),
});

const Flag = styled.img`
  height: 20px;
  width: 25px;
`;

const TeamScores = () => {
  return (
    <>
      <div className="team-list">
        <h2>Team Scores</h2>
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "60px",
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
      </div>
      <br />
    </>
  );
};

export default TeamScores;
