import React from "react";
import { testimonio } from "../assets/testimonios/testimnio";
function PruebaSocial() {
  return (
    <div className="contenedor">    
      
        <img src={testimonio.uno} alt="img1" />
        <img src={testimonio.dos} alt="img2" />
        <img src={testimonio.tres} alt="img3" />
        <img src={testimonio.cuatro} alt="img4" />
        <img src={testimonio.cinco} alt="img5" />
        <img src={testimonio.seis} alt="img6" />        
      
    </div>
  );
}

export default PruebaSocial;
