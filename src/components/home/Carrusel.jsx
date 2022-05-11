import "../../styles/Carrusel.css";
import Img from "../../assets/Imagenes";


const Carrusel = () => {
  return (
    <div className="carruselBox">
      <div className="tamCarrusel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a
                href="https://www.youtube.com/watch?v=pANtMqNWBek"
                target="_blank"
              >
                <img src={Img.P} className="d-block w-100" alt="kahoot" />
              </a>
            </div>
            <div className="carousel-item">
              <a
                href="https://www.youtube.com/watch?v=HAb7j5QIWXw"
                target="_blank "
              >
                <img src={Img.Ingles} className="d-block w-100" alt="ingles" />
              </a>
            </div>
            <div className="carousel-item">
              <a
                href="https://www.youtube.com/watch?v=5n_4fco0Qjs"
                target="_blank"
              >
                <img src={Img.Mapas} className="d-block w-100" alt="mapas" />
              </a>
            </div>
            <div className="carousel-item">
              <a
                href="https://www.youtube.com/watch?v=BUT7RtVKIbA"
                target="_blank"
              >
                <img src={Img.Cosas} className="d-block w-100" alt="cosasg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
