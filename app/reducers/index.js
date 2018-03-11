import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import series from './series';
import api from './api';
import orm from './orm';
import ui from './ui';
import queue from './queue';

const rootReducer = combineReducers({
  api,
  series,
  router,
  orm,
  ui,
  queue
});

export default rootReducer;
