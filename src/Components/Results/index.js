import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card'
import { Container } from './style'

export const Results = () => {

  const albums = useSelector(state => state.albums.albums)

  return (
    <Container>
      <h1>Resultados</h1>
        {albums &&
          <Card />
        }
    </Container>
  )
}
