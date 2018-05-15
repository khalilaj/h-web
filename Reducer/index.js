import { combineReducers } from 'redux'
import auth from './auth';
import tenant from './tenant';
import owner from './owner';
import transaction from './transaction';
import property from './property';
import unit from './unit';
import agreement from './agreement';
import message from './message';

let reducers = combineReducers({
  auth,
  tenant,
  owner,
  transaction,
  property,
  unit,
  agreement,
  message
})

export default reducers;
