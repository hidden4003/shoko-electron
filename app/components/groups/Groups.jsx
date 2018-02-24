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

class Groups extends Component {
  static propTypes = {
    groups: PropTypes.array,
    getGroups: PropTypes.func,
    filter: PropTypes.string,
    isGroup: PropTypes.bool,
  };

  componentDidMount() {
    const { getGroups, groups } = this.props;
    if (groups.length === 0) getGroups();
  }

  render() {
    const { groups, isGroup, filter } = this.props;

    return (
      <div className="page page-groups">
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
  let group;
  try {
    groupId = ownProps.match.params.id;
  } catch (ex) {
    groupId = undefined;
  }

  if (groupId) {
    group = selectors.groupById(groupId)(state);
    console.log(group);
  }

  return {
    groups: groupId ? selectors.seriesByGroup(groupId)(state) : selectors.allGroups(state),
    isGroup: groupId === undefined,
    filter: groupId ? group.name : 'All groups',
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
