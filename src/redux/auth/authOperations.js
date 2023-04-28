import { createAsyncThunk } from '@reduxjs/toolkit';
import {  loginUserApi, registerUserApi } from 'services/authService';
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

// export const currentThunk = createAsyncThunk(
//   'user/current',
//   async(_, thunkAPI)=>{
//     try {
//       const data = await currentService();
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// )


