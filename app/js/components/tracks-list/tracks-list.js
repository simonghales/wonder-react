'use strict';

import React                from 'react';

import Track                from '../track/track';
import TracksActions         from '../../actions/tracks.actions.react';
import TracksStore          from '../../stores/tracks.store.react';

class TracksList extends React.Component {

    constructor(props) {
        super(props);

        this._selectedTrack = null;

        this.state = {
          tracks: TracksStore.getTracks()
        };

        this._selectTrack = this._selectTrack.bind(this);

        TracksStore.listen((tracks) => {
            this.setState({
                tracks: tracks
            });
        });

    }

    _selectTrack(index) {

        TracksActions.trackSelected(index);

    }

    render() {

        var tracks = this.state.tracks;
        var tracksComponents = [];

        for (let i = 0, len = tracks.length; i < len; i++) {
            let track = tracks[i];
            tracksComponents.push(<Track track={track} key={track.position} selectTrack={this._selectTrack} />);
        }

        return (
            <div className="tracks-list">

                {tracksComponents}

            </div>
        );
    }

}

export default TracksList;
