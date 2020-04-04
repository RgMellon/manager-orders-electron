export function getNotifications() {
  return {
    type: '@notification/REQUEST_NOTIFICATION',
    payload: '',
  };
}

export function getNotificationsSucces(notifications) {
  return {
    type: '@notification/REQUEST_NOTIFICATION_SUCCESS',
    payload: {notifications},
  };
}
