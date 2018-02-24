import { put, takeEvery, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import Events from '../events';
import Api from './api';
import { series } from '../actions/series';
import { api } from '../actions/api';
import { creators as orm } from '../actions/orm';

function* Login() {
  const apiState = yield select(state => state.api);
  const data = {
    user: apiState.user,
    pass: apiState.password,
    device: 'shoko-v2',
  };

  const resultJson = yield call(Api.postLogin, apiState.host, data);
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
  const apiState = yield select(state => state.api);

  const resultJson = yield call(Api.getGroups, apiState);
  if (resultJson.error) {
    alert(resultJson.message);
  } else {
    yield put(orm.fetchFullGroupList(resultJson.data));
  }
}

function* getSeries(action) {
  const apiState = yield select(state => state.api);

  const resultJson = yield call(Api.getSeries, apiState, action.payload);
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
