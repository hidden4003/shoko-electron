// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import pretty from 'prettysize';
import PropTypes from 'prop-types';
import './Dashboard.global.css';
import Events from '../../events';
import selectors from '../../orm/selectors';
import { ReactComponent as SuccessIcon } from '../../icons/svg/successFilled.svg';
import { ReactComponent as WarningIcon } from '../../icons/svg/warningFilled.svg';
import { ReactComponent as PlayIcon } from '../../icons/svg/playFilled.svg';
import { ReactComponent as CollectionIcon } from '../../icons/svg/collection.svg';

class TabPanel extends Component {
  static propTypes = {
    files: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.string,
        id: PropTypes.string,
        filename: PropTypes.string,
        created: PropTypes.string,
        updated: PropTypes.string,
        recognized: PropTypes.bool,
        type: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    getFileRecent: PropTypes.func.isRequired,
    openExternal: PropTypes.func.isRequired,
  };

  static defaultProps = {
    files: [],
  };

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
    const { files, openExternal } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="panel panel-dark dashboard-panel">
        <div className="panel-heading">
          <h3 className={`panel-title ${activeTab === 1?'active':''}`}>Latest items</h3>
          <h3 className="panel-title">Latest series</h3>
          <h3 className="panel-title">Action items</h3>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead />
            <tbody>
              {files &&
                files.map(file => (
                  <tr>
                    <td className="name"><div>{file.filename}</div></td>
                    <td>{pretty(file.size)}</td>
                    <td>{file.recognized === true ? <SuccessIcon className="dashboard-icon icon-green" /> : <WarningIcon className="dashboard-icon icon-yellow" />}</td>
                    <td>{file.recognized === true && <PlayIcon onClick={() => { openExternal(file.url); }} className="dashboard-icon icon-blue" />}</td>
                    <td>{file.recognized === true && <CollectionIcon className="dashboard-icon icon-blue" />}</td>
                  </tr>
                  )
                )}
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
    },
    openExternal: (value) => {
      dispatch({ type: Events.OPEN_EXTERNAL, payload: value });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabPanel);
