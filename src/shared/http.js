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

// export const setAuthHeader = {
//   set: token => {
//     privateAPI.defaults.headers.Authorization = `Bearer ${token}`;
//   },
//   unSet: () => {
//     privateAPI.defaults.headers.Authorization = '';
//   },
// };
  // axios.interceptors.request.use(config => {
  //   config.baseURL = privateAPI;
  //   config.headers.common['Authorization'] = 'Bearer ' + token;
  //   config.headers.post['Content-Type'] = 'application/json';
  //   return config;
  // });