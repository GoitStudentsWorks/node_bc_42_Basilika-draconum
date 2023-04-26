import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isLogin: false,
  error: null,
  userEmail: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  //   extraReducers: ({ addCase }) => {
  //     // signUp
  //     addCase(registerThunk.pending, (state, { payload }) => {
  //       state.isLoading = true;
  //     });
  //     addCase(registerThunk.fulfilled, (state, { payload }) => {
  //       state.error = null;
  //     });
  //     addCase(registerThunk.rejected, (state, { payload }) => {
  //       state.error = payload;
  //       state.isLoading = false;
  //     });
  //   },
});
export const authReducer = authSlice.reducer;
