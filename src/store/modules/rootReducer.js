import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import orders from './orders/reducer';
import online from './online/reducer';
// import notification from './notification/reducer';
// import appointment from './appointment/reducer';

export default combineReducers({
  auth,
  user,
  orders,
  online,
});
