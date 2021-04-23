import React from 'react'

import { SearchBar } from '../../Components/SearchBar'
import { User } from '../../Components/User'
import { Hero } from '../../Components/Hero'
import { Results } from '../../Components/Results'

import { Container, Row } from './style'

export const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <SearchBar />
          <User />
        </Row>
        <Hero />
        <Results />
      </Container>
    </>
  )
}