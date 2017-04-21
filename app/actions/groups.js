import { createAction } from 'redux-actions';

export const GROUPS = 'ACTION_GROUPS';
export const groups = createAction(GROUPS);

export default {
  groups,
};
