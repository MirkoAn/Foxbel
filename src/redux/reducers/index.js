import { combineReducers } from 'redux'
import { albumReducer } from './albumReducer'
import { searchReducer } from './searchReducer'
import { songReducer } from './songReducer'

const reducers = combineReducers({
  albums: albumReducer,
  search: searchReducer,
  song: songReducer,
})

export default reducers