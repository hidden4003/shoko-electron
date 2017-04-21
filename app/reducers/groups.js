import { handleAction } from 'redux-actions';
import { GROUPS } from '../actions/groups';

const groups = handleAction(GROUPS,
  (state, action) => (action.error ? state : action.payload), []);


export default groups;
