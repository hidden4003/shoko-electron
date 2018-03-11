// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Events from '../events';
import logoImage from '../images/logo.png';
import closeWindowIcon from '../icons/16-Window-Close.png';
import maximizeWindowIcon from '../icons/16-Window-Expand.png';
import minimizeWindowIcon from '../icons/16-Window-Minimize.png';
import RequestQueue from './RequestQueue';

class SiteNavbar extends Component {
  static propTypes = {
    closeWindow: PropTypes.func.isRequired,
    maximizeWindow: PropTypes.func.isRequired,
    minimizeWindow: PropTypes.func.isRequired
  };

  render() {
    const { closeWindow, maximizeWindow, minimizeWindow } = this.props;

    return (
      <nav
        className="site-navbar navbar navbar-default navbar-fixed-top navbar-mega"
        role="navigation"
      >
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
            data-toggle="menubar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="hamburger-bar" />
          </button>
          <button
            type="button"
            className="navbar-toggler collapsed"
            data-target="#site-navbar-collapse"
            data-toggle="collapse"
          >
            <i className="icon wb-more-horizontal" aria-hidden="true" />
          </button>
          <div className="navbar-brand navbar-brand-center">
            <img className="navbar-brand-logo" src={logoImage} alt="" />
            <span className="navbar-brand-text hidden-xs-down">
              {' '}
              Shoko Desktop
            </span>
          </div>
          <button
            type="button"
            className="navbar-toggler collapsed"
            data-target="#site-navbar-search"
            data-toggle="collapse"
          >
            <span className="sr-only">Toggle Search</span>
            <i className="icon wb-search" aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-container container-fluid">
          <div
            className="collapse navbar-collapse navbar-collapse-toolbar"
            id="site-navbar-collapse"
          >
            <ul className="nav navbar-toolbar">
              <li className="nav-item hidden-float" id="toggleMenubar">
                <a
                  className="nav-link"
                  data-toggle="menubar"
                  href=""
                  role="button"
                >
                  <i className="icon hamburger hamburger-arrow-left">
                    <span className="sr-only">Toggle menubar</span>
                    <span className="hamburger-bar" />
                  </i>
                </a>
              </li>
              <li className="nav-item hidden-sm-down" id="toggleFullscreen">
                <a
                  className="nav-link icon icon-fullscreen"
                  data-toggle="fullscreen"
                  href=""
                  role="button"
                >
                  <span className="sr-only">Toggle fullscreen</span>
                </a>
              </li>
              <li className="nav-item hidden-float">
                <a
                  className="nav-link icon wb-search"
                  data-toggle="collapse"
                  href=""
                  data-target="#site-navbar-search"
                  role="button"
                >
                  <span className="sr-only">Toggle Search</span>
                </a>
              </li>
            </ul>
            <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
              <li className="nav-item">
                <a
                  className="nav-link menu-icon"
                  role="button"
                  href=""
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  <RequestQueue />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={minimizeWindow}
                  href=""
                >
                  <img src={minimizeWindowIcon} alt="Close" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={maximizeWindow}
                  href=""
                >
                  <img src={maximizeWindowIcon} alt="Close" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  role="button"
                  onClick={closeWindow}
                  href=""
                >
                  <img src={closeWindowIcon} alt="Close" />
                </a>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-search-overlap"
            id="site-navbar-search"
          >
            <form role="search">
              <div className="form-group">
                <div className="input-search">
                  <i
                    className="input-search-icon wb-search"
                    aria-hidden="true"
                  />
                  <input
                    className="form-control"
                    name="site-search"
                    placeholder="Search..."
                    type="text"
                  />
                  <button
                    type="button"
                    className="input-search-close icon wb-close"
                    data-target="#site-navbar-search"
                    data-toggle="collapse"
                    aria-label="Close"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeWindow: e => {
      e.preventDefault();
      dispatch({ type: Events.EXIT });
    },
    maximizeWindow: e => {
      e.preventDefault();
      dispatch({ type: Events.WINDOW_MAXIMIZE });
    },
    minimizeWindow: e => {
      e.preventDefault();
      dispatch({ type: Events.WINDOW_MINIMIZE });
    }
  };
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavbar);
