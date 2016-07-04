'use strict';

import React              from 'react';

import Header             from '../header/header';
import Footer             from '../footer/footer';

const propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object
    ])
};

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    renderChildren() {
        return React.cloneElement(this.props.children);
    }

    render() {
        return (
            <div className="site-wrapper">

                <Header />

                {this.renderChildren()}

                <Footer />

            </div>
        );
    }

}

Main.propTypes = propTypes;

export default Main;
