import {takeLatest, call, put, all} from 'redux-saga/effects';

import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {Alert} from 'react-native';

import api from '~/services/api';

import {setNotificationSucces, setAppointmentsByDateSuccess} from './actions';

export function* getLastAppointment({payload}) {
  const {petshopId} = payload;

  if (!petshopId) return;

  try {
    const response = yield call(api.get, `/appointments/${petshopId}`);

    const {appointment} = response.data;

    yield put(setNotificationSucces(appointment));
  } catch (e) {
    Alert.alert('Ops, algo de errado ocorreu appointment');
    // yield put(signFail());
  }
}

export function* getAppointmentsByDate({payload}) {
  const {petshopId, date, status} = payload;
  try {
    if (petshopId) {
      const response = yield call(api.get, `/dates/appointments/${petshopId}`, {
        params: {
          date,
          page: 1,
          status,
        },
      });

      const {
        appointments,
        countPending,
        countFinished,
        countCanceled,
      } = response.data;

      const newAppointments = appointments.map(item => ({
        ...item,
        formatedDate: format(parseISO(item.date), 'H:mm aa', {
          locale: pt,
        }),
      }));

      const countAppointments = {
        countCanceled,
        countFinished,
        countPending,
      };

      yield put(
        setAppointmentsByDateSuccess(newAppointments, countAppointments),
      );
    }
  } catch (e) {
    Alert.alert('Ops, algo de errado ocorreu appointmentsByDate');
  }
}

export default all([
  takeLatest('@appointment/REQUEST_LAST_APPOINTMENT', getLastAppointment),
  takeLatest(
    '@appointment/APPOINTMENTS_BY_DATE_REQUEST',
    getAppointmentsByDate,
  ),
]);
