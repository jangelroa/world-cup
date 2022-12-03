import { useContext } from "react";
import styled from "styled-components";
import { allTeams } from "../data/teams";
import { LanguageContext } from "../data/languages/LanguageContext";

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

export const MobileThinLine = styled(ThinLine)`
  background-color: #888;
`;

export const ShortThinLine = styled(ThinLine)`
  width: 30%;
  margin: 0 auto;
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

export const AnnouncementPool2 = () => {
  const { userLanguage } = useContext(LanguageContext);
  return (
    <div className="announcement">
      <div className="announcement-text">
        {userLanguage === "en" ? (
          <span>
            We have opened a Second Pool, independent of the first pool starting
            in round 16.
          </span>
        ) : (
          <span>
            Se ha abierto un Segundo Pool, independiente del primer pool
            empezando en los Octavos de final.
          </span>
        )}
      </div>
      <div className="announcement-text">
        {userLanguage === "en" ? (
          <span>
            Go to <a href="/add-pool">ADD POOL</a> to add your new entry.
          </span>
        ) : (
          <span>
            Ve a <a href="/add-pool">ADD POOL</a> para enviar tu apuesta.
          </span>
        )}
      </div>
    </div>
  );
};
