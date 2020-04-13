export function setIsOnline(online) {
  return {
    type: '@online/SET_IS_ONLINE',
    payload: { isOnline: online },
  };
}
