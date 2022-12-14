import styled from "styled-components";
import { ThickLine, ThinLine } from "./smallComponents";

export const Rules = () => {
  return (
    <>
      <div className="rules-container">
        <h2>Rules</h2>
        <ThickLine />
        <div className="rules-list">
          <ol>
            <li>
              Each selected country receives 3 points for each win, 1 point for
              each draw, and 1 point for each goal*** scored.
            </li>
            <li>
              ***All goals will count (goals in regulation time, goals in
              possible extra time, and goals in possible penalty shootouts after
              extra time).
            </li>
            <li>
              All entries can be edited (make changes to selections) until{" "}
              <span style={{ color: "red" }}>
                Saturday November 19th, 8 pm PST
              </span>
              . This is also the deadline for the acceptance of new entries.
            </li>
            <li>
              The winner is the entry that accumulates the most points at the
              end of the Tournament.
            </li>
            <li>
              Tie Breaker: If there is a tie, the winner will be whoever chooses
              the winner of the final game. If there is still a tie, the winner
              will be the entry that correctly chose the number of goals***
              scored in the final match (or the entry that comes closest to the
              number of goals).
            </li>
            <li>
              All entries and changes must be submitted no later than{" "}
              <span style={{ color: "red" }}>
                Saturday November 19th, 8 pm PST
              </span>{" "}
              (the day before the first World Cup match).
            </li>
            <li>
              After submitting your entry, you will receive a confirmation email
              from the commissioner with a link allowing you to edit/change your
              selections until the deadline.
            </li>
            <li>Follow the pool and World Cup results here in our website.</li>
            <li>
              Click the ADD-POOL menu option to begin creating all your entries.
            </li>
          </ol>
          <br />
          <div>Good luck.</div>
        </div>
      </div>
    </>
  );
};

export const SpanishRules = () => {
  return (
    <>
      <div className="rules-container">
        <h2>Reglas</h2>
        <ThickLine />
        <div className="rules-list">
          <ol>
            <li>
              Cada pa??s seleccionado recibe 3 puntos por cada victoria, 1 punto
              por cada empate y 1 punto por cada gol*** marcado.
            </li>
            <li>
              *** Se contabilizaran todos los goles (goles durante el tiempo de
              partido, goles en la posible prorroga y tambi??n goles en la
              posible tanda de penalties despu??s de la prorroga).
            </li>
            <li>
              Las apuestas se podr??n editar (cambiar resultados) con fecha
              l??mite el{" "}
              <span style={{ color: "red" }}>
                Sabado 19 de Noviembre, 8pm PST
              </span>
              . Dicha fecha ser?? tambi??n l??mite para la aceptaci??n de nuevas
              apuestas.
            </li>
            <li>
              La apuesta ganadora ser?? la que acumule mas puntos al final del
              Torneo.
            </li>
            <li>
              Para romper el empate: En caso de empate, el ganador ser?? el que
              eligi?? a el ganador de la final. Si el empate continuase, el
              ganador ser?? la apuesta que acert?? correctament el n??mero de
              goles*** anotados para la final (o la apuesta que m??s se acerque
              al n??mero de goles).
            </li>
            <li>
              Todas las apuestas deben ser enviadas no mas tarde de el{" "}
              <span style={{ color: "red" }}>
                Sabado 19 de Noviembre, 8pm PST
              </span>
              (el d??a anterior al primer partido del mundial).
            </li>
            <li>
              Tras realizar una apuesta recibir??s un email como confirmaci??n de
              la apuesta realizada con un link para poder editar/cambiar dicha
              apuesta hasta la fecha limite que es el Sabado 19 de Noviembre,
              8pm PST (el d??a anterior al primer partido del mundial).
            </li>
            <li>
              Sigue el pool y los resultados del mundial aqui en nuestra pagina
              web.
            </li>
            <li>
              Pincha en la opci??n ADD-POOL del menu para empezar a crear todas
              tus apuestas.
            </li>
          </ol>
          <br />
          <div>Buena Suerte.</div>
        </div>
      </div>
    </>
  );
};

const OLDSPANISHRules = () => {
  return (
    <>
      <div className="rules-container">
        <h2>Reglas</h2>
        <ThickLine />
        <div className="rules-list">
          <ol>
            <li>
              Seleccione 16 pa??ses de los 32 pa??ses participando en la Copa
              Mundial.
            </li>
            <li>
              Cada grupo de selecci??n contiene 4 pa??ses y enumerado del 1 al 4
              (ver imagen), donde 1 representa al mas fuerte (Primero de Grupo)
              y 4 al mas d??bil (Cuarto de Grupo). Entre par??ntesis esta el
              numero que les corresponde en el ranking global de la FIFA (ver
              ranking FIFA mas abajo).
            </li>
            <li>
              Cada participante debe elegir:
              <ul>
                <li>4 pa??ses Primeros de Grupo.</li>
                <li>4 pa??ses Segundos de Grupo.</li>
                <li>4 pa??ses Terceros de Grupo.</li>
                <li>4 pa??ses Cuartos de Grupo.</li>
              </ul>
            </li>
            <li>
              Cada pa??s seleccionado recibe 3 puntos por cada victoria, 1 punto
              por cada empate y 1 punto por cada gol*** marcado.
            </li>
            <li>
              Escoge los n??mero de goles en la Final, y El Ganador de la Final.
            </li>
            <li>La Apuesta ser?? tramitada a trav??s de un administrador.</li>
            <li>
              La Apuesta se podr?? editar (cambiar resultados) con fecha l??mite
              el d??a anterior al primer partido del mundial. Dicha fecha ser??
              tambi??n l??mite para la aceptaci??n de nuevas Apuestas.
            </li>
            <li>
              Tras realizar una Apuesta recibir??s un email como recibo de la
              Apuesta realizada con un link para poder editar/cambiar dicha
              Apuesta.
            </li>
            <li>
              Se podr??n hacer tantas Apuestas como se deseen con el mismo email.
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
              El ganador es el que acumule m??s puntos, y si hay un empate el
              ganador ser?? el que escogi?? el ganador de la final, y si sigue el
              empate se definir?? por el n??mero de goles*** escogidos para la
              final (ganar?? la Apuesta que m??s se acerque al n??mero de goles).
            </li>
            <li>
              Sigue los resultados del pool y del mundial en nuestra pagina web.
            </li>
          </ol>
          <div>
            *** Se contabilizaran todos los goles (goles durante el tiempo de
            partido, goles en la posible prorroga y tambi??n goles en la posible
            tanda de penalties despu??s de la prorroga).
          </div>
          <br />
          <div>Buena Suerte.</div>
        </div>
      </div>
    </>
  );
};

export default Rules;
