/*
    This code comes from Vincent Lab
    And it has a video version linked here: https://www.youtube.com/watch?v=95wAbrQAm5g
*/

// Import dependencies
// const fs = require("fs");
// const csv = require("csvtojson");
// const { Parser } = require("json2csv");
import fs from "fs";
import csv from "csvtojson";
import { Parser } from "json2csv";

(async () => {

    // Load the users
    const users = await csv().fromFile("inputResponses.csv");

    // Show the users
    // console.log(users);

    // Modify the users
    // users[0].PAGADO = "YES";

    const constructedUser = users.map((user,index) => {
        console.log(" ");

        const userFirsts = user["firstsOfGroup"];
        const strFirsts = userFirsts.split("(");
        strFirsts.shift();
        console.log(userFirsts)
        const fifaFirsts = strFirsts.map(ele => Number(ele.split(")")[0]));
        
        const userSeconds = user["secondsOfGroup"];
        const strSeconds = userSeconds.split("(");
        strSeconds.shift();
        console.log(userSeconds)
        const fifaSeconds = strSeconds.map(ele => Number(ele.split(")")[0]));
        
        const userThirds = user["thirdsOfGroup"];
        const strThirds = userThirds.split("(");
        strThirds.shift();
        console.log(userThirds)
        const fifaThirds = strThirds.map(ele => Number(ele.split(")")[0]));
        
        const userFourths = user["fourthsOfGroup"];
        const strFourths = userFourths.split("(");
        strFourths.shift();
        console.log(userFourths)
        const fifaFourths = strFourths.map(ele => Number(ele.split(")")[0]));
        
        const fifas = [
            ...fifaFirsts,
            ...fifaSeconds,
            ...fifaThirds,
            ...fifaFourths,
        ];
        // console.log({fifas})
        
        const rawPoolWinner = user["rawPoolWinner"];
        const poolWinner = Number(rawPoolWinner.split("(")[1].split(")")[0]);
        console.log({rawPoolWinner})
        console.log({poolWinner: Number(rawPoolWinner.split("(")[1].split(")")[0])})

        console.log("OUTPUT", {
            id: index,
            name: user["userName"],
            email: user["useEmail"],
            poolTeams: fifas,
            poolWinner,
            poolGoals: Number(user["poolGoals"]),
            paid: user["paid"]
        });
        console.log(" ");

        return {
            id: index,
            name: user["userName"],
            email: user["useEmail"],
            poolTeams: fifas,
            poolWinner,
            poolGoals: Number(user["poolGoals"]),
            paid: user["paid"]
        };


    });

    // Saved the users
    // const usersInCsv = new Parser({ fields: ["Timestamp","email","name","firstsOfGroup","secondsOfGroup","thirdsOfGroup","fourthsOfGroup","poolWinner","poolGoals","paid"] }).parse(users);
    // fs.writeFileSync("users.csv", usersInCsv);

    // fs.writeFile ("users.json", JSON.stringify(users), function(err) {
    //     if (err) throw err;
    //     console.log('complete');
    //     }
    // );
    fs.writeFile ("outputConstructedUser.json", JSON.stringify(constructedUser), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
    // constructedUser.json it will be our output json file
})();