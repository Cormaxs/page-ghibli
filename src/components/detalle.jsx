
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import './detalle.css';

const Detalle = ({ peliculas }) => {
    // 1. Usa useParams para obtener los parámetros de la URL.
    const { id } = useParams();
    const navigate = useNavigate();
  
    // 2. Busca la película en el array de datos usando el ID de la URL.
    //    El ID de useParams es un string, así que lo convertimos a número.
    const pelicula = peliculas.find(p => p.id === parseInt(id));
  
    // 3. Maneja el caso en el que la película no se encuentre (ej. si el usuario escribe una URL incorrecta).
    if (!pelicula) {
      return (
        <div className="not-found-container">
          <h2>Película no encontrada</h2>
          <p>Lo sentimos, no pudimos encontrar la película que buscas.</p>
          <button onClick={() => navigate('/')}>Volver a la lista</button>
        </div>
      );
    }
  
    // 4. Muestra los detalles de la película
    return (
      <div className="detalle-container">
          <button onClick={() => navigate(-1)}>← Volver</button>
        <div className="detalle-content">
          <img src={pelicula.imagen} alt={pelicula.titulo} className="detalle-imagen" />
          <div className="detalle-info">
            <p className='titulo'><strong> {pelicula.tituloOriginal}</strong></p>
            <p><strong>Sinopsis:</strong> {pelicula.sinopsis}</p>
           
            <p><strong>Año:</strong> {pelicula.año}</p>
            <p><strong>Director:</strong> {pelicula.director}</p>

            <p><strong>Categoría:</strong> {pelicula.categoria}</p>
          </div>
        </div>
      </div>
    );
  };

export default Detalle;