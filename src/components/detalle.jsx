import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import './detalle.css';

const Detalle = ({ peliculas }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const pelicula = peliculas.find(p => p.id === parseInt(id));

    if (!pelicula) {
        return (
            <div className="not-found-container">
                <h2>Película no encontrada</h2>
                <p>Lo sentimos, no pudimos encontrar la película que buscas.</p>
                <button onClick={() => navigate('/')}>Volver a la lista</button>
            </div>
        );
    }

    return (
        <div 
            className="detalle-container" 
            style={{ '--bg-image': `url(${pelicula.imagen})` }}
        >
            <div className="detalle-overlay">
                <div className="detalle-content">
                    <img src={pelicula.imagen} alt={pelicula.titulo} className="detalle-imagen" />
                    <div className="detalle-info">
                        <p className='titulo'><strong>{pelicula.tituloOriginal}</strong></p>
                        <p className='sinopsis'><strong>Sinopsis:</strong> {pelicula.sinopsis}</p>
                        <p className='categoria'> {pelicula.categoria} </p>
                        {/* Agrupamos los botones para un mejor control de estilo */}
                        <div className="botones-container">
                            <a className='descargar' target='_blank' href={`${pelicula.descargar}`}>Descargar</a>
                            <button className='volver' onClick={() => navigate(-1)}>← Volver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detalle;