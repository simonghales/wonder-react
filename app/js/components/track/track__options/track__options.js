'use strict';

import React            from 'react';

class TrackOptions extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="track__options">
                <div className="track__options__icon">:</div>
                <ul className="track__options__list">
                    <li>
                        Star Track
                    </li>
                    <li>
                        Share
                    </li>
                    <li>
                        More Like This
                    </li>
                </ul>
            </div>
        );
    }

}

export default TrackOptions;
