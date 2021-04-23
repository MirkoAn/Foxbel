import { ActionTypes } from "../constants/actionTypes"

const initialState = {
  search: 'eminem'
}

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH:
      return {...state, search: payload}
    default:
      return state;
  }
}