'use strict';

import Reflux                   from 'reflux';
import CurrentTrackActions      from '../actions/current-track.actions.react';

const CurrentTrackStore = Reflux.createStore({

    listenables: CurrentTrackActions,

    init() {
        this.currentTrack = null;
    },

    throwError(err) {
        this.trigger(err);
    },

    getCurrentTrack() {
        return this.currentTrack;
    },

    onTrackSelected(track) {
        this.currentTrack = track;
        this.trigger(this.currentTrack);
    }

});

export default CurrentTrackStore;
