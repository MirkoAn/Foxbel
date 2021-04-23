import React from 'react'

import { Container, RedButton, Row, TransparentButton, Dots, Img } from './style'

import {MdPlayArrow} from 'react-icons/md'

import Adele from '../../assets/images/Adele.png'

export const Hero = () => {
  return (
    <Container>
      <Img>
        <img src={Adele} alt='artist-img' />
        <MdPlayArrow className='icon-play' size='120px' />
      </Img>
      <div className='info'>
        <h2>Adele 21</h2>
        <Row>
          <h3>Lo mejor de Adele</h3>
          <span>321,123 seguidores</span>
        </Row>
        <p>Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8
        </p>
        <Row>
          <RedButton>
            <a href='/'>Reproducir</a>
          </RedButton>
          <TransparentButton>
            <a href='/'>Seguir</a>
          </TransparentButton>
          <Dots>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </Dots>
        </Row>
      </div>
    </Container>
  )
}