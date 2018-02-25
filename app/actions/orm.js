import { createAction } from 'redux-actions';

const Actions = {
  FETCH_FULL_GROUP_LIST: 'ORM_FETCH_FULL_GROUP_LIST',
  LOAD_GROUP_FILTERS_LIST: 'ORM_LOAD_GROUP_FILTERS_LIST',
};

export default Actions;

const fetchFullGroupList = createAction(Actions.FETCH_FULL_GROUP_LIST);
const loadGroupFiltersList = createAction(Actions.LOAD_GROUP_FILTERS_LIST);

export const creators = {
  fetchFullGroupList,
  loadGroupFiltersList,
};
