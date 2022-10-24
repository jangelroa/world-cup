import fs from "fs";
import csv from "csvtojson";

const teamsGroupA = [
  {
    fifa: 8,
    name: "Netherlands",
    spanishName: "Holanda",
    points: 0,
    group: "A",
  },
  {
    fifa: 18,
    name: "Senegal",
    spanishName: "Senegal",
    points: 0,
    group: "A",
  },
  {
    fifa: 44,
    name: "Ecuador",
    spanishName: "Ecuador",
    points: 0,
    group: "A",
  },
  {
    fifa: 50,
    name: "Qatar",
    spanishName: "Qatar",
    points: 0,
    group: "A",
  },
];

const teamsGroupB = [
  {
    fifa: 5,
    name: "England",
    spanishName: "Inglaterra",
    points: 0,
    group: "B",
  },
  {
    fifa: 16,
    name: "USA",
    spanishName: "USA",
    points: 0,
    group: "B",
  },
  {
    fifa: 19,
    name: "Wales",
    spanishName: "Gales",
    points: 0,
    group: "B",
  },
  {
    fifa: 20,
    name: "Iran",
    spanishName: "Iran",
    points: 0,
    group: "B",
  },
];

const teamsGroupC = [
  {
    fifa: 3,
    name: "Argentina",
    spanishName: "Argentina",
    points: 0,
    group: "C",
  },
  {
    fifa: 13,
    name: "Mexico",
    spanishName: "Mexico",
    points: 0,
    group: "C",
  },
  {
    fifa: 26,
    name: "Poland",
    spanishName: "Polonia",
    points: 0,
    group: "C",
  },
  {
    fifa: 51,
    name: "Saudi Arabia",
    spanishName: "Arabia Saudi",
    points: 0,
    group: "C",
  },
];

const teamsGroupD = [
  {
    fifa: 4,
    name: "France",
    spanishName: "Francia",
    points: 0,
    group: "D",
  },
  {
    fifa: 10,
    name: "Denmark",
    spanishName: "Dinamarca",
    points: 0,
    group: "D",
  },
  {
    fifa: 30,
    name: "Tunisia",
    spanishName: "Túnez",
    points: 0,
    group: "D",
  },
  {
    fifa: 38,
    name: "Australia",
    spanishName: "Australia",
    points: 0,
    group: "D",
  },
];

const teamsGroupE = [
  {
    fifa: 7,
    name: "Spain",
    spanishName: "España",
    points: 0,
    group: "E",
  },
  {
    fifa: 11,
    name: "Germany",
    spanishName: "Alemania",
    points: 0,
    group: "E",
  },
  {
    fifa: 24,
    name: "Japan",
    spanishName: "Japón",
    points: 0,
    group: "E",
  },
  {
    fifa: 31,
    name: "Costa Rica",
    spanishName: "Costa Rica",
    points: 0,
    group: "E",
  },
];

const teamsGroupF = [
  {
    fifa: 2,
    name: "Belgium",
    spanishName: "Bélgica",
    points: 0,
    group: "F",
  },
  {
    fifa: 12,
    name: "Croatia",
    spanishName: "Croacia",
    points: 0,
    group: "F",
  },
  {
    fifa: 22,
    name: "Morocco",
    spanishName: "Marruecos",
    points: 0,
    group: "F",
  },
  {
    fifa: 41,
    name: "Canada",
    spanishName: "Canada",
    points: 0,
    group: "F",
  },
];

const teamsGroupG = [
  {
    fifa: 1,
    name: "Brazil",
    spanishName: "Brasil",
    points: 0,
    group: "G",
  },
  {
    fifa: 15,
    name: "Switzerland",
    spanishName: "Suiza",
    points: 0,
    group: "G",
  },
  {
    fifa: 21,
    name: "Serbia",
    spanishName: "Serbia",
    points: 0,
    group: "G",
  },
  {
    fifa: 43,
    name: "Cameroon",
    spanishName: "Camerún",
    points: 0,
    group: "G",
  },
];

const teamsGroupH = [
  {
    fifa: 9,
    name: "Portugal",
    spanishName: "Portugal",
    points: 0,
    group: "H",
  },
  {
    fifa: 14,
    name: "Uruguay",
    spanishName: "Uruguay",
    points: 0,
    group: "H",
  },
  {
    fifa: 28,
    name: "South Korea",
    spanishName: "Korea Sur",
    points: 0,
    group: "H",
  },
  {
    fifa: 61,
    name: "Ghana",
    spanishName: "Ghana",
    points: 0,
    group: "H",
  },
];

const allTeams = [
  ...teamsGroupA,
  ...teamsGroupB,
  ...teamsGroupC,
  ...teamsGroupD,
  ...teamsGroupE,
  ...teamsGroupF,
  ...teamsGroupG,
  ...teamsGroupH,
];

const getTeam = (teamName) => allTeams.filter(team => teamName === team.name);


(async () => {
  const rawMatches = await csv().fromFile("inputMatches.csv");

  // console.log({ rawMatches });
  // console.log({allTeams});


    const constructedMatches = rawMatches.map(match=>{
      if (match.matchday === "matchday3") {
        const team1 = getTeam(match.team1)[0];
        const team2 = getTeam(match.team2)[0];
        return {
          team1: {
            fifa: team1.fifa,
            name: team1.name,
            spanishName: team1.spanishName,
            score: null,
            penalties: null
          },
          team2: {
            fifa: team2.fifa,
            name: team2.name,
            spanishName: team2.spanishName,
            score: null,
            penalties: null
          },
          date: match.date,
          time: match.time,
        };
    }
    return {
      team1: {
        fifa: 0,
        name: match.team1,
        spanishName: match.team1,
        score: null,
        penalties: null
      },
      team2: {
        fifa: 0,
        name: match.team2,
        spanishName: match.team2,
        score: null,
        penalties: null
      },
      date: match.date,
      time: match.time,
    };
  });

  console.log({constructedMatches: JSON.stringify(constructedMatches)});

  fs.writeFile ("outputConstructedMatches.json", JSON.stringify(constructedMatches), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
})();
