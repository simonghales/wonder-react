
import { List } from 'immutable'

export function setTracks(state, tracks) {
    const list = List(tracks)
    return state.set('tracks', list)
}

export function selectTrack(state, track) {
    return state.set('selectedTrack', track)
}

export function setStarredTracks(state, tracks) {
    const list = List(tracks)
    return state.set('starredTracks', list)
}

export function addStarredTrack(state, track) {
    let starredTracks = state.get('starredTracks');
    return state.set('starredTracks', starredTracks)
}

export function removeStarredTrack(state, track) {
    let starredTracks = state.get('starredTracks');
    return state.set('starredTracks', starredTracks)
}

export function setPlayedTracks(state, tracks) {
    const list = List(tracks)
    return state.set('playedTracks', list)
}

export function addPlayedTrack(state, track) {
    let playedTracks = state.get('playedTracks');
    return state.set('playedTracks', playedTracks)
}