import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pedypet.com',
});

export default api;
