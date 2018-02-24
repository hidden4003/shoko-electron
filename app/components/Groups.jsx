import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';
import { createSelector } from 'redux-orm';

import selectors from '../orm/selectors';
import './Groups.global.css';
import Events from '../events/index';
import Group from './Group';
import orm from '../orm/orm';

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
      <div className="page page-groups">
        <PerfectScrollbar onScrollY={forceCheck}>
          <div className="groups-container">
            {groups.map((group) => (<Group key={group.id} group={group} />))}
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGroups: () => { dispatch({ type: Events.GET_GROUPS }); },
  };
}

function mapStateToProps(state, ownProps) {
  let groupId;
  try {
    groupId = ownProps.match.params.id;
    console.log(selectors.seriesByGroup(groupId)(state));
  } catch (ex) {
    groupId = undefined;
  }

  return {
    groups: groupId ? selectors.seriesByGroup(groupId)(state) : selectors.allGroups(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
