import React from 'react'

import { Link } from 'react-router-dom'

import FoxbelMusic from '../../assets/images/foxbel-music.png'
import { Container } from './style'

export const NavBar = () => {
  return (
    <Container>
      <Link to="/">
        <img src={FoxbelMusic} alt='foxbel-logo' />
      </Link>
      

      <h2>Mi Librería</h2>
      <ul>
        <li><Link to='/'>Recientes</Link></li>
        <li><Link to='/'>Artistas</Link></li>
        <li><Link to='/'>Álbums</Link></li>
        <li><Link to='/'>Canciones</Link></li>
        <li><Link to='/'>Estaciones</Link></li>
      </ul>

      <h2>Playlist</h2>
      <ul>
        <li><Link to='/'>Metal</Link></li>
        <li><Link to='/'>Para bailar</Link></li>
        <li><Link to='/'>Rock 90's</Link></li>
        <li><Link to='/'>Baladas</Link></li>
      </ul>
    </Container>
  )
}