'use strict';

import Reflux               from 'reflux';
import PlayerActions        from '../actions/player.actions.react';

const PlayerStore = Reflux.createStore({

    listenables: PlayerActions,

    init() {
        this.state = {
            playing: false
        };
    },

    onTogglePlaying() {
        this.state.playing = !this.state.playing;
        this.trigger(this.state);
    },

    _throwError(err) {
        this.trigger(err);
    },

});

export default PlayerStore;
