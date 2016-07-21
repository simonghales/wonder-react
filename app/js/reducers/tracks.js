import { SET_TRACKS, SELECT_TRACK, SET_STARRED_TRACKS, ADD_STARRED_TRACK,
    REMOVE_STARRED_TRACK, SET_PLAYED_TRACKS, ADD_PLAYED_TRACK } from '../constants/ActionTypes'
import * as tracksFunctions from '../storeFunctions/tracks'
import { INITIAL_STATE } from '../core'

export default function tracks(state = INITIAL_STATE.get('tracks'), action) {
    switch (action.type) {
        case SET_TRACKS:
            return tracksFunctions.setTracks(state, action.tracks);

        case SELECT_TRACK:
            return tracksFunctions.selectTrack(state, action.track);

        case SET_STARRED_TRACKS:
            return tracksFunctions.setStarredTracks(state, action.tracks);

        case ADD_STARRED_TRACK:
            return tracksFunctions.addStarredTrack(state, action.track);

        case REMOVE_STARRED_TRACK:
            return tracksFunctions.removeStarredTrack(state, action.track);

        case SET_PLAYED_TRACKS:
            return tracksFunctions.setPlayedTracks(state, action.tracks);

        case ADD_PLAYED_TRACK:
            return tracksFunctions.addPlayedTrack(state, action.track);

        default:
            return state
    }
}