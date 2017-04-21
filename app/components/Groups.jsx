import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';

import './Groups.global.css';
import SiteMenuBar from './SiteMenuBar';
import SiteNavbar from './SiteNavbar';
import Events from '../events/index';
import Group from './Group';

class Groups extends Component {
  static propTypes = {
    groups: PropTypes.array,
    getGroups: PropTypes.func,
  };

  componentDidMount() {
    const { getGroups } = this.props;
    getGroups();
  }

  render() {
    const { groups } = this.props;

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <SiteNavbar />
        <SiteMenuBar />
        <div className="page page-groups">
          <PerfectScrollbar onScrollY={forceCheck}>
            <div className="groups-container">
              {groups.map((group) => (<Group group={group} />))}
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGroups: () => { dispatch({ type: Events.GET_GROUPS }); },
  };
}

function mapStateToProps(state) {
  const { groups } = state;

  return {
    groups,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
