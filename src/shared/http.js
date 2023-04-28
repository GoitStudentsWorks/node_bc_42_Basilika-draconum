//something
import axios from 'axios';

export const privateAPI = axios.create({
  baseURL: 'https://goose-track-rest-api.onrender.com/',
});

export const publicAPI = axios.create({
  baseURL: 'https://goose-track-rest-api.onrender.com/',
});

export const setAuthHeader = token => {
  privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  privateAPI.defaults.headers.common.Authorization = '';
};
