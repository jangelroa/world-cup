import React from "react";
import { navColor } from "../components/Navbar/NavbarElements";
import groups from "../images/groups.jpeg";
import background1 from "../images/background1.png";
import whiteLogo from "../images/white-logo.svg";
import styled from "styled-components";

import { groupA } from "../data/teams";
import { groupB } from "../data/teams";

const Groups = styled.div`
  background-image: url(${background1});
  padding: 20px;
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
`;

const GroupContainer = styled.div`
  // padding: 30px;
  // display: flex;
`;

const GroupTitle = styled.div`
  color: white;
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
`;

const TeamName = styled.div`
  color: red;
  margin-left: 7px;
`;

const Flag = styled.img`
  height: 20px;
  width: 25px;
`;

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        background: "#ddd",
        // height: "90vh",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          WORLD CUP QATAR 2022
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "1900",
            background: navColor,
            color: "#fff",
            padding: "2px",
          }}
        >
          GROUPS
        </h2>
        <div>
          <img src={groups} alt="groups" />
        </div>
        <Groups>
          <div
            style={{
              display: "flex",
              margin: "50px",
            }}
          >
            <div
              style={{
                background: "#aaa",
                borderRadius: "24px",
                // display: "inline-block",
                padding: "10px",
                // height: "250px",
              }}
            >
              <img
                src={whiteLogo}
                alt="white logo"
                style={{ height: "150px" }}
              />
            </div>
            <div>
              <Title>WORLD CUP QATAR 2022</Title>
              <Subtitle>GROUPS</Subtitle>
            </div>
          </div>
          <GroupsContainer>
            <GroupContainer>
              <GroupTitle>Group A</GroupTitle>
              <Teams>
                {groupA &&
                  groupA.map((team, idx) => (
                    <Team key={team.fifa}>
                      <Flag src={team.flag} alt={team.flagAlt} />
                      <TeamName>
                        {idx + 1}. {team.name.toUpperCase()} ({team.fifa})
                      </TeamName>
                    </Team>
                  ))}
              </Teams>
            </GroupContainer>
            <GroupContainer>
              <GroupTitle>Group B</GroupTitle>
              <Teams>
                {groupB &&
                  groupB.map((team, idx) => (
                    <Team key={team.fifa}>
                      <Flag src={team.flag} alt={team.flagAlt} />
                      <TeamName>
                        {idx + 1}. {team.name.toUpperCase()} ({team.fifa})
                      </TeamName>
                    </Team>
                  ))}
              </Teams>
            </GroupContainer>
          </GroupsContainer>
        </Groups>
      </div>
    </div>
  );
};

export default Home;
