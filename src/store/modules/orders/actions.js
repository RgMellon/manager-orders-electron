export function getOrders() {
  return {
    type: '@orders/GET_ORDERS',
    payload: '',
  };
}

export function getOrdersSuccess(orders) {
  return {
    type: '@orders/GET_ORDERS_SUCCESS',
    payload: { orders },
  };
}

export function orderDetail(id) {
  return {
    type: '@orders/GET_ORDER_DETAIL',
    payload: { id },
  };
}

export function orderDetailSuccess(order) {
  return {
    type: '@orders/GET_ORDER_DETAIL_SUCCESS',
    payload: { order },
  };
}
