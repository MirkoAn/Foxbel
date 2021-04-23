import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'


export const Row = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #4F4F4F;
    font-size: 16px;
    font-weight: 400;
    font-family: ${fonttheme.font1};
  }

  .icon-user {
    color: ${colors.mainred};
  }
`