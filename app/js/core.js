import { Map, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
    tracks: {
        playedTracks: [],
        selectedTrack: null,
        starredTracks: [],
        tracks: [{
            'title': 'boop'
        }],
    },
    modal: {
        selected: ''
    },
    player: {
        state: ''
    },
});

