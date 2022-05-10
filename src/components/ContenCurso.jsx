import React from "react";
import contCurso from "../assets/mockup/contCurso.png";

function ContenCurso() {
  return (
    <div className="contenedor">
      <h1>CONTENIDO DEL CURSO</h1>
      <div className="contenAcordeonImg">
        <div className="tamAccordion">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header " id="headingOne">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                 <span className="tamMod">Modulo 1</span> 
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Esto es 🌎 Enseña con Kahoot</p>
                  <br />
                  <p>¿Qué vas a aprender? 📜</p>
                  <br />
                  <p>Importancia de las TIC 💻 en el aula</p>
                  <br />
                  <p>¿Porqué los juegos? 🎲</p>
                  <br />
                  <p>5️⃣ Beneficios de jugar en el aula</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span className="tamMod">Modulo 2</span> 
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>👨‍🏫 Motivación y gamificación 👩‍🏫</p>
                  <br />
                  <p>¿Por qué Kahoot? 🧡💛❤️💙</p>
                  <br />
                  <p>5️⃣ Beneficios de jugar Kahoot</p>
                  <br />
                  <p>⚠️ Requerimientos técnicos iniciales ⚠️</p>
                  <br />
                  <p>🔴 Creando el primer juego</p>
                  <br />
                  <p>Consejos finales del primer juego 👀</p>
                  <br />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span className="tamMod">Modulo 3</span> 
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Niveles de competencia de los jugadores 🥇🥈🥉</p>
                  <br />
                  <p>8️⃣ Tips para crear preguntas atractivas</p>
                  <br />
                  <p>Enunciados bien estructurados 📖✏️</p>
                  <br />
                  <p>Incrustando videos 🎞️ y manejo adecuado del tiempo ⏳</p>
                  <br />
                  <p>
                    Insertar imágenes, fórmulas y preguntas de otros kahoots 📷
                  </p>
                  <br />
                  <p>Creando un juego con 1️⃣5️⃣ preguntas avanzadas</p>
                  <br />
                  <p>Es tu turno 🤝</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <span className="tamMod">Modulo 4</span> 
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse "
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>Reportes y otras plataformas 📱</p>
                  <br />
                  <p>
                    Búsqueda avanzada de buenos kahoots 🖥️ jugarlos y editarlos
                  </p>
                  <br />
                  <p>Quizziz, Socrative, Quizlet 📱</p>
                  <br />
                  <p>¡Es tu hora de impactar! 🤩</p> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={contCurso} alt="mockup" />
      </div>
      
    </div>
  );
}

export default ContenCurso;
