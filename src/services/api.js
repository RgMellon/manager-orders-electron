import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev2.uaufi.com',
});

export default api;
