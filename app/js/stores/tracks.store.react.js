'use strict';

import Reflux               from 'reflux';
import CurrentTrackActions  from '../actions/current-track.actions.react';
import TracksActions        from '../actions/tracks.actions.react';

const TracksStore = Reflux.createStore({

    listenables: TracksActions,

    init() {

        this.selectedTrack = null;
        this.tracks = this._getTracks();

    },

    getTracks() {
        return this.tracks;
    },

    throwError(err) {
        this.trigger(err);
    },

    onNextTrack(index) {

        let nextIndex = 0;

        if (index + 1 < this.tracks.length) {
            nextIndex = index + 1;
        }

        this.onTrackSelected(nextIndex);
    },

    onTrackSelected(index) {

        var selectedTrack = this.selectedTrack;
        var tracks = this.tracks;

        if(selectedTrack) {
            selectedTrack.states.active = false;
        }

        if(!tracks[index]) {
            return;
        }

        selectedTrack = tracks[index];

        selectedTrack.states.active = true;

        this.selectedTrack = selectedTrack;

        CurrentTrackActions.trackSelected(selectedTrack);

        this.trigger(this.tracks);

    },

    onTracksLoaded() {
        console.log("tracks loaded");
    },

    _getTracks() {
        let tracks = [];

        for (let i = 0; i < 99; i++) {
            tracks.push({
                position: i,
                track_data: {
                    artist: "Artist Name",
                    title: "Track Title : " + i
                },
                states: {
                    active: false,
                    large: (i === 0)
                }
            });
        }

        return tracks;

    }

});

export default TracksStore;
