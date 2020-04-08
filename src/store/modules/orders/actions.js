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
