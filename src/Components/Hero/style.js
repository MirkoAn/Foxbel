import styled from 'styled-components'

import AdeleWallPaper from '../../assets/images/adele-wallpaper.png'

import * as colors from '../../styles/variables/Colors'
import * as fonttheme from '../../styles/variables/FontThemes'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 890px;
  height: 250px;
  margin-bottom: 40px;
  color: #FFFFFF;
  font-family: ${fonttheme.font1};

  .info {
    height: inherit;
    padding: 40px 21px 30px 32px;
    background: url(${AdeleWallPaper});
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
  }

  span {
    font-size: 10px;
    font-weight: 400;
    color: ${colors.darkred};
  }

  p {
    margin-top: 20px;
    margin-bottom: 54px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
  }

`

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;

  a {
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
  }
`

export const RedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 117px;
  height: 31px;
  border-radius: 100px;
  background: ${colors.mainred};
`

export const TransparentButton = styled(RedButton)`
  background: transparent;
  border: 1px solid #EB5757;

  &:hover {
    background: ${colors.mainred};

    a {
      color: #FFFFFF;
    }
  }

  a {
    color: ${colors.mainred};
  }
`

export const Dots = styled.div`
  display: flex;
  cursor: pointer;
  gap: 4px;

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #FFFFFF;
  }
`

export const Img = styled.div`
  position: relative;
  height: inherit;

  .icon-play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    color: #FFFFFF;
    cursor: pointer;
  }

`