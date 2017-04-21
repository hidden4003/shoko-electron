// @flow
import React, { Component } from 'react';
import Home from '../components/Home';

export default class HomePage extends Component {
  componentDidMount() {
    if (document && document.body) {
      document.body.className = 'site-navbar-small  mm-wrapper site-menubar-fold';
    }
  }

  render() {
    return (
      <Home />
    );
  }
}
