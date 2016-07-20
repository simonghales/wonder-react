import * as types from '../constants/ActionTypes'

export function setTracks(tracks) {
    return { type: types.SET_TRACKS, tracks }
}

export function selectTrack(track) {
    return { type: types.SELECT_TRACK, track }
}

export function setStarredTracks(tracks) {
    return { type: types.SET_STARRED_TRACKS, tracks }
}

export function addStarredTrack(track) {
    return { type: types.ADD_STARRED_TRACK, track }
}

export function removeStarredTrack(track) {
    return { type: types.REMOVE_STARRED_TRACK, track }
}

export function setPlayedTracks(tracks) {
    return { type: types.SET_PLAYED_TRACKS, tracks }
}

export function addPlayedTrack(track) {
    return { type: types.ADD_PLAYED_TRACK, track }
}

export function openModal(modalId) {
    return { type: types.OPEN_MODAL, modalId }
}

export function closeModal() {
    return { type: types.CLOSE_MODAL }
}

export function playerToggle() {
    return { type: types.PLAYER_TOGGLE }
}

export function playerPlay() {
    return { type: types.PLAYER_PLAY }
}

export function playerPause() {
    return { type: types.PLAYER_PAUSE }
}

export function playerSkip() {
    return { type: types.PLAYER_SKIP }
}