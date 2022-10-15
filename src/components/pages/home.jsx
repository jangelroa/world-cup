import React from "react";
// import { navColor } from "../Navbar/NavbarElements";
// import groups from "../../images/groups.jpeg";
import background1 from "../../images/background1.png";
import whiteLogo from "../../images/white-logo.svg";
import styled from "styled-components";
import { Flag } from "../smallComponents";

import { allGroups } from "../../data/teams";
import Rules from "../Rules";
import RankingFifa from "../rankingFifa";

const Quadrant = styled.div`
  background-image: url(${background1});
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  padding: 30px;
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
        <div
          style={{
            display: "flex",
            margin: "50px",
          }}
        >
          <div
            style={{
              background: "#ccc",
              borderRadius: "24px",
              // display: "inline-block",
              padding: "10px",
              // height: "250px",
            }}
          >
            <img src={whiteLogo} alt="white logo" style={{ height: "150px" }} />
          </div>
          <div>
            <Title>WORLD CUP QATAR 2022</Title>
            <Subtitle>GROUPS</Subtitle>
          </div>
        </div>
        <GroupsContainer>
          {allGroups &&
            allGroups.map((group, index) => (
              <Group group={group} index={index} key={index} />
            ))}
        </GroupsContainer>
      </Quadrant>
      {/* <div>
        <img style={{ width: "800px" }} src={groups} alt="groups" />
      </div> */}
      <Rules />
      <RankingFifa />
    </>
  );
};

export default Home;
