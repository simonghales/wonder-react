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
                    <li className="option">
                        Star Track
                    </li>
                    <li className="divider"></li>
                    <li className="option">
                        Share
                    </li>
                    <li className="divider"></li>
                    <li className="option">
                        More Like This
                    </li>
                </ul>
            </div>
        );
    }

}

export default TrackOptions;
