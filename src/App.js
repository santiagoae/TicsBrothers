import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagVentas1 from "./components/paginaVentasUno/PagVentas1";
import Home from "./components/home/Homee";
import UnPasoMas from "./components/webinar/UnPasoMas";
import CursoGratis from "./components/webinar/CursoGratis";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticsKahoot" element={<PagVentas1 />} />
        <Route exact path="/unPasoMas" element={<UnPasoMas />} />
        <Route path="/cursoGratis" element={<CursoGratis />} />
      </Routes>
    </Router>
  );
}

export default App;
