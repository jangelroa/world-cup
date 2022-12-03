import netherlands from "../images/flags/netherlands.webp";
import senegal from "../images/flags/senegal.webp";
import ecuador from "../images/flags/ecuador.webp";
import qatar from "../images/flags/qatar.webp";

import england from "../images/flags/england.webp";
import usa from "../images/flags/usa.webp";
import wales from "../images/flags/wales.webp";
import iran from "../images/flags/iran.webp";

import argentina from "../images/flags/argentina.webp";
import mexico from "../images/flags/mexico.webp";
import poland from "../images/flags/poland.webp";
import saudiArabia from "../images/flags/saudiArabia.webp";

import france from "../images/flags/france.webp";
import denmark from "../images/flags/denmark.webp";
import tunisia from "../images/flags/tunisia.webp";
import australia from "../images/flags/australia.webp";

import spain from "../images/flags/spain.webp";
import germany from "../images/flags/germany.webp";
import japan from "../images/flags/japan.webp";
import costaRica from "../images/flags/costaRica.webp";

import belgium from "../images/flags/belgium.webp";
import croatia from "../images/flags/croatia.webp";
import morocco from "../images/flags/morocco.webp";
import canada from "../images/flags/canada.webp";

import brazil from "../images/flags/brazil.webp";
import switzerland from "../images/flags/switzerland.webp";
import serbia from "../images/flags/serbia.webp";
import cameroon from "../images/flags/cameroon.webp";

import portugal from "../images/flags/portugal.webp";
import uruguay from "../images/flags/uruguay.webp";
import southKorea from "../images/flags/southKorea.webp";
import ghana from "../images/flags/ghana.webp";
import { allMatches } from "./matches";
import { round16AndBeyondMatches } from "./matches";

export const rankingFifa =
  "https://www.fifa.com/fifa-world-ranking/men?dateId=id13792";

export const teamsGroupA = [
  {
    fifa: 8,
    name: "Netherlands",
    spanishName: "Holanda",
    flag: netherlands,
    points: 0,
    group: "A",
    flagAlt: "Netherlands flag",
  },
  {
    fifa: 18,
    name: "Senegal",
    flag: senegal,
    spanishName: "Senegal",
    points: 0,
    group: "A",
    flagAlt: "Senegal flag",
  },
  {
    fifa: 44,
    name: "Ecuador",
    flag: ecuador,
    spanishName: "Ecuador",
    points: 0,
    group: "A",
    flagAlt: "Ecuador flag",
  },
  {
    fifa: 50,
    name: "Qatar",
    spanishName: "Qatar",
    flag: qatar,
    points: 0,
    group: "A",
    flagAlt: "Qatar flag",
  },
];

export const teamsGroupB = [
  {
    fifa: 5,
    name: "England",
    spanishName: "Inglaterra",
    flag: england,
    points: 0,
    group: "B",
    flagAlt: "England flag",
  },
  {
    fifa: 16,
    name: "USA",
    spanishName: "USA",
    flag: usa,
    points: 0,
    group: "B",
    flagAlt: "USA flag",
  },
  {
    fifa: 19,
    name: "Wales",
    spanishName: "Gales",
    flag: wales,
    points: 0,
    group: "B",
    flagAlt: "Wales flag",
  },
  {
    fifa: 20,
    name: "Iran",
    spanishName: "Iran",
    flag: iran,
    points: 0,
    group: "B",
    flagAlt: "Iran flag",
  },
];

export const teamsGroupC = [
  {
    fifa: 3,
    name: "Argentina",
    spanishName: "Argentina",
    flag: argentina,
    points: 0,
    group: "C",
    flagAlt: "Argentina flag",
  },
  {
    fifa: 13,
    name: "Mexico",
    spanishName: "Mexico",
    flag: mexico,
    points: 0,
    group: "C",
    flagAlt: "Mexico flag",
  },
  {
    fifa: 26,
    name: "Poland",
    spanishName: "Polonia",
    flag: poland,
    points: 0,
    group: "C",
    flagAlt: "Poland flag",
  },
  {
    fifa: 51,
    name: "Saudi Arabia",
    spanishName: "Arabia Saudi",
    flag: saudiArabia,
    points: 0,
    group: "C",
    flagAlt: "Saudi Arabia flag",
  },
];

export const teamsGroupD = [
  {
    fifa: 4,
    name: "France",
    spanishName: "Francia",
    flag: france,
    points: 0,
    group: "D",
    flagAlt: "France flag",
  },
  {
    fifa: 10,
    name: "Denmark",
    spanishName: "Dinamarca",
    flag: denmark,
    points: 0,
    group: "D",
    flagAlt: "Denmark flag",
  },
  {
    fifa: 30,
    name: "Tunisia",
    spanishName: "Túnez",
    flag: tunisia,
    points: 0,
    group: "D",
    flagAlt: "Tunisia flag",
  },
  {
    fifa: 38,
    name: "Australia",
    spanishName: "Australia",
    flag: australia,
    points: 0,
    group: "D",
    flagAlt: "Australia flag",
  },
];

export const teamsGroupE = [
  {
    fifa: 7,
    name: "Spain",
    spanishName: "España",
    flag: spain,
    points: 0,
    group: "E",
    flagAlt: "Spain flag",
  },
  {
    fifa: 11,
    name: "Germany",
    spanishName: "Alemania",
    flag: germany,
    points: 0,
    group: "E",
    flagAlt: "Germany flag",
  },
  {
    fifa: 24,
    name: "Japan",
    spanishName: "Japón",
    flag: japan,
    points: 0,
    group: "E",
    flagAlt: "Japan flag",
  },
  {
    fifa: 31,
    name: "Costa Rica",
    spanishName: "Costa Rica",
    flag: costaRica,
    points: 0,
    group: "E",
    flagAlt: "Costa Rica flag",
  },
];

export const teamsGroupF = [
  {
    fifa: 2,
    name: "Belgium",
    spanishName: "Bélgica",
    flag: belgium,
    points: 0,
    group: "F",
    flagAlt: "Belgium flag",
  },
  {
    fifa: 12,
    name: "Croatia",
    spanishName: "Croacia",
    flag: croatia,
    points: 0,
    group: "F",
    flagAlt: "Croatia flag",
  },
  {
    fifa: 22,
    name: "Morocco",
    spanishName: "Marruecos",
    flag: morocco,
    points: 0,
    group: "F",
    flagAlt: "Morocco flag",
  },
  {
    fifa: 41,
    name: "Canada",
    spanishName: "Canada",
    flag: canada,
    points: 0,
    group: "F",
    flagAlt: "Canada flag",
  },
];

export const teamsGroupG = [
  {
    fifa: 1,
    name: "Brazil",
    spanishName: "Brasil",
    flag: brazil,
    points: 0,
    group: "G",
    flagAlt: "Brazil flag",
  },
  {
    fifa: 15,
    name: "Switzerland",
    spanishName: "Suiza",
    flag: switzerland,
    points: 0,
    group: "G",
    flagAlt: "Switzerland flag",
  },
  {
    fifa: 21,
    name: "Serbia",
    spanishName: "Serbia",
    flag: serbia,
    points: 0,
    group: "G",
    flagAlt: "Serbia flag",
  },
  {
    fifa: 43,
    name: "Cameroon",
    spanishName: "Camerún",
    flag: cameroon,
    points: 0,
    group: "G",
    flagAlt: "Cameroon flag",
  },
];

export const teamsGroupH = [
  {
    fifa: 9,
    name: "Portugal",
    spanishName: "Portugal",
    flag: portugal,
    points: 0,
    group: "H",
    flagAlt: "Portugal flag",
  },
  {
    fifa: 14,
    name: "Uruguay",
    spanishName: "Uruguay",
    flag: uruguay,
    points: 0,
    group: "H",
    flagAlt: "Uruguay flag",
  },
  {
    fifa: 28,
    name: "South Korea",
    spanishName: "Korea Sur",
    flag: southKorea,
    points: 0,
    group: "H",
    flagAlt: "South Korea flag",
  },
  {
    fifa: 61,
    name: "Ghana",
    spanishName: "Ghana",
    flag: ghana,
    points: 0,
    group: "H",
    flagAlt: "Ghana flag",
  },
];

export const allTeams = [
  ...teamsGroupA,
  ...teamsGroupB,
  ...teamsGroupC,
  ...teamsGroupD,
  ...teamsGroupE,
  ...teamsGroupF,
  ...teamsGroupG,
  ...teamsGroupH,
];

export const allGroups = [
  teamsGroupA,
  teamsGroupB,
  teamsGroupC,
  teamsGroupD,
  teamsGroupE,
  teamsGroupF,
  teamsGroupG,
  teamsGroupH,
];

export const calculateTeamScores = (team, round) => {
  let points = 0;
  let scoringTeam;
  let rivalTeam;
  let matches = round === "round16" ? round16AndBeyondMatches : allMatches;

  // loop through the matches
  for (let game = 0; game < matches.length; game++) {
    const match = matches[game];
    if (match.team1.score === null) {
      break;
    }
    if (team.fifa === match.team1.fifa) {
      scoringTeam = match.team1;
      rivalTeam = match.team2;
    } else if (team.fifa === match.team2.fifa) {
      scoringTeam = match.team2;
      rivalTeam = match.team1;
    } else {
      // team is not in the match
      continue;
    }
    // if the team is in the match add a point for each goal
    points += scoringTeam.score;

    if (scoringTeam.penalties !== null) {
      // add a point for each penalty
      points += scoringTeam.penalties;
    }

    if (scoringTeam.score > rivalTeam.score) {
      // add 3 points for victory
      points += 3;
    }

    if (scoringTeam.score === rivalTeam.score) {
      if (!scoringTeam.penalties) {
        // tied match and no penalties (matchesday1, 2 or 3)
        // add 1 point for tied
        points += 1;
      }
      if (
        scoringTeam.penalties &&
        scoringTeam.penalties > rivalTeam.penalties
      ) {
        // tied match and penalties
        // add 3 points for victory,
        //  added 2 because alredy added 1 for tied
        points += 3;
        continue;
      }
    }
  }
  return points;
};

export const teamScoresList = () => {
  return allTeams.map((team) => {
    const teamScore = calculateTeamScores(team);
    return { ...team, points: teamScore };
  });
};

// console.log({
//   teamScoresList: teamScoresList(),
// });

// teamScoresList();

const teamsInRound16 = [
  {
    fifa: 8,
    name: "Netherlands",
    spanishName: "Holanda",
    flag: netherlands,
    points: 0,
    group: "A",
    flagAlt: "Netherlands flag",
  },
  {
    fifa: 16,
    name: "USA",
    spanishName: "USA",
    flag: usa,
    points: 0,
    group: "B",
    flagAlt: "USA flag",
  },
  {
    fifa: 3,
    name: "Argentina",
    spanishName: "Argentina",
    flag: argentina,
    points: 0,
    group: "C",
    flagAlt: "Argentina flag",
  },
  {
    fifa: 38,
    name: "Australia",
    spanishName: "Australia",
    flag: australia,
    points: 0,
    group: "D",
    flagAlt: "Australia flag",
  },
  {
    fifa: 4,
    name: "France",
    spanishName: "Francia",
    flag: france,
    points: 0,
    group: "D",
    flagAlt: "France flag",
  },
  {
    fifa: 26,
    name: "Poland",
    spanishName: "Polonia",
    flag: poland,
    points: 0,
    group: "C",
    flagAlt: "Poland flag",
  },
  {
    fifa: 5,
    name: "England",
    spanishName: "Inglaterra",
    flag: england,
    points: 0,
    group: "B",
    flagAlt: "England flag",
  },
  {
    fifa: 18,
    name: "Senegal",
    flag: senegal,
    spanishName: "Senegal",
    points: 0,
    group: "A",
    flagAlt: "Senegal flag",
  },
  {
    fifa: 24,
    name: "Japan",
    spanishName: "Japón",
    flag: japan,
    points: 0,
    group: "E",
    flagAlt: "Japan flag",
  },
  {
    fifa: 12,
    name: "Croatia",
    spanishName: "Croacia",
    flag: croatia,
    points: 0,
    group: "F",
    flagAlt: "Croatia flag",
  },
  {
    fifa: 1,
    name: "Brazil",
    spanishName: "Brasil",
    flag: brazil,
    points: 0,
    group: "G",
    flagAlt: "Brazil flag",
  },
  {
    fifa: 28,
    name: "South Korea",
    spanishName: "Korea Sur",
    flag: southKorea,
    points: 0,
    group: "H",
    flagAlt: "South Korea flag",
  },
  {
    fifa: 22,
    name: "Morocco",
    spanishName: "Marruecos",
    flag: morocco,
    points: 0,
    group: "F",
    flagAlt: "Morocco flag",
  },
  {
    fifa: 7,
    name: "Spain",
    spanishName: "España",
    flag: spain,
    points: 0,
    group: "E",
    flagAlt: "Spain flag",
  },
  {
    fifa: 9,
    name: "Portugal",
    spanishName: "Portugal",
    flag: portugal,
    points: 0,
    group: "H",
    flagAlt: "Portugal flag",
  },
  {
    fifa: 15,
    name: "Switzerland",
    spanishName: "Suiza",
    flag: switzerland,
    points: 0,
    group: "G",
    flagAlt: "Switzerland flag",
  },
];

export const teamScoresList16 = () => {
  return teamsInRound16.map((team) => {
    const teamScore = calculateTeamScores(team, "round16");
    return { ...team, points: teamScore };
  });
};
// export const
