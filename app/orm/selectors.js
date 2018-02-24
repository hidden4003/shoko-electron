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
  session => session.Group.withId(groupId).series.toRefArray()
);

const groupByIdSelector = groupId => createSelector(
  orm,
  ormSelector,
  session => session.Group.withId(groupId).ref
);

export default {
  allGroups: groupsSelector,
  seriesByGroup: seriesByGroupSelector,
  groupById: groupByIdSelector,
};

