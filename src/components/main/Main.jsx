import { useState, useEffect } from 'react'
import {Card} from '../card/Card'
import './main.css'
import { useFavoritos } from '../../context/FavoritosContext'




const Main = () => {
  const [pelicula, setPelicula] = useState([])
  const initialUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=d6b720f916f6ec5b3077c8fc33ca5f12&page=1'

  function fetchPeliculas(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPelicula(data.results);
        console.log(data.results)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchPeliculas(initialUrl);
  }, []);

  // favoritos

  const { agregarAFavoritos, favoritos } = useFavoritos();

  const handleAgregarFavorito = (pelicula) => {
    agregarAFavoritos(pelicula);
  }


  return (
    <main className="main">
      <h1 className='h1'>Bienvenido a tu buscador de películas</h1>
      <p className="p">Películas populares de esta semana</p>

      {pelicula.map((pelicula)=>(
        <Card 
      key={pelicula.id}
      id={pelicula.id}
      pelicula={pelicula}
      agregarFavorito={handleAgregarFavorito}
      esFavorito={favoritos.some((fav) => fav.id === pelicula.id)}
       />
      ))}
      
    </main>    
  )
}

export default Main