'use strict';

import React                from 'react';

import Track                from '../track/track';

class TracksList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tracks-list">

                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />
                <Track />

            </div>
        );
    }

}

export default TracksList;
