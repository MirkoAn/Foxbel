import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const Row = styled.div`
  display: flex;
  width: 890px;
  gap: 22px;
  flex-flow: row wrap;
  font-family: ${fonttheme.font1};

  h3 {
    font-size: 14px;
    color: #555555;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray};
  }

  img {
    width: 160px;
    height: 160px;
  }
`

export const Img = styled.div`
  position: relative;

  .icon-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFFFFF;
    cursor: pointer;
  }
`

export const Cards = styled.div`
  h3 {
    max-width: 160px;
  }
  &:hover {
    opacity: 0.7;
  }
`