import { createSlice } from '@reduxjs/toolkit';
import { currentThunk, loginThunk, registerThunk } from './authOperations';

const initialState = {
  isLoading: false,
  isLogin: false,
  error: null,
  user: null,
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
      .addCase(currentThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.user = payload.user;
        state.isLogin = true;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  },
});
export const authReducer = authSlice.reducer;
