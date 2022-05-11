import imagenes from "../../assets/Imagenes";

const Card = (props) => {
  return (
    <div className="boxCards">
      <div className="tamCards">
        <img src={imagenes.Alejo} className="card-img-top" alt="Alejandro" />
        <h1 className="card-title">Alejandro</h1>
        <p className="card-text">
          Comunicador audiovisual y productor de TV, Me apasiona todo lo que
          está dentro del cuadro, la imagen.
        </p>
        <a
          href="https://www.instagram.com/alekisho/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-warning btn-primary"
        >
          Encuentranos aquí !!
        </a>
      </div>

      <div className="tamCards">
        <img src={imagenes.Andres} className="card-img-top" alt="Alejandro" />
        <h1 className="card-title">Andres</h1>
        <p className="card-text">
          Docente, apasionado de las TIC y creo en la educación como motor de
          cambio social.
        </p>
        <a
          href="https://www.linkedin.com/in/andr%C3%A9s-felipe-ram%C3%ADrez-s%C3%A1nchez-00961715/?originalSubdomain=co"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-warning btn-primary"
        >
          Encuentranos aquí !!
        </a>
      </div>

      <div className="tamCards">
        <img src={imagenes.Trecho} className="card-img-top" alt="Alejandro" />
        <h1 className="card-title">Sergio</h1>
        <p className="card-text">
          Community manager, Experto en SEO, apasionado a la fotografía y los
          retratos.
        </p>
        <a
          href="https://www.instagram.com/trecho.op/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-warning btn-primary"
        >
          Encuentranos aquí !!
        </a>
      </div>
    </div>
  );
};

export default Card;
