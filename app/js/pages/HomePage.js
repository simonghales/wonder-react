'use strict';

import React              from 'react';
import {Link}             from 'react-router';
import DocumentTitle      from 'react-document-title';

import Header             from '../components/header/header';
import Footer             from '../components/footer/footer';
import TracksList         from '../components/tracks-list/tracks-list';

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="page-body page-body--default">

          <TracksList />

        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
