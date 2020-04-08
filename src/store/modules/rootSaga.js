import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';
import orders from './orders/saga';

export default function* rootSaga() {
  return yield all([auth, user, orders]);
}
