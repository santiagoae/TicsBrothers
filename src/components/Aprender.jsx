import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

function Aprender() {
  return (
    <div className="contenedor">
      <h1>LO QUE VAS A APRENDER</h1>
      <div>
        <ul>
          <li>
          👉 Tips de cómo hacer preguntas
          </li>
          <br />
          <li>
          👉 Vas a encontrar contenido propio, no lo vas a encontrar en ningún
            otro lado a partir de nuestra experiencia.
          </li>
          <br />
          <li>
          👉 Incrustar videos y manejo adecuado del tiempo.
          </li>
          <br />
          <li>
          👉 Aprenderás cómo tus estudiantes pueden temblar de emoción creando
            las preguntas correctas en Kahoot.
          </li>
          <br />
          <li>
          👉 Otras herramientas tipo Kahoot
          </li>          
        </ul>
      </div>
    </div>
  );
}

export default Aprender;
