import axios from 'axios';

export const privateAPI = axios.create({
  baseURL: 'http://localhost:4444/api/auth/',
});

export const publicAPI = axios.create({
  baseURL: 'http://localhost:4444/api/auth/',
});
