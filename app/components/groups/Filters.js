import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { forEach } from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectors from '../../orm/selectors';
import Events from '../../events';


class Panel extends PureComponent {
  static propTypes = {
    filters: PropTypes.array,
    filter: PropTypes.number,
    getFilters: PropTypes.func.isRequired,
  };

  static defaultProps = {
    filters: [],
  };

  componentDidMount() {
    this.fetchFilters();
  }

  componentDidUpdate(prevProps) {
    const { filter } = this.props;
    if (prevProps.filter === filter) { return; }
    this.fetchFilters();
  }

  fetchFilters = () => {
    const { getFilters, filter } = this.props;
    getFilters(filter > 0 ? filter : undefined);
  };

  render() {
    const { filters } = this.props;
    return (
      <div className="group-filters-panel">
        {filters.map((filter) => {
          return <Link to={`/groups/filter/${filter.id}`} key={filter.id}>{filter.name} ({filter.size})</Link>
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFilters: (filter) => { dispatch({ type: Events.GET_GROUP_FILTERS, payload: filter }); },
  };
}

function mapStateToProps(state) {
  return {
    filters: selectors.allGroupFilters(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
