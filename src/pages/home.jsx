import React from "react";
import { navColor } from "../components/Navbar/NavbarElements";
import groups from "../images/groups.jpeg";
import background1 from "../images/background1.png";
import whiteLogo from "../images/white-logo.svg";
import qatar from "../images/svg/qa.svg";
import ecuador from "../images/svg/ec.svg";
import senegal from "../images/svg/sn.svg";
import netherlands from "../images/svg/nl.svg";
import styled from "styled-components";

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
  // display: flex;
`;

const GroupTitle = styled.div`
  color: white;
`;

const Group = styled.div`
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
            <GroupTitle>Group A</GroupTitle>
            <Group>
              <Team>
                <Flag src={qatar} alt="qatar flag" />
                <TeamName>QATAR</TeamName>
              </Team>
              <Team>
                <Flag src={ecuador} alt="ecuador flag" />
                <TeamName>ECUADOR</TeamName>
              </Team>
              <Team>
                <Flag src={senegal} alt="country flag" />
                <TeamName>SENEGAL</TeamName>
              </Team>
              <Team>
                <Flag src={netherlands} alt="netherlands flag" />
                <TeamName>NETHERLANDS</TeamName>
              </Team>
            </Group>
          </GroupsContainer>
        </Groups>
      </div>
    </div>
  );
};

export default Home;
