import { ActionTypes } from '../constants/actionTypes'

const initialState = {
  song: {
    artistName: null,
    songTitle: null,
    albumImg: null,
    audio: null,
    isPlaying: false
  }
}

export const songReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SONG:
      return ({
        ...state,
        song: payload
      })
    default:
      return state;
  }
} 