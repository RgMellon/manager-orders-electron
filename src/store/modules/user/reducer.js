import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loadProfile: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_SUCCESS': {
        const userProfile = {
          name: action.payload.user.loja_nome,
          logo: action.payload.user.logo,
          id: action.payload.user.id,
          loja_id: action.payload.user.loja,
        };
        draft.profile = userProfile;
        break;
      }

      case '@user/UPDATE_PROFILE_REQUEST': {
        draft.loadProfile = true;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.loadProfile = false;
        draft.profile = action.payload.profile;

        break;
      }

      case '@user/UPDATE_PROFILE_FAILURE': {
        draft.loadProfile = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        // draft.profile = null;
        break;
      }

      default:
    }
  });
}
