import React from "react";
import imgHero from "../../assets/imgHero.jpg";

function Hero() {
  return (
    <div className="contenedor">
      <h2>
        ¿ERES PROFESOR?
        <span className="cambioColorTexto">¡ESTO ES PARA TI!</span>
      </h2>
      <p>
        💥 Conviérte tu clase en una verdadera experiencia de aprendizaje sin
        esforzarte, domina Kahoot y tus clases no volverán a ser aburridas.
      </p>
      <img src={imgHero} alt="imgHero" />
    </div>
  );
}

export default Hero;
