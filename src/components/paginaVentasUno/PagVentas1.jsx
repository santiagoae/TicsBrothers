import React from "react";
import Aprender from "./Aprender";
import Beneficios from "./Beneficios";
import CheckOut from "./CheckOut";
import ContenCurso from "./ContenCurso";
import Garantia from "./Garantia";
import Hero from "./Hero";
import Incluye from "./Incluye";
import Nav from "./Nav";
import PreguntasFrec from "./PreguntasFrec";
import PruebaSocial from "./PruebaSocial";
import QuienesSomos from "./QuienesSomos";
import wpp from "../../assets/wpp.png"

function pagVentas1() {
  return (
    <div >
      <div id="wpp">
        <a href="https://bit.ly/3FZkAtR" target="_blank"><img src={wpp} alt="wpp" /></a>
      </div>      
      <header id="header">
        <Nav />
      </header>
      <section id="hero">
        <Hero />
      </section>
      <section id="beneficios">
        <Beneficios />
      </section>
      <section id="vasAprender">
        <Aprender />
      </section>
      <section id="contenidoCurso">
        <ContenCurso />
      </section>
      <section id="incluye">
        <Incluye />
      </section>
      <section id="checkOut">
        <CheckOut />
      </section>
      <section id="pruebaSocial">
        <PruebaSocial />
      </section>
      <section id="quienesSomos">
        <QuienesSomos />
      </section>
      <section id="garantia">
        <Garantia />
      </section>
      {/* <section id="pregunFrec">
        <PreguntasFrec />
      </section> */}
    </div>
  );
}

export default pagVentas1;
