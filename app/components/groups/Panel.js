import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Panel extends PureComponent {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: ''
  };

  render() {
    const { title } = this.props;
    return (
      <div className="group-panel">
        <div className="header">
          Filter: <span className="title">{title}</span>
          <div className="button-container">
            <i className="button icon-refresh" />
            <i className="button icon-settings" />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {};
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
