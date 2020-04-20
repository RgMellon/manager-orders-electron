import axios from 'axios';

const api = axios.create({
  baseURL: 'https://marketing.uaufi.com',
});

export default api;
