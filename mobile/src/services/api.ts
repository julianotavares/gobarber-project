import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.orusbarber.com.br',
});

export default api;
