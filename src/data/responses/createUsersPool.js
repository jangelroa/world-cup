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
    const users = await csv().fromFile("Mundial_de_Futbol_2022_Esp.csv");

    // Show the users
    // console.log(users);

    // Modify the users
    // users[0].PAGADO = "YES";

    const constructedUser = users.map((user,index) => {

        const userPrimeros = user["Primeros de Grupo (selecciona 4 equipos)"];
        const strPrimeros = userPrimeros.split("(");
        strPrimeros.shift();
        console.log(userPrimeros)
        const fifaPrimeros = strPrimeros.map(ele => Number(ele.split(")")[0]));
        
        const userSegundos = user["Segundos de Grupo (selecciona 4 equipos)"];
        const strSegundos = userSegundos.split("(");
        strSegundos.shift();
        console.log(userSegundos)
        const fifaSegundos = strSegundos.map(ele => Number(ele.split(")")[0]));
        
        const userTerceros = user["Terceros de Grupo (selecciona 4 equipos)"];
        const strTerceros = userTerceros.split("(");
        strTerceros.shift();
        console.log(userTerceros)
        const fifaTerceros = strTerceros.map(ele => Number(ele.split(")")[0]));
        
        const userCuartos = user["Cuartos de Grupo (selecciona 4 equipos)"];
        const strCuartos = userCuartos.split("(");
        strCuartos.shift();
        console.log(userCuartos)
        const fifaCuartos = strCuartos.map(ele => Number(ele.split(")")[0]));
        
        const fifas = [
            ...fifaPrimeros,
            ...fifaSegundos,
            ...fifaTerceros,
            ...fifaCuartos,
        ];
        console.log(fifas)
        
        const rawPoolWinner = user["Equipo ganador en la final"];
        const poolWinner = Number(rawPoolWinner.split("(")[1].split(")")[0]);
        console.log({rawPoolWinner})
        console.log({poolWinner: Number(rawPoolWinner.split("(")[1].split(")")[0])})



        return {
            id: index,
            name: user["Nombre"],
            email: user["Email Address"],
            poolTeams: fifas,
            poolWinner,
            poolGoals: Number(user["Numero de Goles en la final. Se contabilizaran todos los goles (goles durante el tiempo de partido, goles en la posible prorroga y también goles en la posible tanda de penalties después de la prorroga)."]),
            paid: user["PAGADO"]
        };


    });

    // Saved the users
    // const usersInCsv = new Parser({ fields: ["Timestamp","Email Address","Nombre","Primeros de Grupo (selecciona 4 equipos)","Segundos de Grupo (selecciona 4 equipos)","Terceros de Grupo (selecciona 4 equipos)","Cuartos de Grupo (selecciona 4 equipos)","Equipo ganador en la final","Numero de Goles en la final. Se contabilizaran todos los goles (goles durante el tiempo de partido, goles en la posible prorroga y también goles en la posible tanda de penalties después de la prorroga).","PAGADO"] }).parse(users);
    // fs.writeFileSync("users.csv", usersInCsv);

    fs.writeFile ("users.json", JSON.stringify(users), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
    fs.writeFile ("constructedUser.json", JSON.stringify(constructedUser), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
})();