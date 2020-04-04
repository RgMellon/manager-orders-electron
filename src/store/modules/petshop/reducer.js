import produce from 'immer';

const INITIAL_STATE = {
  petshop: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@petshop/DETAIL_PETSHOP_SUCCESS': {
        draft.petshop = action.payload.petshop;

        break;
      }

      // eslint-disable-next-line no-fallthrough
      default:
    }
  });
}
