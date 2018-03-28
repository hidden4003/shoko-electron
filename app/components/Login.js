// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Login.global.css';
import Events from '../events';
import { forEach } from 'lodash';

class Login extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    loginImage: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    image: PropTypes.string,
    api: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.loginImage();
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.login();
    }
  };

  render() {
    const { setValue, login, api, image, isFetching } = this.props;
    const { user, password, host } = api;

    return (
      <div className="page-content">
        {image !== '' && <img alt="" className="login-bg" src={image} />}
        <div className="page-login-main animation-slide-right animation-duration-1">
          <div className="app-info">
            <div className="font-size-24">SHOKO DESKTOP</div>
            Version 4.0.0.1
          </div>
          <h3 className="font-size-24">Welcome back</h3>
          <p>Please enter your login details below.</p>
          <form method="post" action="">
            <div className="form-group">
              <label className="sr-only" htmlFor="inputEmail">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={user}
                onChange={e => {
                  setValue('user', e.target.value);
                }}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="inputPassword">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={e => {
                  setValue('password', e.target.value);
                }}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="inputEmail">
                Server
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Server address"
                value={host}
                onChange={e => {
                  setValue('host', e.target.value);
                }}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <button
              disabled={isFetching}
              type="button"
              className="btn btn-primary btn-block"
              onClick={login}
            >
              {isFetching ? (
                <div className="loader loader-circle" />
              ) : (
                'Sign in'
              )}
            </button>
          </form>
          <footer className="page-copyright">
            <div className="panel panel-bordered panel-dark">
              <div className="panel-heading">
                <h3 className="panel-title">AUTO-LOGIN</h3>
              </div>
              <div className="panel-body">
                You can change the default login behavior by navigating to
                Settings &gt; User.
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setValue: (field, value) => {
      dispatch({ type: Events.API_SET_VALUE, payload: { field, value } });
    },
    login: () => {
      dispatch({ type: Events.LOGIN });
    },
    loginImage: () => {
      dispatch({ type: Events.LOGIN_IMAGE });
    }
  };
}

function mapStateToProps(state) {
  const { api, ui, queue } = state;
  let isFetching = false;
  forEach(queue.api, req => {
    if (req.status === 'Processing' || req.status === 'Pending') {
      isFetching = true;
    }
  });

  return {
    api,
    isFetching,
    image: ui.loginImage || ''
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
