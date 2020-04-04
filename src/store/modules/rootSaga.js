import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';
// import petshop from './petshop/saga';
// import notification from './notification/saga';
// import appointment from './appointment/saga';

// petshop, notification, appointment

export default function* rootSaga() {
  return yield all([auth, user]);
}
