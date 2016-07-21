import { PLAYER_TOGGLE, PLAYER_PLAY, PLAYER_PAUSE, PLAYER_SKIP } from '../constants/ActionTypes'
import * as playerFunctions from '../storeFunctions/player'
import { INITIAL_STATE } from '../core'

console.log("init state?", INITIAL_STATE);

export default function player(state = INITIAL_STATE.get('player'), action) {
    switch (action.type) {
        case PLAYER_TOGGLE:
            return playerFunctions.playerToggle(state)

        case PLAYER_PLAY:
            return playerFunctions.playerPlay(state)

        case PLAYER_PAUSE:
            return playerFunctions.playerPause(state)

        case PLAYER_SKIP:
            return playerFunctions.playerSkip(state)

        default:
            return state
    }
}