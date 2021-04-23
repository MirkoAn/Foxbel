import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'
import * as colors from '../../styles/variables/Colors'

export const Search = styled.div`
  height: 36px;
  width: 524px;
  display: grid;
  grid-template-columns: 1fr auto;
  overflow: hidden;

  input[type=search]::-webkit-search-cancel-button {
    display: none;
  }

  input[type=search] {
    padding: 6px 0 0 16px;
    margin-bottom: 6px;
    grid-column: 1/3;
    grid-row: 1/2;
    border-radius: 100px;
    border: 1px solid #828282;
    border-radius: 100px;
    font-family: ${fonttheme.font1};
    color: ${colors.gray};

    &:focus {
      outline: none;
    }
}
`

export const Icon = styled.div`
  z-index: 2;
  grid-column: 2/3;
  grid-row: 1/2;
  margin: 9px 9px 9px 0;
  width: 18px;
  height: 18px;
  border: none;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  color: ${colors.gray}  
`