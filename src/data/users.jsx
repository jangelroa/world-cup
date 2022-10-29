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
    name: "TEST Gerard Watson",
    email: "gerwatson@gmail.com",
    poolTeams: [1, 2, 3, 4, 11, 12, 13, 14, 19, 21, 22, 24, 20, 31, 38, 41],
    poolWinner: 10,
    poolGoals: 9,
    paid: "",
  },
  {
    id: 3,
    name: "Angel",
    email: "jangelroa@gmail.com",
    poolTeams: [1, 3, 7, 9, 11, 12, 13, 14, 22, 24, 28, 30, 38, 43, 50, 51],
    poolWinner: 10,
    poolGoals: 6,
    paid: "",
  },
  {
    id: 4,
    name: "Angel2",
    email: "jangelroajobs@gmail.com",
    poolTeams: [4, 5, 8, 9, 14, 15, 16, 18, 21, 28, 30, 44, 20, 50, 51, 61],
    poolWinner: 3,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 5,
    name: "TEST Gerard Watson2",
    email: "gerwatson@gmail.com",
    poolTeams: [1, 3, 7, 8, 10, 11, 15, 18, 21, 24, 28, 44, 31, 41, 43, 61],
    poolWinner: 3,
    poolGoals: 4,
    paid: "",
  },
  {
    id: 6,
    name: "Gerry Larry",
    email: "michelettijacob@gmail.com",
    poolTeams: [1, 2, 3, 4, 10, 11, 12, 13, 21, 22, 28, 44, 20, 31, 41, 50],
    poolWinner: 9,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 7,
    name: "Larry Gerry",
    email: "michelettijacob@gmail.com",
    poolTeams: [3, 4, 5, 7, 11, 12, 14, 18, 19, 21, 26, 44, 31, 38, 41, 43],
    poolWinner: 3,
    poolGoals: 2,
    paid: "",
  },
  {
    id: 8,
    name: "Moe Shmoe",
    email: "michelettijacob@gmail.com",
    poolTeams: [1, 5, 8, 9, 13, 14, 16, 18, 21, 24, 28, 30, 31, 41, 51, 61],
    poolWinner: 2,
    poolGoals: 6,
    paid: "",
  },
  {
    id: 9,
    name: "Lomo Joe",
    email: "michelettijacob@gmail.com",
    poolTeams: [1, 2, 4, 7, 10, 11, 12, 18, 22, 28, 30, 44, 38, 41, 43, 50],
    poolWinner: 10,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 10,
    name: "Moe Lomo",
    email: "michelettijacob@gmail.com",
    poolTeams: [2, 5, 8, 9, 11, 13, 15, 16, 19, 24, 26, 28, 20, 38, 43, 50],
    poolWinner: 4,
    poolGoals: 5,
    paid: "",
  },
  {
    id: 11,
    name: "Alberto",
    email: "alberto.galet@gmail.com",
    poolTeams: [1, 4, 5, 7, 10, 11, 14, 18, 21, 24, 26, 28, 31, 38, 41, 43],
    poolWinner: 7,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 12,
    name: "Roque Hernandez",
    email: "roque@roque.video",
    poolTeams: [1, 4, 7, 9, 11, 13, 14, 18, 19, 22, 28, 44, 31, 41, 43, 61],
    poolWinner: 1,
    poolGoals: 5,
    paid: "",
  },
  {
    id: 13,
    name: "TITO",
    email: "jangelroa@gmail.com",
    poolTeams: [3, 4, 5, 8, 11, 12, 13, 14, 24, 26, 28, 30, 43, 50, 51, 61],
    poolWinner: 9,
    poolGoals: 2,
    paid: "",
  },
  {
    id: 14,
    name: "KIKE",
    email: "jangelroa@gmail.com",
    poolTeams: [4, 5, 7, 8, 12, 13, 14, 15, 22, 24, 26, 30, 43, 50, 51, 61],
    poolWinner: 11,
    poolGoals: 5,
    paid: "",
  },
  {
    id: 15,
    name: "POPO",
    email: "jangelroa@gmail.com",
    poolTeams: [1, 2, 3, 4, 12, 14, 16, 18, 26, 28, 30, 44, 20, 31, 38, 41],
    poolWinner: 3,
    poolGoals: 3,
    paid: "",
  },
  {
    id: 16,
    name: "LOLO",
    email: "jangelroa@gmail.com",
    poolTeams: [1, 3, 5, 7, 11, 12, 15, 18, 21, 22, 28, 30, 20, 50, 51, 61],
    poolWinner: 10,
    poolGoals: 33,
    paid: "",
  },
  {
    id: 17,
    name: "Ramon Moreno",
    email: "nomar98@yahoo.com",
    poolTeams: [1, 2, 4, 7, 11, 12, 13, 15, 21, 24, 26, 28, 20, 31, 41, 43],
    poolWinner: 7,
    poolGoals: 6,
    paid: "",
  },
  {
    id: 18,
    name: "Vida L",
    email: "vlynum@gmail.com",
    poolTeams: [1, 3, 4, 5, 11, 13, 16, 18, 19, 22, 24, 28, 31, 38, 43, 61],
    poolWinner: 1,
    poolGoals: 2,
    paid: "",
  },
  {
    id: 19,
    name: "Mr. Director007",
    email: "davgalvez8@gmail.com",
    poolTeams: [1, 2, 3, 4, 10, 11, 12, 13, 19, 21, 24, 28, 20, 31, 38, 43],
    poolWinner: 3,
    poolGoals: 4,
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
