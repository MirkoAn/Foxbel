import React, { useEffect, useRef, useState } from 'react'

import { Container, PlayerControls, Row, VolumeIcons } from './style'

import { setSong } from '../../redux/actions/albumActions'

import Slider from '@material-ui/core/Slider'

import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayCircleFilled,
  MdPauseCircleFilled,
  MdVolumeMute,
} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

export const ControlBar = () => {
  const album = useSelector(state => state.albums.albums[0])
  const searchQuery = useSelector(state => state.search) 
  const song = useSelector(state => state.song.song)
  
  const { artistName, songTitle, albumImg, audio, isPlaying } = song

  const [isPlay, setPlayPauseClicked] = useState(isPlaying)
  const [volume, setVolume] = useState(50)

  const audioElement = useRef()
  const dispatch = useDispatch()

  const handlePlay = () => {
    setPlayPauseClicked(!isPlay)
  }

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue)
  }

  useEffect(() => {
    if (album !== undefined) {
      dispatch(setSong({
        artistName: album.artist.name,
        songTitle: album.title_short,
        albumImg: album.album.cover_small,
        audio: album.preview,
      }))      
    }
  }, [searchQuery, album, dispatch])

  useEffect(() => {
    if (album !== undefined) {
      isPlay
      ? audioElement.current.play()
      : audioElement.current.pause()
        audioElement.current.volume = volume / 100
    }
  }, [album, dispatch, isPlaying, isPlay, volume])

  return (
    <Container>
      {
        album &&
        <img src={albumImg} alt='album-img' />
        
      }
      <Row>
        <div>
          {album &&
                    <>
                      <h3>{artistName}</h3>
                      <span>{songTitle}</span>
                      <audio ref={audioElement} src={audio}></audio>
                    </>
          }
        </div>
        <PlayerControls>
          <MdSkipPrevious
            style={{ cursor: 'pointer' }}
            size='36px' />
          {
            isPlay
            ? <MdPauseCircleFilled
              style={{cursor: 'pointer'}}
              onClick={handlePlay}
              size='48px'
              />
            : <MdPlayCircleFilled
              style={{cursor: 'pointer'}}
              onClick={handlePlay}
              size='48px'
              />
          }
          <MdSkipNext
            style={{cursor: 'pointer'}}
            size='36px'
          />
        </PlayerControls>
        <VolumeIcons>
          <MdVolumeMute size='36px' />
          <Slider
            style={{ color: 'white' }}
            value={volume}
            onChange={handleVolumeChange} />
        </VolumeIcons>
      </Row>
    </Container>
  )
}
