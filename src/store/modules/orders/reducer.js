import produce from 'immer';

const INITIAL_STATE = {
  orders: [],
  orderDetail: null,
};

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@orders/GET_ORDERS_SUCCESS': {
        draft.orders = action.payload.orders;
        break;
      }

      case '@orders/GET_ORDER_DETAIL_SUCCESS': {
        draft.orderDetail = action.payload.order;
        break;
      }

      // eslint-disable-next-line no-fallthrough
      default:
    }
  });
}
