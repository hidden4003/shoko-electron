import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';
import { forceCheck } from 'react-lazyload';

import selectors from '../../orm/selectors';
import '../Groups.global.css';
import Events from '../../events/index';
import Group from './Group';
import Panel from './Panel';
import Filters from './Filters';

class Groups extends Component {
  static propTypes = {
    groups: PropTypes.array,
    getGroups: PropTypes.func,
    filter: PropTypes.string,
    isGroup: PropTypes.bool,
    filterId: PropTypes.number,
  };

  static defaultProps = {
    filterId: 0,
  };

  componentDidMount() {
    const { getGroups, groups } = this.props;
    if (groups.length === 0) getGroups();
  }

  render() {
    const { groups, isGroup, filter, filterId } = this.props;

    return (
      <div className="page page-groups">
        <Filters filter={filterId} />
        <PerfectScrollbar onScrollY={forceCheck}>
          <Panel title={filter}>
            <div className="groups-container">
              {groups.map((group) => (<Group isGroup={isGroup} key={group.id} group={group} />))}
            </div>
          </Panel>
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
  let filterId;
  let group;
  try {
    groupId = ownProps.match.params.id;
  } catch (ex) {
    groupId = undefined;
  }
  try {
    filterId = parseInt(ownProps.match.params.filterId,10);
  } catch (ex) {
    filterId = undefined;
  }

  if (groupId) {
    group = selectors.groupById(groupId)(state);
  }
  let filteredGroups;
  let filter;
  if (filterId) {
    console.log('selectors.filterById', selectors.filterById(filterId)(state)/*.groups*/);
    filter = selectors.filterById(filterId)(state);
    filteredGroups = selectors.groupsByFilter(filterId)(state);
    // TODO: support filters inside a filter
    /*if (groups.length === 0) {
      const filters = selectors.filtersByParent(filterId)(state);
    }*/
  }

  return {
    groups: filteredGroups ? filteredGroups : (groupId ? selectors.seriesByGroup(groupId)(state) : selectors.allGroups(state)),
    isGroup: groupId === undefined,
    filter: filteredGroups ? filter.name : (groupId ? group.name : 'All groups'),
    filterId: filterId || 0,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
