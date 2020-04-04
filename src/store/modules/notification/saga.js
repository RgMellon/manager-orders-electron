import {takeLatest, call, put, all} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

import {getNotificationsSucces} from './actions';

export function* notificationRequest() {
  try {
    const response = yield call(api.get, '/notifications');

    yield put(getNotificationsSucces(response.data));
  } catch (e) {
    Alert.alert('Ops, algo de errado ocorreu Notifications');
    // yield put(signFail());
  }
}

export default all([
  takeLatest('@notification/REQUEST_NOTIFICATION', notificationRequest),
  // [takeLatest('@petshop/DETAIL_PETSHOP_SUCCESS', getDetail),
]);
