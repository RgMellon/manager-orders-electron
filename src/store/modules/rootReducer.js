import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
// import petshop from './petshop/reducer';
// import notification from './notification/reducer';
// import appointment from './appointment/reducer';

export default combineReducers({
  auth,
  user,
  // petshop,
  // notification,
  // appointment,
});
