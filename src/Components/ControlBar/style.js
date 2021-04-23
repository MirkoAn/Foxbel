import styled from 'styled-components'

import * as fonttheme from '../../styles/variables/FontThemes'

export const Container = styled.div`
  display: flex;
  background-color: #EB5757;
  color: #FFFFFF;
  font-family: ${fonttheme.font1};

  img {
    width: 100px;
    height: 100px;  
  }

  h3 {
    font-size: 14px;
  }
  
  span {
    font-size: 12px;
    font-weight: 400;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 32px;

  .iconContainer {
    display: flex;
    align-items: center;
  }
`

export const VolumeIcons = styled.div`
  width: 120px;
  display: flex;
  gap: 10px;
  align-items: center;
`

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`