import { privateAPI, publicAPI } from '../shared/http';

export const registerUserApi = async user => {
  const { data } = await publicAPI.post('api/auth/register', user);
  return data;
};

export const loginUserApi = async user => {
  const { data } = await publicAPI.post('api/auth/login', user);
  return data;
};

export const logoutApi = async () => {
  const { data } = await privateAPI.post('api/auth/logout');
  return data;
};

export const updateDataUserApi = async dataUser => {
  const { data } = await privateAPI.put('api/auth', dataUser);
  return data;
};

export const getCurrentUserApi = async () => {
  const { data } = await privateAPI.get('api/auth/current');
  return data;
};

export const updateAvatarApi = async avatar => {
  const { data } = await privateAPI.patch('api/auth/avatar', avatar);

  return data;
};
