import { createAction } from 'redux-actions';

const Actions = {
  FETCH_FULL_GROUP_LIST: 'ORM_FETCH_FULL_GROUP_LIST',
};

export default Actions;

const fetchFullGroupList = createAction(Actions.FETCH_FULL_GROUP_LIST);

export const creators = {
  fetchFullGroupList,
};
