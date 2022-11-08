import { teamScoresList } from "./teams";

export const users = [
  {
    id: 0,
    name: "Pina",
    email: "pinacorrea@hotmail.com",
    poolTeams: [1, 2, 3, 4, 10, 11, 12, 13, 19, 21, 22, 24, 20, 31, 38, 41],
    poolWinner: 1,
    poolGoals: 10,
    paid: "",
  },
  {
    id: 1,
    name: "Roque Hernandez",
    email: "dreamsourcefilms@gmail.com",
    poolTeams: [1, 4, 7, 8, 11, 12, 14, 18, 19, 22, 30, 44, 31, 41, 43, 50],
    poolWinner: 1,
    poolGoals: 5,
    paid: "",
  },
  {
    id: 2,
    name: "Angel",
    email: "jangelroa@gmail.com",
    poolTeams: [1, 3, 7, 9, 11, 12, 13, 14, 22, 24, 28, 30, 38, 43, 50, 51],
    poolWinner: 10,
    poolGoals: 6,
    paid: "",
  },
  {
    id: 3,
    name: "Gerry Larry",
    email: "michelettijacob@gmail.com",
    poolTeams: [1, 2, 3, 4, 10, 11, 12, 13, 21, 22, 28, 44, 20, 31, 41, 50],
    poolWinner: 9,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 4,
    name: "Alberto",
    email: "alberto.galet@gmail.com",
    poolTeams: [1, 4, 5, 7, 10, 11, 14, 18, 21, 24, 26, 28, 31, 38, 41, 43],
    poolWinner: 7,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 5,
    name: "Roque Hernandez",
    email: "roque@roque.video",
    poolTeams: [1, 4, 7, 9, 11, 13, 14, 18, 19, 22, 28, 44, 31, 41, 43, 61],
    poolWinner: 1,
    poolGoals: 5,
    paid: "",
  },
  {
    id: 6,
    name: "Tito",
    email: "jangelroa@gmail.com",
    poolTeams: [3, 4, 5, 8, 11, 12, 13, 14, 24, 26, 28, 30, 43, 50, 51, 61],
    poolWinner: 9,
    poolGoals: 2,
    paid: "",
  },
  {
    id: 7,
    name: "Kike",
    email: "jangelroa@gmail.com",
    poolTeams: [4, 5, 7, 8, 12, 13, 14, 15, 22, 24, 26, 30, 43, 50, 51, 61],
    poolWinner: 11,
    poolGoals: 5,
    paid: "",
  },
  {
    id: 8,
    name: "Ramon Moreno",
    email: "nomar98@yahoo.com",
    poolTeams: [1, 2, 4, 7, 11, 12, 13, 15, 21, 24, 26, 28, 20, 31, 41, 43],
    poolWinner: 7,
    poolGoals: 6,
    paid: "",
  },
  {
    id: 9,
    name: "Mr. Director007",
    email: "davgalvez8@gmail.com",
    poolTeams: [1, 2, 3, 4, 10, 11, 12, 13, 19, 21, 24, 28, 20, 31, 38, 43],
    poolWinner: 3,
    poolGoals: 4,
    paid: "",
  },
  {
    id: 10,
    name: "Cormac",
    email: "cormact@gmail.com",
    poolTeams: [1, 3, 4, 8, 10, 11, 12, 14, 19, 21, 26, 44, 20, 31, 43, 61],
    poolWinner: 1,
    poolGoals: 1,
    paid: "",
  },
  {
    id: 11,
    name: "Lazaro",
    email: "lazblanco@gmail.com",
    poolTeams: [1, 3, 4, 8, 11, 13, 14, 16, 21, 24, 26, 28, 31, 41, 43, 61],
    poolWinner: 3,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 12,
    name: "Greg",
    email: "greghoops22@yahoo.com",
    poolTeams: [2, 3, 4, 5, 10, 11, 12, 13, 21, 24, 28, 44, 20, 31, 41, 61],
    poolWinner: 2,
    poolGoals: 1,
    paid: "",
  },
];

export const UserScoresList = () => {
  const teamScores = teamScoresList();
  return users.map((user, index) => {
    // add totalPoint key to every user obj
    user.totalPoint = 0;
    // add poolTeamsScore key to every user obj
    user.poolTeamsScore = user.poolTeams.map((teamFifa) => {
      const teamwithScoreFound = teamScores.find(
        (team) => team.fifa === teamFifa
      );
      const teamScore = teamwithScoreFound?.points || 0;
      user.totalPoint += teamScore;
      return teamScore;
    });
    return user;
  });
};

console.log({ UserScoresList: UserScoresList() });
