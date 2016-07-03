'use strict';

import React              from 'react';

class HeaderInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="site__header__info">

                <div className="site__header__nav">
                    <div className="icon"></div>
                </div>

                <div className="site__header__logo">
                    <a href="">
                        <div className="icon"></div>
                    </a>
                </div>

                <div className="site__header__social-link site__header__social-link--twitter">
                    <a href="">
                        <div className="icon"></div>
                    </a>
                </div>

                <div className="site__header__social-link site__header__social-link--soundcloud">
                    <a href="">
                        <div className="icon"></div>
                    </a>
                </div>

            </div>
        );
    }

}

export default HeaderInfo;
