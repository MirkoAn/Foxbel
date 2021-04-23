import React from 'react'

import {MdPerson} from 'react-icons/md'
import { Row } from './style'

export const User = () => {
  return (
    <Row>
      <MdPerson className='icon-user'/>
      <h3>Mirko F.</h3>
    </Row>
  )
}