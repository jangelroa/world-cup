import React from "react";

const Rules = () => {
  return (
    <>
      <h1>Rules</h1>
      <div>
        {`Reglas: 
1) Seleccione 16 países de los 32 países participando en la Copa Mundial. 
2) Cada grupo de selección contiene 4 países y enumerado del 1 al 4 (ver imagen), donde 1 representa al mas fuerte (Primero de Grupo) y 4 al mas débil (Cuarto de Grupo). Entre paréntesis esta el numero que les corresponde en el  ranking global de la FIFA.
3) Cada participante debe elegir:
4 países Primeros de Grupo.
4 países Segundos de Grupo.
4 países Terceros de Grupo.
4 países Cuartos de Grupo.
4) Cada país seleccionado recibe 3 puntos por cada victoria, 1 punto por cada empate y 1 punto por cada gol*** marcado.
5) Escoge los número de goles en la Final, y El Ganador de la Final. 
6) La Apuesta será tramitada a través de un administrador.
7) La Apuesta se podrá editar (cambiar resultados) con fecha límite el día anterior al primer partido del mundial. Dicha fecha será también límite para la aceptación de nuevas Apuestas.
8) Tras realizar una Apuesta recibirás un email como recibo de la Apuesta realizada con un link para poder editar/cambiar dicha Apuesta.
9) Se podrán hacer tantas Apuestas como se deseen con el mismo email. Cambia el Nombre en el formulario en las distintas Apuestas para indicarnos que se trata de una nueva Apuesta y no de un cambio de una Apuesta existente. Ejemplo: 
        apuesta1 -> Email: Antonio@gmail.com,  Nombre: Antonio
        apuesta2 -> Email: Antonio@gmail.com,  Nombre: Antonio2
10) El ganador es el que acumule más puntos, y si hay un empate el ganador será el que escogió el ganador de la final, y si sigue el empate se definirá por el número de goles*** escogidos para la final (ganará la Apuesta que más se acerque al número de goles),.
11) Sigue los resultados del pool y del mundial en nuestra pagina web: https://worldcuppoolsf.surge.sh/

*** Se contabilizaran todos los goles (goles durante el tiempo de partido, goles en la posible prorroga y también goles en la posible tanda de penalties después de la prorroga).

Buena Suerte...`}
      </div>
    </>
  );
};

export default Rules;
