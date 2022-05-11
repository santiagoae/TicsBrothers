import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagVentas1 from "./components/paginaVentasUno/PagVentas1";
import Funnel from "./components/webinar/Funnel";
import Home from "./components/home/Homee"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ticsKahoot" element={<PagVentas1 />} />
        <Route path="/entrenamientoGratuito" element={<Funnel />} />
        <Route path='/' element={<Home />}/>        
      </Routes>
    </Router>
  );
}

export default App;
