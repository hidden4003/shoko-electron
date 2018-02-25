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

const groupFiltersSelector = createSelector(
  orm,
  ormSelector,
  session => session.GroupFilter.all().toModelArray()
);

const getFilter = filterId => createSelector(
  orm,
  ormSelector,
  session => session.GroupFilter.withId(filterId).ref
);

const groupsByFilterSelector = filterId => createSelector(
  orm,
  ormSelector,
  session => session.GroupFilter.withId(filterId).groups.toRefArray()
);

const filtersByParentSelector = parent => createSelector(
  orm,
  ormSelector,
  session => session.GroupFilter.get({ parent }).filters.toRefArray()
);

export default {
  allGroups: groupsSelector,
  seriesByGroup: seriesByGroupSelector,
  groupById: groupByIdSelector,
  allGroupFilters: groupFiltersSelector,
  groupsByFilter: groupsByFilterSelector,
  filtersByParent: filtersByParentSelector,
  filterById: getFilter,
};

