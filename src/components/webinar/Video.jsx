import { useState, useEffect } from "react";


function Video(props) {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const boton = setTimeout(() => {
      setMostrar(true);
    }, 1620000);

    return () => clearTimeout(boton);
  }, []);  

  return (
    <div className="body">
      <div className="video-container">        

        <iframe
          src="https://fast.wistia.net/embed/iframe/nm5pv1cod4"
          title="WEBINAR L Video"
          allow="autoplay; fullscreen"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          className="wistia_embed tam-video" 
          name="wistia_embed"
          msallowfullscreen
          width="640"
          height="360"
        ></iframe>        

        {mostrar && (
          <a href="https://bit.ly/3GWboqO" target="_blank" className="btn">
            QUIERO UNIRME AHORA
          </a>
        )}
      </div>
    </div>
  );
}

export default Video;
