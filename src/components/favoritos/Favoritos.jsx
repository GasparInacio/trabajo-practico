import React from 'react';
import { useFavoritos } from '../../context/FavoritosContext';
import { useState } from 'react';
import './favoritos.css'

function Favoritos() {
    const { favoritos, eliminarDeFavoritos } = useFavoritos();
    const imgUrl = 'https://image.tmdb.org/t/p/original/'

    const [expandedId, setExpandedId] = useState(null);
    const toggleExpanded = (id) => {
        setExpandedId(id === expandedId ? null : id);
    };

    const handleEliminarDeFavoritos = (peliculaId) => {
        eliminarDeFavoritos(peliculaId);
    };

    return (
        <>
            <section className="favoritos">
                <h2 className="tituloFavoritos">Mis películas favoritas</h2>
                <div className="containerFavoritos">
                    {favoritos.length > 0 ? (
                        favoritos.map((pelicula) => (
                            <div
                                className={`card ${expandedId === pelicula.id ? 'expanded' : ''}`}
                                onClick={() => toggleExpanded(pelicula.id)}
                                key={pelicula.id}
                            >
                                <div className="imgContainer">
                                    <img src={`${imgUrl + pelicula.poster_path}`} alt={pelicula.title} className="img" />
                                </div>
                                <h3 className="title">{pelicula.title}</h3>
                                {expandedId === pelicula.id && (
                                    <div className='desplegable'>
                                        <p className='overview'>{pelicula.overview}</p>
                                        <button className='btnEliminar' onClick={()=>handleEliminarDeFavoritos(pelicula.id)}>
                                            Quitar de favoritos
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="titleVacio">No tienes películas en tus favoritos</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Favoritos;


