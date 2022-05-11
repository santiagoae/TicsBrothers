import React from "react";
import imgMoneda from "../../assets/garantia.png";

function Garantia() {
  return (
    <div className="contenedor">
      <img src={imgMoneda} alt="selloGarantia" />
      <div>
        <h1>7 DIAS DE GARANTIA</h1>
        <p>
          Te vamos a dar una garantía de 7 días, donde tu dinero está asegurado.
        </p>
        <p>
          Puedes ver el entrenamiento completo y si sientes que la información
          que te estamos entregando no va a cambiar tu vida y la de tus
          estudiantes, te devolvemos el 100% de tu dinero.
        </p>
        <p>Así de seguros estamos que tenemos un curso excelente.</p>
        <a href="https://bit.ly/3weTWsA" target="_blanc">
          {" "}
          <button>UNIRME AHORA</button>{" "}
        </a>
      </div>
    </div>
  );
}

export default Garantia;
