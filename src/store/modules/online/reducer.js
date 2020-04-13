import produce from 'immer';

const INITIAL_STATE = {
  isOnline: false,
};

export default function online(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@online/SET_IS_ONLINE': {
        draft.isOnline = action.payload.isOnline;
        break;
      }

      // eslint-disable-next-line no-fallthrough
      default:
    }
  });
}
