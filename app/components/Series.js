// @flow
import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';

import './Series.global.css';
import Events from '../events';
import SiteMenuBar from './SiteMenuBar';
import SiteNavbar from './SiteNavbar';
import calendarIcon from '../icons/16-Calender-Active.png';
import collectionIcon from '../icons/16-Collection-Active.png';
import starIcon from '../icons/16-My-Lists-Active.png';
import SeriesImage from './SeriesImage';

class Series extends Component {
  componentDidMount() {
    const { match, getSeries } = this.props;
    getSeries(match.params.id);
  }

  render() {
    const { series } = this.props;

    return (
      <div style={{ height: '100vh', position: 'relative' }}>
        <SiteNavbar />
        <SiteMenuBar />
        <div className="page page-series">
          <PerfectScrollbar>
            <div className="banner">
              <SeriesImage banner first art={series.art} />
            </div>
            <div className="series-title">
              <span className="title">{series.name}</span>
              <span className="type">{series.type}</span>
            </div>
            <div className="series-info">
              <img src={calendarIcon} alt="" />
              {/*<span>March 30 2014 - June 22 2017</span>*/}
              <span>{series.air}</span>
              <img src={collectionIcon} alt="" />
              {/*<span>54 Episodes (2 Specials)</span>*/}
              <span>{series.total_sizes && series.total_sizes.Episodes} Episodes {series.total_sizes && series.total_sizes.Specials && `(${series.total_sizes.Specials} Specials)`}</span>
              <img src={starIcon} alt="" />
              {/*<span>8.88 (12,343 votes)</span>*/}
              <span>{series.rating} ({series.votes} votes)</span>
            </div>
            <div className="poster">
              <SeriesImage poster first art={series.art} />
            </div>
            <div className="series-content">
              <div className="panel">
                <ol className="breadcrumb breadcrumb-arrow">
                  <li className="breadcrumb-item">Collection</li>
                  <li className="breadcrumb-item">Very Long Series</li>
                  <li className="breadcrumb-item active">Fairy Tail</li>
                  <li className="breadcrumb-item active">Fairy Tail (2014)</li>
                </ol>
                <ul className="nav nav-tabs nav-tabs-line">
                  <li className="nav-item"><a className="nav-link active">Series info</a></li>
                  <li className="nav-item"><a className="nav-link">Episodes</a></li>
                  <li className="nav-item"><a className="nav-link">Characters</a></li>
                  <li className="nav-item"><a className="nav-link">Images</a></li>
                  <li className="nav-item"><a className="nav-link">Related &amp; Similar</a></li>
                  <li className="nav-item"><a className="nav-link">Reviews</a></li>
                  <li className="nav-item"><a className="nav-link">Files</a></li>
                </ul>
              </div>
              <div className="panel panel-dark">
                <div className="panel-heading">
                  <h3 className="panel-title">Series synopsis</h3>
                </div>
                <div className="panel-body">
                  {series.summary}
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSeries: (id) => { dispatch({ type: Events.GET_SERIES, payload: id }); },
  };
}

function mapStateToProps(state) {
  const { api, series } = state;

  return {
    api,
    series,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Series);
