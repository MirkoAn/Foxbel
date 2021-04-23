import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setSong } from '../../redux/actions/albumActions'

import { MdPlayArrow } from 'react-icons/md'

import { Cards, Img, Row} from './style'


export const Card = () => {
  const albums = useSelector(state => state.albums.albums.slice(0, 10))

  const song = useSelector(state => state.song.song)

  const {isPlaying} = song

  const dispatch = useDispatch()

  const handleClick = (e) => {
    const parent = e.currentTarget
    const img = parent.children[0].children[0].src
    const name = parent.children[1].innerHTML
    const song = parent.children[2].innerHTML
    const audio = parent.children[3].src
    dispatch(setSong({
      artistName: name,
      songTitle: song,
      albumImg: img,
      audio: audio,
      isPlaying: true
    }))
  }
  
  return (
    <Row>
      {albums &&
      albums.map((album, index) => (
        <Cards style={{cursor: "pointer"}} id={index} key={index} onClick={handleClick}>
          <Img>
            <img src={album.album.cover_medium} alt={album.title} />
            <MdPlayArrow className='icon-play' size='64px' />
          </Img>
          <h3>{album.title_short}</h3>
          <span>{album.artist.name}</span>
          {
            isPlaying
              ? <audio src={album.preview} preload={'metadata'} autoPlay></audio>
              : <audio src={album.preview} preload={'metadata'} ></audio>
          }
        </Cards>
      )) }
    </Row>
  )
}