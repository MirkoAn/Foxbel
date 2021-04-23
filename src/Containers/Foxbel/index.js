import React from 'react'

import { Main } from '../Main'
import { NavBar } from '../../Components/NavBar'
import { ControlBar } from '../../Components/ControlBar'

import { Row } from './style'

export const Foxbel = () => {
  return (
    <>
      <Row>
        <NavBar />
        <Main />
      </Row>
      <ControlBar />
    </>
  )
}