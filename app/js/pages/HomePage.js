'use strict';

import React                           from 'react';
import {Link}                          from 'react-router';
import DocumentTitle                   from 'react-document-title';
import { TracksListContainer }         from '../components/tracks-list/tracks-list';

const tracksData = require('../data/tracks.json');

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

          <TracksListContainer />

        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
