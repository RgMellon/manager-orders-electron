import {Alert} from 'react-native';
import produce from 'immer';

const INITIAL_STATE = {
  lastAppointment: null,
  appointments: null,
  currentDate: null,
  loadAppointment: false,
  countAppointmens: {
    countFinished: 0,
    countPending: 0,
    countCanceled: 0,
  },
};

export default function appointment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@appointment/APPOINTMENT_SUCCESS': {
        draft.lastAppointment = action.payload.appoitnment;

        break;
      }

      case '@appointment/APPOINTMENTS_BY_DATE_SUCCESS': {
        draft.appointments = action.payload.appointments;
        draft.loadAppointment = false;
        draft.countAppointmens = action.payload.countAppointments;
        break;
      }

      case '@appointment/APPOINTMENTS_BY_DATE_REQUEST': {
        draft.currentDate = action.payload.date;
        draft.loadAppointment = true;

        break;
      }

      // eslint-disable-next-line no-fallthrough
      default:
    }
  });
}
