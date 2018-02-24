// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import groups from './groups';
import series from './series';
import api from './api';
import orm from './orm';

const rootReducer = combineReducers({
  api,
  groups,
  series,
  router,
  orm,
});

export default rootReducer;
