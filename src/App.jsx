import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardGrilla from './components/card-grilla.jsx';
import Detalle from './components/detalle.jsx';
import { peliculasGhibli } from "./db/db.js";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra la lista de películas */}
        <Route path="/" element={<main className='main'><CardGrilla peliculas={peliculasGhibli} /></main>} />
        
        <Route path="/pelicula/:id" element={<Detalle peliculas={peliculasGhibli} />} />
      </Routes>
    </Router>
  );
}

export default App;