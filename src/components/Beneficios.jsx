import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

function Beneficios() {
  return (
    <div className="contenedor">
      <div>
        <ul>
          <li>
          <span className="Icons"><FontAwesomeIcon icon={faCircleDot} /></span>
            ¿Tus estudiantes pierden interés con facilidad en tus clases?
          </li>
          <br />
          <li>
            <span className="Icons"><FontAwesomeIcon icon={faCircleDot} /></span>
            ¿No sabes cómo motivar a tus estudiantes?
          </li>
          <br />
          <li>
          <span className="Icons"><FontAwesomeIcon icon={faCircleDot} /></span>
            ¿Sientes que los alumnos de tus colegas profesores saltan de la
            emoción con ellos y no contigo?
          </li>
          <br />
          <li>
          <span className="Icons"><FontAwesomeIcon icon={faCircleDot} /></span>
            ¿Necesitas reforzar un tema de clase desde otro punto de vista,
            mientras tus estudiantes se divierten?
          </li>
          <br />
        </ul>
      </div>
      <h1>ENTONCES ESTE CURSO ES PARA TI</h1>
    </div>
  );
}

export default Beneficios;
