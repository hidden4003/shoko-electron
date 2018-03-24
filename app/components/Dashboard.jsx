// @flow
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { forEach } from 'lodash';
import pretty from 'prettysize';
import PropTypes from 'prop-types';
import './Dashboard.global.css';
import Events from "../events";

class Dashboard extends Component {
  static propTypes = {
    fileCount: PropTypes.number,
    seriesCount: PropTypes.number,
    collectionSize: PropTypes.string,
    watchedFiles: PropTypes.number,
    watchedSeries: PropTypes.number,
    hoursWatched: PropTypes.number,
    files: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.string,
    })),
    getDashboard: PropTypes.func.isRequired,
  };

  static defaultProps = {
    fileCount: 0,
    seriesCount: 0,
    collectionSize: '--',
    watchedFiles: 0,
    watchedSeries: 0,
    hoursWatched: 0,
  };

  componentDidMount() {
    this.props.getDashboard();
  }

  render() {
    const { seriesCount, fileCount, files, collectionSize, watchedFiles, watchedSeries, hoursWatched } = this.props;
    return (
      <div className="page">
        <div className="page-content">
          <div className="row">
            <div className="col-md-12">
              <div className="example-wrap">
                <div className="example example-grid">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="panel panel-dark">
                        <div className="panel-heading">
                          <h3 className="panel-title">Collection stats</h3>
                        </div>
                        <div className="panel-body">
                          <table className="table">
                            <thead />
                            <tbody>
                              <tr>
                                <td>Action Items</td>
                                <td>0</td>
                              </tr>
                              <tr>
                                <td>Series</td>
                                <td>{seriesCount}</td>
                              </tr>
                              <tr>
                                <td>Files</td>
                                <td>{fileCount}</td>
                              </tr>
                              <tr>
                                <td>Collection Size</td>
                                <td>{collectionSize}</td>
                              </tr>
                              <tr>
                                <td>Hours Watched</td>
                                <td>{hoursWatched}</td>
                              </tr>
                              <tr>
                                <td>Episodes Watched</td>
                                <td>{watchedFiles}</td>
                              </tr>
                              <tr>
                                <td>Series Completed</td>
                                <td>{watchedSeries}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="panel panel-dark">
                        <div className="panel-heading">
                          <h3 className="panel-title">Latest files</h3>
                        </div>
                        <div className="panel-body">
                          <table className="table">
                            <thead />
                            <tbody>
                            {files && files.map((file) => {
                              return (
                                <tr>
                                  <td>{file.name}</td>
                                  <td>{file.size}</td>
                                  <td>
                                    <span className={`badge ${file.recognized ? 'badge-info' : 'badge-danger'}`}>{file.recognized ? 'recognized' : 'unrecognized'}</span>
                                  </td>
                                  <td>{file.updated}</td>
                                </tr>
                              );
                            })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { dashboard } = state;

  const files = [];

  forEach(dashboard.file, (file) => {
    files.push({
      name: file.filename,
      size: pretty(file.size, {one: true, places: 2}),
      recognized: file.recognized === true,
      updated: file.updated || '',
    });
  })

  return {
    fileCount: dashboard.file_count,
    seriesCount: dashboard.series_count,
    collectionSize: dashboard.collection_size,
    watchedFiles: dashboard.watched_files,
    watchedSeries: dashboard.watched_series,
    hoursWatched: dashboard.hours_watched,
    files,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDashboard: () => { dispatch({ type: Events.GET_DASHBOARD }); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
