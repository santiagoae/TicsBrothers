import React from "react";
import mediosPago from "../../assets/mediosPago/mediosPago";
import "animate.css";

function CheckOut() {
  return (
    <div className="contenedor ">
      <h1>
        ACCEDE A TODO POR SOLO <br />
        <span className="precio">$29</span>
      </h1>
      <div className="checkOutButton">
        <a href="https://bit.ly/3weTWsA" target="_blanc">          
          <button>COMPRAR AHORA</button>
        </a>
      </div>
      <div>
        <div className="mediosPago">
          <img src={mediosPago.visa} alt="american" />
          <img src={mediosPago.master} alt="american" />
        </div>
        <div className="mediosPago">
          <img src={mediosPago.american} alt="american" />
          <img src={mediosPago.baloto} alt="american" />
        </div>
        <div className="mediosPago">
          <img src={mediosPago.oxxo} alt="american" />
          <img src={mediosPago.pagoEfectivo} alt="american" />
        </div>
        <div className="mediosPago">
          <img src={mediosPago.paypal} alt="american" />
          <img src={mediosPago.pse} alt="american" />
        </div>
        <div className="mediosPago">
          <img src={mediosPago.sencillito} alt="american" />
          <img src={mediosPago.sepa} alt="american" />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
