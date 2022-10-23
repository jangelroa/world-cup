import { useContext, useEffect } from "react";
import background1 from "../../images/background1.png";
// import whiteLogo from "../../images/white-logo.svg";
import logo from "../../images/qatar-logo.jpg";
import styled from "styled-components";
import { Flag } from "../smallComponents";

import { allGroups } from "../../data/teams";
import { Rules, SpanishRules } from "../Rules";
import RankingFifa from "../RankingFifa";
import { ShortThinLine } from "../smallComponents";
import LanguageSelector from "../../data/languages/LanguageSelector";
import { Text } from "../../data/languages/Text";
import { LanguageContext } from "../../data/languages/LanguageContext";
import { languageOptions } from "../../data/languages/languages";
import { Select } from "../Select";

const Quadrant = styled.div`
  background-image: url(${background1});
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
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
  // width: 100%;
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

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

const letters = "ABCDEFGH";

const Group = ({ group, index }) => {
  const { userLanguage } = useContext(LanguageContext);

  return (
    <GroupContainer>
      <GroupTitle>
        <Text tid="Group" /> {letters.charAt(index)}
      </GroupTitle>
      <Teams>
        {group &&
          group.map((team, idx) => {
            const teamName =
              userLanguage === "en" ? team.name : team.spanishName;
            return (
              <Team key={team.fifa}>
                <Flag src={team.flag} alt={team.flagAlt} />
                <TeamName>
                  {idx + 1}. {teamName.toUpperCase()} ({team.fifa})
                </TeamName>
              </Team>
            );
          })}
      </Teams>
    </GroupContainer>
  );
};

const Home = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  useEffect(() => {
    const defaultLanguage = window.localStorage.getItem("wcp-lang");
    userLanguageChange(defaultLanguage || "en");
  }, []);

  return (
    <>
      <Quadrant>
        {/* <LanguageSelector /> */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Select
            label={languageOptions[userLanguage]}
            values={Object.values(languageOptions)}
            onChange={(v) =>
              userLanguageChange(getKeyByValue(languageOptions, v))
            }
          />
        </div>
        <div className="home-header">
          <div
            style={{
              padding: "10px",
            }}
          >
            <img src={logo} alt="white logo" style={{ height: "150px" }} />
          </div>
          <div>
            <h1 className="home-title">
              <Text tid="WORLD CUP QATAR 2022" />
            </h1>
            <h2 className="home-subtitle">
              <Text tid="GROUPS" />
            </h2>
          </div>
        </div>
        <GroupsContainer>
          {allGroups &&
            allGroups.map((group, index) => (
              <Group group={group} index={index} key={index} />
            ))}
        </GroupsContainer>
      </Quadrant>
      {userLanguage === "en" ? <Rules /> : <SpanishRules />}
      <ShortThinLine />
      <RankingFifa />
    </>
  );
};

export default Home;
