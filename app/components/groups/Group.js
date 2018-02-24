import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Tooltip from 'react-tooltip';
import { forEach } from 'lodash';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SeriesImage from '../SeriesImage';
import AnidbDescription from '../AnidbDescription';

class Group extends PureComponent {
  static propTypes = {
    isGroup: PropTypes.bool,
    group: PropTypes.object,
    openSeries: PropTypes.func.isRequired,
    openGroup: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isGroup: true,
    group: {},
  };

  render() {
    const { group, openSeries, isGroup, openGroup } = this.props;
    const groupId = `group${group.id}`;

    let unwatched = 0;
    try {
      unwatched = group.local_sizes.Episodes - group.watched_sizes.Episodes;
    } catch (e) {}

    const tags = [];
    forEach(group.tags, (tag) => {
      // if (tags.length > 8) { return false; }
      tags.push(<span className="badge badge-pill">{tag}</span>);
    });

    return (
      <div className="group" data-tip data-for={groupId} data-delay-show="500" onClick={() => { isGroup ? openGroup(group.id) : openSeries(group.id); }}>
        <LazyLoad once overflow height={250}><SeriesImage poster first art={group.art} /></LazyLoad>
        {unwatched > 0 && <div className="unwatched">{unwatched}</div>}
        <div className="title">
          <div>
            <p>{group.name}</p>
          </div>
        </div>
        <Tooltip id={groupId} effect="solid" place="right">
          <div className="group-tooltip">
            <SeriesImage banner first art={group.art} />
            <div>
              <span><i className="icon icon-air" />{group.air}</span>
              <span><i className="icon icon-episodes" />{group.local_sizes && group.local_sizes.Episodes}</span>
              <span><i className="icon icon-rating" />{group.rating}</span>
            </div>
            <div className="tooltip-title">{group.name}</div>
            <div className="tooltip-description">
              <AnidbDescription text={group.summary} />
            </div>
            <div className="tooltip-tags">{tags}</div>
          </div>
        </Tooltip>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openSeries: (id) => {
      dispatch(push(`/series/${id}`));
    },
    openGroup: (id) => {
      dispatch(push(`/groups/${id}`));
    }
  };
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Group);
