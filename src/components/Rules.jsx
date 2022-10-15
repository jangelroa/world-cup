import React from "react";
import styled from "styled-components";
import { ThickLine, ThinLine } from "./smallComponents";

const RulesContainer = styled.div`
  padding: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Rules = () => {
  return (
    <>
      <RulesContainer>
        <h2>Rules</h2>
        <ThickLine />
        <div className="rules-list">
          <ol>
            <li>
              Seleccione 16 países de los 32 países participando en la Copa
              Mundial.
            </li>
            <li>
              Cada grupo de selección contiene 4 países y enumerado del 1 al 4
              (ver imagen), donde 1 representa al mas fuerte (Primero de Grupo)
              y 4 al mas débil (Cuarto de Grupo). Entre paréntesis esta el
              numero que les corresponde en el ranking global de la FIFA (ver
              ranking FIFA mas abajo).
            </li>
            <li>
              Cada participante debe elegir:
              <ul>
                <li>4 países Primeros de Grupo.</li>
                <li>4 países Segundos de Grupo.</li>
                <li>4 países Terceros de Grupo.</li>
                <li>4 países Cuartos de Grupo.</li>
              </ul>
            </li>
            <li>
              Cada país seleccionado recibe 3 puntos por cada victoria, 1 punto
              por cada empate y 1 punto por cada gol*** marcado.
            </li>
            <li>
              Escoge los número de goles en la Final, y El Ganador de la Final.
            </li>
            <li>La Apuesta será tramitada a través de un administrador.</li>
            <li>
              La Apuesta se podrá editar (cambiar resultados) con fecha límite
              el día anterior al primer partido del mundial. Dicha fecha será
              también límite para la aceptación de nuevas Apuestas.
            </li>
            <li>
              Tras realizar una Apuesta recibirás un email como recibo de la
              Apuesta realizada con un link para poder editar/cambiar dicha
              Apuesta.
            </li>
            <li>
              Se podrán hacer tantas Apuestas como se deseen con el mismo email.
              Cambia el Nombre en el formulario en las distintas Apuestas para
              indicarnos que se trata de una nueva Apuesta y no de un cambio de
              una Apuesta existente. Ejemplo:
              <div style={{ marginLeft: "30px" }}>
                apuesta1 -{">"} Email: Antonio@gmail.com, Nombre: Antonio
              </div>
              <div style={{ marginLeft: "30px" }}>
                apuesta1 -&gt; Email: Antonio@gmail.com, Nombre: Antonio2
              </div>
            </li>
            <li>
              El ganador es el que acumule más puntos, y si hay un empate el
              ganador será el que escogió el ganador de la final, y si sigue el
              empate se definirá por el número de goles*** escogidos para la
              final (ganará la Apuesta que más se acerque al número de goles).
            </li>
            <li>
              Sigue los resultados del pool y del mundial en nuestra pagina web.
            </li>
          </ol>
          <div>
            *** Se contabilizaran todos los goles (goles durante el tiempo de
            partido, goles en la posible prorroga y también goles en la posible
            tanda de penalties después de la prorroga).
          </div>
          <br />
          <div>Buena Suerte...</div>
        </div>
        <br />
        <ThinLine />
      </RulesContainer>
    </>
  );
};

export default Rules;
