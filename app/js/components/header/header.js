'use strict';

import React              from 'react';

import HeaderInfo         from './header__info/header__info';

import Player             from '../player/player'; // TODO: -- work out why you can't use / path
import PlayerProgress     from '../player-progress/player-progress';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="site__header">

                <PlayerProgress />

                <div className="site__header__main">

                    <div className="site__header__info-wrapper">

                        <HeaderInfo />

                    </div>

                    <div className="site__header__player-wrapper">

                        <Player />

                    </div>

                </div>

            </header>
        );
    }

}

export default Header;
