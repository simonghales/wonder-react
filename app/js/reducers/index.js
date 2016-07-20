import { combineReducers } from 'redux'
import modal from './modal'
import player from './player'
import tracks from './tracks'

const rootReducer = combineReducers({
    modal,
    player,
    tracks
})

export default rootReducer