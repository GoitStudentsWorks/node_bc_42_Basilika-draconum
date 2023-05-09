import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import {
  getCurrentUserApi,
  loginUserApi,
  registerUserApi,
  updateAvatarApi,
  updateDataUserApi,
  logoutApi,
} from 'services/authService';

import { clearAuthHeader, setAuthHeader } from 'shared/http';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      await registerUserApi({ name, email, password });
      const data = await loginUserApi({ email, password });
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 409)
        Notiflix.Notify.failure('Email is use');
      if (error.response.status === 400)
        Notiflix.Notify.failure('Invalid email');
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await loginUserApi(credentials);
      setAuthHeader(data.token);
      Notiflix.Notify.success('Аuthorization successful');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(
        'Please change your email or password and try again'
      );
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      if (!token) {
        return rejectWithValue('no token');
      }
      setAuthHeader(token);
      return await getCurrentUserApi();
    } catch (error) {
      Notiflix.Notify.failure(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  'auth/updateUser',
  async (user, thunkAPI) => {
    try {
      const data = await updateDataUserApi(user);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'auth/updateAvatar',
  async (avatar, thunkAPI) => {
    try {
      const data = await updateAvatarApi(avatar);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await logoutApi();
      clearAuthHeader();
      Notiflix.Notify.success('You have been logged out successfully');
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
