import styled from "styled-components";
import { allTeams } from "../data/teams";

export const ThickLine = styled.hr`
  border: 0;
  height: 2px;
  background: #000;
`;

export const ThinLine = styled.hr`
  border: 0;
  height: 1px;
  background: #000;
`;

export const Flag = styled.img`
  height: 20px;
  width: 25px;
  border-radius: 10%;
`;

export const getTeam = (fifaTeam) => {
  const team = allTeams.find((team) => {
    return team.fifa === fifaTeam;
  });
  return team;
};

export const getTeamName = (fifaTeam) => {
  const team = allTeams.find((team) => {
    return team.fifa === fifaTeam;
  });
  return team.name;
};

export function truncate(str, n) {
  return str.length > n ? `${str.slice(0, n - 1)}...` : str;
}
