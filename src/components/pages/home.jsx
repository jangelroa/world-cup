import React from "react";
import background1 from "../../images/background1.png";
// import whiteLogo from "../../images/white-logo.svg";
import logo from "../../images/qatar-logo.jpg";
import styled from "styled-components";
import { Flag } from "../smallComponents";

import { allGroups } from "../../data/teams";
import Rules from "../Rules";
import RankingFifa from "../RankingFifa";
import { ThinLine } from "../smallComponents";

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

const Home = () => {
  return (
    <>
      <Quadrant>
        <div className="home-header">
          <div
            style={{
              padding: "10px",
            }}
          >
            <img src={logo} alt="white logo" style={{ height: "150px" }} />
          </div>
          <div>
            <h1 className="home-title">WORLD CUP QATAR 2022</h1>
            <h2 className="home-subtitle">GROUPS</h2>
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
      <ThinLine />
      <RankingFifa />
    </>
  );
};

export default Home;
