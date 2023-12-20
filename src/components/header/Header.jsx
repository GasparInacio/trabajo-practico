import './header.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Main from '../main/Main'
import Busqueda from '../buscarSection/Busqueda'
import { FavoritosProvider } from '../../context/FavoritosContext'
import Favoritos from '../favoritos/Favoritos'

const Header = () => {
  return (
    <>
      <FavoritosProvider>
        <BrowserRouter>
          <header className="header">
            <nav className="navBar">
              <NavLink to='/' className='link'>
                Home
              </NavLink>
              <NavLink to='busqueda' className='link'>
                Buscar
              </NavLink>
              <NavLink to='favoritos' className='link'>
                Favoritos
              </NavLink>
            </nav>
          </header>
          <Routes>
            <Route index element={<Main />} />
            <Route path='busqueda' element={<Busqueda />} />
            <Route path='favoritos' element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </FavoritosProvider>
    </>
  )
}

export default Header