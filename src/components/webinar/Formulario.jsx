import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//firebase config
import {db} from "../../Firebase"
import {collection, addDoc} from "firebase/firestore"

function Formulario(props) {
  const dbRef=db;
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    email: "",
  });

  function manejador(e) {
    const newDatos = { ...datos };
    newDatos[e.target.id] = e.target.value;
    setDatos(newDatos);
  }


  const submit =  async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(dbRef,"bdtics"), {
        ...datos
      })
    } catch (error) {
      console.log(error);
    }
    navigate("/cursoGratis");
  };

  return (
    <div className="form-container">
      <div className="formulario">
        <form onSubmit={(e) => submit(e)}>
          <input
            className="form-control"
            onChange={(e) => manejador(e)}
            type="email"
            id="email"
            value={datos.email}
            placeholder="Ingresa tu correo electronico"
          />
          <button type="submit" className="btn ">
            VER CLASE GRATUITA
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
