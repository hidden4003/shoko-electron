// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forEach } from 'lodash';
import pretty from 'prettysize';
import PropTypes from 'prop-types';
import './Dashboard.global.css';
import Events from '../../events';
import selectors from '../../orm/selectors';

class TabPanel extends Component {
  static propTypes = {
    files: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        size: PropTypes.string
      })
    ),
    getFileRecent: PropTypes.func.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  componentDidMount() {
    this.props.getFileRecent();
  }

  render() {
    const { files } = this.props;
    return (
      <div className="panel panel-dark dashboard-panel">
        <div className="panel-heading">
          <h3 className="panel-title">Latest items</h3>
          <h3 className="panel-title">Latest series</h3>
          <h3 className="panel-title">Action items</h3>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead />
            <tbody>
              {files &&
                files.map(file => {
                  return (
                    <tr>
                      <td>{file.name}</td>
                      <td>{file.size}</td>
                      <td>
                        <span
                          className={`badge ${
                            file.recognized ? 'badge-info' : 'badge-danger'
                          }`}
                        >
                          {file.recognized ? 'recognized' : 'unrecognized'}
                        </span>
                      </td>
                      <td>{file.updated}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    files: selectors.recentFiles(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFileRecent: () => {
      dispatch({ type: Events.GET_FILE_RECENT });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabPanel);
