import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forEach } from 'lodash';

import '../Series.global.css';
import SeriesImage from "../SeriesImage";

class Series extends Component {
  render() {
    const { series } = this.props;
    const items = [];
    forEach(series.eps, (episode) => {
      items.push(
        <div className="episode">
          <SeriesImage poster first art={episode.art} />
          <div>
            <p className="title">{episode.name}</p>
            <p>Episode {episode.epnumber} | {episode.air} | xx Minutes | {episode.rating} ({episode.votes} votes)</p>
            <ul className="nav nav-tabs nav-tabs-line">
              <li className="nav-item"><a className="nav-link active">Description</a></li>
              <li className="nav-item"><a className="nav-link">File info</a></li>
              <li className="nav-item"><a className="nav-link">Hashes</a></li>
            </ul>
            <p>{episode.summary}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="series-episodes">
        <div className="panel panel-dark">
          <div className="panel-heading">
            <h3 className="panel-title">Episodes</h3>
          </div>
          <div className="panel-body">
            {items}
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { api, series } = state;

  return {
    api,
    series,
  };
}

export default connect(mapStateToProps)(Series);
