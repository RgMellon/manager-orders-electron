import produce from 'immer';

const INITIAL_STATE = {
  notifications: [],
};

export default function notification(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notification/REQUEST_NOTIFICATION_SUCCESS': {
        draft.notifications = action.payload.notifications;

        break;
      }

      // eslint-disable-next-line no-fallthrough
      default:
    }
  });
}
