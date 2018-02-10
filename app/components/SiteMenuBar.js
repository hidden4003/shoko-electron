// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SiteMenuBar extends Component {
  static handleMouseOver() {
    if (document && document.body) {
      document.body.classList.toggle('site-menubar-hover', true);
    }
  }

  static handleMouseOut() {
    if (document && document.body) {
      document.body.classList.toggle('site-menubar-hover', false);
    }
  }

  render() {
    const { pathname } = this.props.router.location;
    const classNormal = 'site-menu-item';
    const classNormalSub = 'site-menu-item has-sub';
    const classActive = 'site-menu-item open active';
    const classActiveSub = 'site-menu-item has-sub open active';

    return (
      // Disable expand on hover for now
      // onMouseOver={SiteMenuBar.handleMouseOver} onMouseOut={SiteMenuBar.handleMouseOut}
      <div className="site-menubar mm-menu mm-hasnavbar-bottom-1">
        <div className="mm-navbar mm-navbar-bottom mm-navbar-bottom-1 mm-navbar-size-1">
          <div className="site-menubar-footer">
            <a href="" className="fold-show" data-placement="top" data-toggle="tooltip" data-original-title="Settings">
              <span className="icon wb-settings" aria-hidden="true" />
            </a>
            <a href="" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
              <span className="icon wb-eye-close" aria-hidden="true" />
            </a>
            <a href="" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
              <span className="icon wb-power" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mm-panels scrollable scrollable-inverse scrollable-vertical is-disabled">
          <div className="mm-panel mm-hasnavbar mm-opened mm-current scrollable-container" id="mm-0">
            <div className="mm-navbar scrollable-content"><a className="mm-title">Menu</a></div>
            <ul className="site-menu mm-listview scrollable-content">
              <li className={pathname === '/home' ? classActive : classNormal}>
                <Link to="/home">
                  <i className="site-menu-icon wb-dashboard" aria-hidden="true" />
                  <span className="site-menu-title">Dashboard</span>
                  <span className="site-menu-arrow" />
                </Link>
              </li>
              <li className={pathname === '/series' ? classActive : classNormal}>
                <Link to="/series">
                  <i className="site-menu-icon wb-layout" aria-hidden="true" />
                  <span className="site-menu-title">Series</span>
                  <span className="site-menu-arrow" />
                </Link>
              </li>
              <li className={pathname === '/groups' ? classActiveSub : classNormalSub}>
                <Link to="/groups">
                  <i className="site-menu-icon wb-layout" aria-hidden="true" />
                  <span className="site-menu-title">Groups</span>
                  <span className="site-menu-arrow" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="scrollable-bar scrollable-bar-vertical scrollable-bar-hide is-disabled" draggable="false">
            <div className="scrollable-bar-handle" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    router: state.router
  };
}

export default connect(mapStateToProps)(SiteMenuBar);