import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  loginThunk,
  registerThunk,
  updateUserInfoThunk,
} from './authOperations';

const initialState = {
  isLoading: false,
  isLogin: false,
  error: null,
  user: null,
  token: null,
  userData: {
    avatar: '',
    name: '',
    email: '',
    phone: '',
    birthday: '',
    skype: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;

        state.user = payload.user;

        state.isLogin = true;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // getCurrentUser
      .addCase(getCurrentUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLogin = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUserThunk.rejected, (state, { payload }) => {
        state.isLogin = false;
        state.isLoading = false;
        state.error = payload;
      })
      // updateUser
      .addCase(updateUserInfoThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, { payload }) => {
        state.userData = payload;
        state.isLoading = false;
      })
      .addCase(updateUserInfoThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const authReducer = authSlice.reducer;
