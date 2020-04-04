import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  loading: false,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      // @auth/SIGN_SUCCESS
      case '@auth/SIGN_SUCCESS': {
        const { user } = action.payload;
        draft.token = user.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
      }

      // eslint-disable-next-line no-fallthrough
      default:
    }
  });
}
