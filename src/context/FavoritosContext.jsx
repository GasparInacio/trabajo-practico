import { createContext, useContext, useState, useEffect } from "react"



const FavoritosContext = createContext()

export const useFavoritos = () => {
    return useContext(FavoritosContext)
};

export const FavoritosProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([]);
    

    const agregarAFavoritos = (pelicula) => {
        setFavoritos([...favoritos, pelicula]);
    };

    const eliminarDeFavoritos = (peliculaId) => {
        const nuevaListaFavoritos = favoritos.filter((pelicula) => pelicula.id !== peliculaId);
        setFavoritos(nuevaListaFavoritos)
    };

    const value = {
        favoritos,
        agregarAFavoritos,
        eliminarDeFavoritos,
    };

    return (
        <FavoritosContext.Provider value={value}>
            {children}
        </FavoritosContext.Provider>
    );
};