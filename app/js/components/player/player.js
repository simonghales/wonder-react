'use strict';

import React from 'react';

class Player extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="player state--disabled">

                <div className="player__btn player__btn--star">
                    <div className="player__btn__icon"></div>
                </div>
                <div className="player__btn player__btn--share">
                    <div className="player__btn__icon"></div>
                </div>
                <div className="player__btn player__btn--toggle">
                    <div className="player__btn__icon"></div>
                </div>
                <div className="player__btn player__btn--skip">
                    <div className="player__btn__icon"></div>
                </div>

            </div>
        );
    }

}

export default Player;
