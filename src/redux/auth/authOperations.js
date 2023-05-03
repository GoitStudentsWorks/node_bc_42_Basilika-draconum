import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUserApi,
  loginUserApi,
  registerUserApi,
  updateAvatarApi,
  updateDataUserApi,
} from 'services/authService';

import { setAuthHeader } from 'shared/http';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await registerUserApi(credentials);
      return data;
    } catch (error) {
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
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const savedToken = state.auth.token; // accessToken?
    // if (!savedToken) {
    //   return thunkAPI.rejectWithValue();
    // }
    // setAuthHeader(savedToken);
    try {
      const data = await getCurrentUserApi();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
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
