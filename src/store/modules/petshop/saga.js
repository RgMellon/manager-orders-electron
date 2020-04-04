import {takeLatest, call, put, all} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

import {detailPetshopSuccess} from './actions';

export function* detailRequest() {
  try {
    const response = yield call(api.get, '/users/petshop');

    yield put(detailPetshopSuccess(response.data));
  } catch (e) {
    Alert.alert('Falha ao carregar loja', 'Problema temporario');
    // yield put(signFail());
  }
}

export default all([
  takeLatest('@petshop/DETAIL_PETSHOP_REQUEST', detailRequest),
  // [takeLatest('@petshop/DETAIL_PETSHOP_SUCCESS', getDetail),
]);
