'use strict';

var classNames =            require('classnames');

import React                from 'react';
import TrackOptions         from './track__options/track__options';
import CurrentTrackActions  from '../../actions/current-track.actions.react';

class Track extends React.Component {

    constructor(props) {
        super(props);

        this._selectTrack = this._selectTrack.bind(this);

    }

    _selectTrack(e) {
        this.props.selectTrack(this.props.track.position);
    }

    render() {

        var btnClass = classNames(
            'track-wrapper',
            this.props.className,
            {
                'track-wrapper--large': this.props.track.states.large,
                'state--active': this.props.track.states.active
            }
        );

        return (
            <div className={btnClass} onClick={this._selectTrack}>

                <div className="track">

                    <img className="track__image"
                         src="http://media.wonder.fm/media/photos/daniela-andrade.jpg.505x505_q85.jpg" alt="Artist Image"/>

                    <div className="track__overlay-full"></div>
                    <div className="track__overlay-top"></div>
                    <div className="track__overlay-bottom"></div>

                    <div className="track__top-left">
                        <div className="track__pos">{this.props.track.position + 1}</div>
                    </div>

                    <div className="track__top-right">
                        <div className="track__star">*</div>
                    </div>

                    <div className="track__bottom">
                        <div className="track__details">
                            <div className="track__title">
                                <a href="">{this.props.track.track_data.title}</a>
                            </div>
                            <div className="track__artist">
                                <a href="">{this.props.track.track_data.artist}</a>
                            </div>
                        </div>
                    </div>

                    <div className="track__bottom-right">
                        <TrackOptions />
                    </div>

                    <div className="track__centre">
                        |>
                    </div>

                </div>

            </div>
        );
    }

}

Track.propTypes = {
    name: React.PropTypes.string,
    track: React.PropTypes.object
}

Track.defaultProps = {
    name: "boop"
}

export default Track;
