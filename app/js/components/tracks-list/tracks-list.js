'use strict';

import React                from 'react';

import Track                from '../track/track';

class TracksList extends React.Component {

    constructor(props) {
        super(props);

        this._selectedTrack = null;

        this.state = {
          tracks: this._getTracks()
        };

        this._selectTrack = this._selectTrack.bind(this);

    }

    _getTracks() {
        let tracks = [];

        for (let i = 0; i < 99; i++) {
            tracks.push({
                position: i,
                track_data: {
                    artist: "Artist Name",
                    title: "Track Title"
                },
                states: {
                    active: false,
                    large: (i === 0)
                }
            });
        }

        return tracks;

    }

    _selectTrack(index) {

        if(this._selectedTrack) {
            this._selectedTrack.states.active = false;
        }

        if(!this.state.tracks[index]) {
            return;
        }

        this._selectedTrack = this.state.tracks[index];

        this._selectedTrack.states.active = true;

        this.setState({
            tracks: this.state.tracks
        });

    }

    render() {

        return (
            <div className="tracks-list">

                {this.state.tracks.map((track, i) => {
                    return (
                        <Track track={track} key={track.position} selectTrack={this._selectTrack} />
                    );
                })}

            </div>
        );
    }

}

export default TracksList;
