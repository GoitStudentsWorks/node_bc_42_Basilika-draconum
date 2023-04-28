import axios from 'axios';

export const privateAPI = axios.create({
  baseURL: 'https://goose-track-rest-api.onrender.com/api/auth/',
});

export const publicAPI = axios.create({
  baseURL: 'https://goose-track-rest-api.onrender.com/api/auth/',
});
