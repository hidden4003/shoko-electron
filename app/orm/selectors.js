// selectors.js
import { createSelector } from 'redux-orm';
import orm from './orm';

const ormSelector = state => state.orm;

export const groupsSelector = createSelector(
  orm,
  ormSelector,
  session => session.Group.all().toModelArray()
);

const seriesByGroupSelector = groupId => createSelector(
  orm,
  ormSelector,
  () => groupId,
  session => session.Group.withId(groupId).series.toRefArray()
);

export default {
  allGroups: groupsSelector,
  seriesByGroup: seriesByGroupSelector,
};

