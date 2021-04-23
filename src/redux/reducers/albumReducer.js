import { ActionTypes } from "../constants/actionTypes"

const initialState = {
  albums: []
}

export const albumReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_ALBUMS:
      return {...state, albums: payload}
    default:
      return state
  }
}
