import { privateAPI, publicAPI } from 'http/http';

export const token = {
  set: token => {
    privateAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateAPI.defaults.headers.common.Authorization = '';
  },
};

export const registerService = async credentials => {
  const { data } = await publicAPI.post('register', credentials);
  return data;
};

export const loginService = async credentials => {
  const { data } = await publicAPI.post('login', credentials);
  return data;
};

export const logoutService = async () => {
  const { data } = await privateAPI.post('logout');
  return data;
};
