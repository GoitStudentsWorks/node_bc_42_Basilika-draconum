import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './tasksOperations';

const initialState = {
  tasks: null,
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = payload;
      })
      .addCase(fetchTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
