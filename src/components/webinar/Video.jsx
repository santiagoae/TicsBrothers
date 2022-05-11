import {useState, useEffect} from "react";


function Video(props) {

  const [mostrar, setMostrar] = useState(false);

  useEffect(()=>{
    const boton = setTimeout(()=>{
      setMostrar(true);
    }, 12000);

    return () => clearTimeout(boton);
  }, []);


  return (
    <div className="body">
      <div className="video-container">
        
          <iframe
            src="https://player.vimeo.com/video/680855862?h=70b12d8fa4&color=fefefe&portrait=0"
            // width="80%"
            // height="80%"
            className="tam-video"
            frameborder="0"
            allow="autoPlay; fullscreen;"
            allowfullscreen
          ></iframe>
        

        {/* <video
          className="tam-video"
          src="https://vimeo.com/680855862"
          autoPlay
          controls
          loop
        ></video> */}
        
        {mostrar && <a
          href="https://bit.ly/3weTWsA"
          target="_blank"
          className="btn"
        >
          IR AL ENTRENAMIENTO COMPLETO
        </a>}

      </div>
    </div>
  );
}

export default Video;
