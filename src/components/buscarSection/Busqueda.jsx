import { useState, useEffect } from "react"
import { CardBusqueda } from "./CardBusqueda"
import './busqueda.css'
import { useFavoritos } from '../../context/FavoritosContext'




const Busqueda = () => {

    const [busqueda, setBusqueda] = useState('')
    const [peliculaBuscada, setPeliculaBuscada] = useState([])
    const busquedaUrl = 'https://api.themoviedb.org/3/search/movie'
    const apiKey = 'd6b720f916f6ec5b3077c8fc33ca5f12'
    const urlSearch = `${busquedaUrl}?query=${busqueda}&api_key=${apiKey}`
    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas(urlSearch)
    }

    function fetchPeliculas(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPeliculaBuscada(data.results);
                console.log(data.results)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchPeliculas(urlSearch);
    }, []);

    //favoritos
    const { agregarAFavoritos, favoritos } = useFavoritos();

    const handleAgregarFavorito = (pelicula) => {
        agregarAFavoritos(pelicula);
    }


    return (
        <>
            <form className='form' onSubmit={handleSubmit} >
                <input
                    className='input'
                    type="text"
                    placeholder='Matrix, Shrek, Titanic...'
                    value={busqueda}
                    onChange={handleInputChange}
                />
                <button className="btn" type='submit'>Buscar</button>
            </form>
            <div className="busquedaContainer">
                {peliculaBuscada.map((pelicula) => (
                    <CardBusqueda
                        key={pelicula.id}
                        id={pelicula.id}
                        pelicula={pelicula}
                        agregarFavorito={handleAgregarFavorito}
                        esFavorito={favoritos.some((fav) => fav.id === pelicula.id)}
                    />
                ))}
            </div>
        </>

    )
}

export default Busqueda 