import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginService, registerService, token } from 'services/authService';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await registerService(credentials);
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
      const data = await loginService(credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentThunk = createAsyncThunk(
  'user/current',
  async
)

export const logoutThunk = createAsyncThunk('auth/logout');
