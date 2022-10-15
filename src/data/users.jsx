import { teamScoresList } from "./teams";

export const users = [
  {
    id: 0,
    name: "Pina",
    email: "pinacorrea@hotmail.com",
    poolTeams: [1, 2, 3, 4, 10, 11, 12, 13, 19, 21, 22, 24, 20, 31, 38, 41],
    poolGoals: 10,
    poolWinner: 1,
  },
  {
    id: 1,
    name: "Angel",
    email: "jangelroa@gmail.com",
    poolTeams: [1, 3, 7, 9, 11, 12, 13, 14, 22, 24, 28, 30, 38, 43, 50, 51],
    poolGoals: 6,
    poolWinner: 10,
  },
  {
    id: 2,
    name: "Roque Hernandez",
    email: "dreamsourcefilms@gmail.com",
    poolTeams: [1, 4, 7, 8, 11, 12, 14, 18, 19, 22, 30, 44, 31, 41, 43, 50],
    poolGoals: 5,
    poolWinner: 1,
  },
  {
    id: 3,
    name: "TEST Gerard Watson",
    email: "gerwatson@gmail.com",
    poolTeams: [1, 2, 3, 4, 11, 12, 13, 14, 19, 21, 22, 24, 20, 31, 38, 41],
    poolWinner: 10,
    poolGoals: 9,
  },
  {
    id: 4,
    name: "Angel2",
    email: "jangelroajobs@gmail.com",
    poolTeams: [4, 5, 8, 9, 14, 15, 16, 18, 21, 28, 30, 44, 20, 50, 51, 61],
    poolWinner: 3,
    poolGoals: 3,
  },
];

const calculateUserScores = (user) => {};

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

const paraElFormularioEnIngles =
  "Before submitting the form, make sure you selected 4 teams with number 1, 4 teams with number 2,  4 teams with number 3 and 4 teams with number 4.";
