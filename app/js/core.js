import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
    modal: {},
    playedTracks: [],
    player: {},
    selectedTrack: null,
    starredTracks: [],
    tracks: [],
});