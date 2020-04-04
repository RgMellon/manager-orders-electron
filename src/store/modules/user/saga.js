import { put, call, all, takeLatest } from 'redux-saga/effects';

// import { ToastAndroid } from 'react-native';

import { updateProfileSuccess, updateProfileFailure } from './actions';

import api from '../../../services/api';

export function* updateProfileRequest({ payload }) {
  const { emailUser, nameUser, phone, password } = payload.data;

  const profile = Object.assign(
    { name: nameUser, email: emailUser },
    password ? { password } : {},
    phone ? { phone } : {}
  );

  try {
    const response = yield call(api.put, 'users', profile);

    // ToastAndroid.show('Perfil atualizado com sucesso', ToastAndroid.SHORT);

    yield put(updateProfileSuccess(response.data.user));
  } catch (error) {
    yield put(updateProfileFailure());
    // ToastAndroid.show(
    //   'Ocorreu um erro ao atualizar o perfil',
    //   ToastAndroid.SHORT,
    // );
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
