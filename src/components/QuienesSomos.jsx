import React from 'react'
import imgQuienes from "../assets/quienesSomos.jpg"

function QuienesSomos() {
  return (
    <div className='contenedor'>
        <h1>¿QUIENES SOMOS?</h1>
        <img src={imgQuienes} alt="quienes" />
        <div>
          <p>Hola, somos Tics Brothers, 4 hermanos apasionados por las TICS, herramientas digitales y plataformas para llevar al siguiente nivel la educación, tanto presencial como virtual. </p>
          <p>Enseñamos a profesores, estudiantes y comunidad en general por medio de nuestro canal de YouTube.</p>
          <p>Somos autoridad en videos enseñando a utilizar videos como Kahoot, donde tenemos más de 1 Millón de visitas y en plataformas como: Genially, Canva, Thatquiz, Geogebra. Emaze, Khan Academy, Geogebra entre muchos otros.</p>
        </div>
        
    </div>
  )
}

export default QuienesSomos