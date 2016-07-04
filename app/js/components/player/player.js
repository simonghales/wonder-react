'use strict';

var classNames =                require('classnames');

import React                    from 'react';
import CurrentTrackStore        from '../../stores/current-track.store.react';
import PlayerStore              from '../../stores/player.store.react';
import TracksActions             from '../../actions/tracks.actions.react';
import PlayerActions             from '../../actions/player.actions.react';

class Player extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTrack: CurrentTrackStore.getCurrentTrack()
        };

        CurrentTrackStore.listen((track) => {
            this.setState({
               currentTrack: track
            });
        });

        this._nextTrack = this._nextTrack.bind(this);
        this._togglePlaying = this._togglePlaying.bind(this);

    }

    render() {

        var playerClasses = classNames(
            'player',
            this.props.className,
            {
                'state--disabled': !this.state.currentTrack,
                'state--empty': !this.state.currentTrack
            }
        );

        var track = this.state.currentTrack;

        return (
            <div className={playerClasses}>

                <div className="player__info">
                    <h3 className="player__info__text">
                        <a className="title" href="">{track ? track.track_data.title : ''}</a>
                        <span className="divider"></span>
                        <a className="artist" href="">{track ? track.track_data.artist : ''}</a>
                    </h3>
                </div>

                <div className="player__controls">
                    <div className="player__btn player__btn--star">
                        <div className="player__btn__icon"></div>
                    </div>
                    <div className="player__btn player__btn--share">
                        <div className="player__btn__icon"></div>
                    </div>
                    <div className="player__btn player__btn--toggle" onClick={this._togglePlaying}>
                        <div className="player__btn__icon"></div>
                    </div>
                    <div className="player__btn player__btn--skip" onClick={this._nextTrack}>
                        <div className="player__btn__icon"></div>
                    </div>
                </div>


            </div>
        );
    }

    _nextTrack() {
        if(!this._isPlayerEnabled()) return;
        let index = this.state.currentTrack.position;
        TracksActions.nextTrack(index);
    }

    _togglePlaying() {
        PlayerActions.togglePlaying();
    }

    _isPlayerEnabled() {
        if(!this.state.currentTrack) return false;
        return true;
    }

}

export default Player;
