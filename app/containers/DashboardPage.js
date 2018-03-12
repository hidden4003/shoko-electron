// @flow
import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import SiteMenuBar from '../components/SiteMenuBar';
import SiteNavbar from '../components/SiteNavbar';
import ErrorBoundary from '../components/ErrorBoundary';

export default class HomePage extends Component {
  componentDidMount() {
    if (document && document.body) {
      document.body.className =
        'site-navbar-small mm-wrapper site-menubar-fold';
    }
  }

  render() {
    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <SiteNavbar />
        <SiteMenuBar />
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </div>
    );
  }
}
