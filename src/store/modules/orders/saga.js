import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { getOrdersSuccess, orderDetailSuccess } from './actions';

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

export function* getOrderDetail({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/api/ward/orders/${id}`);

    const { order, items } = response.data;

    const merge = { order, items };

    yield put(orderDetailSuccess(merge));
  } catch (e) {
    toast.error('Ocorreu um erro ao recuperar detalhe do pedido');
  }
}

export default all([
  takeLatest('@orders/GET_ORDERS', getOrdersIncoming),
  takeLatest('@orders/GET_ORDER_DETAIL', getOrderDetail),
]);
