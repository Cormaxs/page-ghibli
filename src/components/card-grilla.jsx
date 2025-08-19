import { Link } from 'react-router-dom';
import './cards-grilla.css';

 function CardGrilla({ peliculas }) {
    return (
        <>
            {
                peliculas.map((pelicula) => {
                    return (
                     <section id="section-grilla">
                        <Link to={`/pelicula/${pelicula.id}`}>
                            <div className="conteiner-card" key={pelicula.id}>
                         
                            <h3>{pelicula.titulo}</h3>
                           
                            <img src={`${pelicula.imagen}`} alt={`imagen de ${pelicula.titulo}`} />
                           
                            </div> </Link>
                            </section>
                       
                    )
                })
            }
        </>
    )
}

export default CardGrilla;