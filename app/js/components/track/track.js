'use strict';

import React from 'react';

class Track extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="track-wrapper">

                <div className="track">

                    <div className="track__top-left">
                        Top left
                    </div>

                    <div className="track__top-right">
                        Top right
                    </div>

                    <div className="track__bottom">
                        Bottom
                    </div>

                    <div className="track__bottom-right">
                        Right
                    </div>

                </div>

            </div>
        );
    }

}

export default Track;
