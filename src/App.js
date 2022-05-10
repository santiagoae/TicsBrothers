import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagVentas1 from "./components/PagVentas1";
import Funnel from "./components/Funnel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ticsKahoot" element={<PagVentas1 />} />
        <Route path="/entrenamientoGratuito" element={<Funnel />} />
      </Routes>
    </Router>
  );
}

export default App;
