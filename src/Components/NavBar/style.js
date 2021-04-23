import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const Container = styled.div`
  width: 330px;
  height: 900px;
  padding-left: 40px;
  color: #FFFFFF;
  font-family: ${fonttheme.font1};
  background-color: ${colors.darkred};

  h2 {
    font-size: 22px;
  }

  img {
    width: 250px;
    height: 59px;
    margin: 50px 0px 30px 0;
    cursor: pointer;
  }

  ul {
    margin-top: 8px;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 25px;
  }

  a {
    font-weight: 400;
    color: #FFFFFF;

    &:hover {
      color: ${colors.lightred}
    }
  }
`