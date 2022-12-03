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

    // Load the responses
    const responses = await csv().fromFile("inputResponsesPool16.csv");

    // Show the responses
    console.log({responses});

    // Modify the responses
    // responses[0].PAGADO = "YES";

    const constructedUser = responses.map((response,index) => {
        console.log(" ");

        const responseTeamsPool16 = response["selectTeamsPool16"];
        const COMOLOLLAMO = responseTeamsPool16.split("(");
        COMOLOLLAMO.shift();
        console.log("COMOLOLLAMO", COMOLOLLAMO);
        const fifaeamsPool16 = COMOLOLLAMO.map(ele => Number(ele.split(")")[0]));
        console.log("fifaeamsPool16", fifaeamsPool16);


        // const responseFirsts = response["firstsOfGroup"];
        // const strFirsts = responseFirsts.split("(");
        // strFirsts.shift();
        // console.log(responseFirsts)
        // const fifaFirsts = strFirsts.map(ele => Number(ele.split(")")[0]));
        
        // const responseSeconds = response["secondsOfGroup"];
        // const strSeconds = responseSeconds.split("(");
        // strSeconds.shift();
        // console.log(responseSeconds)
        // const fifaSeconds = strSeconds.map(ele => Number(ele.split(")")[0]));
        
        // const responseThirds = response["thirdsOfGroup"];
        // const strThirds = responseThirds.split("(");
        // strThirds.shift();
        // console.log(responseThirds)
        // const fifaThirds = strThirds.map(ele => Number(ele.split(")")[0]));
        
        // const responseFourths = response["fourthsOfGroup"];
        // const strFourths = responseFourths.split("(");
        // strFourths.shift();
        // console.log(responseFourths)
        // const fifaFourths = strFourths.map(ele => Number(ele.split(")")[0]));
        
        // const fifas = [
        //     ...fifaFirsts,
        //     ...fifaSeconds,
        //     ...fifaThirds,
        //     ...fifaFourths,
        // ];
        // console.log({fifas})
        
        const rawPoolWinner = response["rawPoolWinner"];
        const poolWinner = Number(rawPoolWinner.split("(")[1].split(")")[0]);
        console.log({rawPoolWinner})
        console.log({poolWinner: Number(rawPoolWinner.split("(")[1].split(")")[0])})

        console.log("OUTPUT", {
            id: index,
            name: response["userName"],
            email: response["userEmail"],
            poolTeams: fifaeamsPool16,
            poolWinner,
            poolGoals: Number(response["poolGoals"]),
            paid: response["paid"]
        });
        console.log(" ");

        return {
            id: index,
            name: response["userName"],
            email: response["userEmail"],
            poolTeams: fifaeamsPool16,
            poolWinner,
            poolGoals: Number(response["poolGoals"]),
            paid: response["paid"]
        };


    });

    // Saved the responses
    // const responsesInCsv = new Parser({ fields: ["Timestamp","email","name","firstsOfGroup","secondsOfGroup","thirdsOfGroup","fourthsOfGroup","poolWinner","poolGoals","paid"] }).parse(responses);
    // fs.writeFileSync("responses.csv", responsesInCsv);

    // fs.writeFile ("responses.json", JSON.stringify(responses), function(err) {
    //     if (err) throw err;
    //     console.log('complete');
    //     }
    // );

    fs.writeFile ("outputConstructedUserPool16.json", JSON.stringify(constructedUser), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );

    // constructedUser.json it will be our output json file
})();