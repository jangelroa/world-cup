import styled from "styled-components";
import { ThickLine, ThinLine } from "./smallComponents";
import { teamScoresList } from "../data/teams";
import { useContext } from "react";
import { LanguageContext } from "../data/languages/LanguageContext";

console.log({
  teamScoresList: teamScoresList(),
});

const Flag = styled.img`
  height: 20px;
  width: 25px;
`;

const RankingFifa = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  return (
    <>
      <div className="ranking-list">
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
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "50px",
                      gap: "15px",
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
                      <Flag src={team.flag} alt={team.flagAlt} />
                      <div>
                        {userLanguage === "en" ? team.name : team.spanishName}
                      </div>
                    </div>
                    <div>({team.fifa})</div>
                  </div>
                  <ThinLine />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default RankingFifa;
