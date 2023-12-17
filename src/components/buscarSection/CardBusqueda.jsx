import { useState } from 'react'

const CardBusqueda = ({ pelicula, agregarFavorito, esFavorito }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/original/'
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // favoritos
  const handleToggleFavorito = () => {
    agregarFavorito(pelicula);
  }



  return (
    <>
      <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
        <div className="imgContainer">
          <img src={`${imgUrl + pelicula.poster_path}`} alt={pelicula.title} className="img" />
        </div>
        <h3 className="title">{pelicula.title}</h3>
        {expanded && (
          <div className='desplegable'>
            <p className='overview'>{pelicula.overview}</p>
            <button onClick={handleToggleFavorito} className='btnCard'>
              {esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
          </div>
        )}

      </div>
    </>
  )
}

export { CardBusqueda }