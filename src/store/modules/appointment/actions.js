export function getLastAppointment(petshopId) {
  return {
    type: '@appointment/REQUEST_LAST_APPOINTMENT',
    payload: {petshopId},
  };
}

export function setNotificationSucces(appoitnment) {
  // Alert.alert('entro aqui');
  return {
    type: '@appointment/APPOINTMENT_SUCCESS',
    payload: {appoitnment},
  };
}

export function getAppointmentsByDate(petshopId, date, status) {
  return {
    type: '@appointment/APPOINTMENTS_BY_DATE_REQUEST',
    payload: {petshopId, date, status},
  };
}

export function setAppointmentsByDateSuccess(appointments, countAppointments) {
  return {
    type: '@appointment/APPOINTMENTS_BY_DATE_SUCCESS',
    payload: {appointments, countAppointments},
  };
}
