import { ActionTypes } from '../constants/actionTypes'

export const setAlbum = (albums) => {
  return {
    type: ActionTypes.SET_ALBUMS,
    payload: albums,
  }
}

export const setSearch = (search) => {
  return {
    type: ActionTypes.SET_SEARCH,
    payload: search
  }
}

export const setSong = (song) => {
  return {
    type: ActionTypes.SET_SONG,
    payload: song
  }
}