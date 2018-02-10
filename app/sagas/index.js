import { put, takeEvery, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Events from '../events';
import Api from './api';
import { groups } from '../actions/groups';
import { series } from '../actions/series';
import { api } from '../actions/api';

function* Login() {
  const data = yield select(state => {
    return ({
      user: state.api.user,
      pass: state.api.password,
      device: 'shoko-v2',
    });
  });

  const resultJson = yield call(Api.postLogin, '', data);
  if (resultJson.error) {
    alert(resultJson.message);
    return;
  }

  yield put(api({ key: resultJson.data.apikey }));
  yield put(push({ pathname: '/home' }));
}

function* apiSetValue(action) {
  const { payload } = action;

  yield put(api({ [payload.field]: payload.value }));
}

function* getGroups() {
  const apiKey = yield select(state => state.api.key);

  const resultJson = yield call(Api.getGroups, apiKey);
  if (resultJson.error) {
    alert(resultJson.message);
  } else {
    yield put(groups(resultJson.data));
  }
}

function* getSeries(action) {
  const apiKey = yield select(state => state.api.key);

  const resultJson = yield call(Api.getSeries, apiKey, action.payload);
  if (resultJson.error) {
    alert(resultJson.message);
  } else {
    yield put(series(resultJson.data));
  }
}

function* Exit() {
  window.close();
  yield null;
}

function* windowMaximize() {
  const { remote } = require('electron');
  const window = remote.BrowserWindow.getFocusedWindow();

  if (window.isMaximized()) { window.unmaximize(); } else { window.maximize(); }
  yield null;
}

function* windowMinimize() {
  const { remote } = require('electron');
  remote.BrowserWindow.getFocusedWindow().minimize();
  yield null;
}

export default function* rootSaga() {
  yield [
    takeEvery(Events.GET_GROUPS, getGroups),
    takeEvery(Events.GET_SERIES, getSeries),
    takeEvery(Events.LOGIN, Login),
    takeEvery(Events.API_SET_VALUE, apiSetValue),
    takeEvery(Events.EXIT, Exit),
    takeEvery(Events.WINDOW_MAXIMIZE, windowMaximize),
    takeEvery(Events.WINDOW_MINIMIZE, windowMinimize),
  ];
}
