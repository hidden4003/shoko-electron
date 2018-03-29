import { createAction } from 'redux-actions';

const Actions = {
  FETCH_FULL_GROUP_LIST: 'ORM_FETCH_FULL_GROUP_LIST',
  LOAD_GROUP_FILTERS_LIST: 'ORM_LOAD_GROUP_FILTERS_LIST',
  LOAD_RECENT_FILES: 'ORM_LOAD_RECENT_FILES',
  LOAD_RECENT_SERIES: 'ORM_LOAD_RECENT_SERIES'
};

export default Actions;

const fetchFullGroupList = createAction(Actions.FETCH_FULL_GROUP_LIST);
const loadGroupFiltersList = createAction(Actions.LOAD_GROUP_FILTERS_LIST);
const loadRecentFiles = createAction(Actions.LOAD_RECENT_FILES);
const loadRecentSeries = createAction(Actions.LOAD_RECENT_SERIES);

export const creators = {
  fetchFullGroupList,
  loadGroupFiltersList,
  loadRecentFiles,
  loadRecentSeries
};
