import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { getOrdersSuccess } from './actions';

import { toast } from 'react-toastify';

export function* getOrdersIncoming() {
  try {
    const response = yield call(api.get, '/api/ward/orders');

    const { orders } = response.data;

    yield put(getOrdersSuccess(orders));
  } catch (e) {
    toast.error('Ocorreu um erro ao recuperar pedidos');
  }
}

export default all([
  takeLatest('@orders/GET_ORDERS', getOrdersIncoming),
  // [takeLatest('@petshop/DETAIL_PETSHOP_SUCCESS', getDetail),
]);
