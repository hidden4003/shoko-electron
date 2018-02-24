import { forEach } from 'lodash';
import orm from '../orm/orm';
import Actions from '../actions/orm';

export default function ormReducer(dbState, action) {
  const session = orm.session(dbState);

  // Session-specific Models are available
  // as properties on the Session instance.
  const { Group, Series } = session;

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
    default:
      break;
  }

  // the state property of Session always points to the current database.
  // Updates don't mutate the original state, so this reference is not
  // equal to `dbState` that was an argument to this reducer.
  return session.state;
}
