import React from "react";
import background1 from "../../images/background1.png";
// import whiteLogo from "../../images/white-logo.svg";
import logo from "../../images/qatar-logo.jpg";
import styled from "styled-components";
import { Flag } from "../smallComponents";

import { allGroups } from "../../data/teams";
import Rules from "../Rules";
import RankingFifa from "../RankingFifa";
import { ShortThinLine } from "../smallComponents";
import LanguageSelector from "../../data/languages/LanguageSelector";
import { Text } from "../../data/languages/Text";
import { useContext } from "react";
import { LanguageContext } from "../../data/languages/LanguageContext";

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

const letters = "ABCDEFGH";

const Group = ({ group, index }) => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

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
  return (
    <>
      <Quadrant>
        <LanguageSelector />
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
              <Text tid="mainTitle" />
            </h1>
            <h2 className="home-subtitle">
              <Text tid="mainSubtitle" />
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
      <Rules />
      <ShortThinLine />
      <RankingFifa />
    </>
  );
};

export default Home;
