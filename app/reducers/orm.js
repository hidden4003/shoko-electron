import { forEach, map } from 'lodash';
import orm from '../orm/orm';
import Actions from '../actions/orm';

export default function ormReducer(dbState, action) {
  const session = orm.session(dbState);

  // Session-specific Models are available
  // as properties on the Session instance.
  const { Group, Series, GroupFilter } = session;

  switch (action.type) {
    case Actions.FETCH_FULL_GROUP_LIST:
      forEach(action.payload, (list) => {
        const group = list;
        const seriesIds = [];
        forEach(group.series, item => { Series.upsert(item); seriesIds.push(item.id); });
        group.series = seriesIds;
        Group.upsert(group);
      });
      break;
    case Actions.LOAD_GROUP_FILTERS_LIST:
      if (action.payload.filters) {
        forEach(action.payload.filters, (item) => {
          GroupFilter.upsert(Object.assign({}, item, {groups: item.groups.map(g => g.id)}));
        });
      } else {
        const item = action.payload;
        GroupFilter.upsert(Object.assign({}, item, {groups: item.groups.map(g => g.id)}));
      }
      break;
    default:
      break;
  }

  // the state property of Session always points to the current database.
  // Updates don't mutate the original state, so this reference is not
  // equal to `dbState` that was an argument to this reducer.
  return session.state;
}
