import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  deleteTaskThunk,
  updateTaskStatusThunk,
  addTask,
} from './tasksOperations';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
  isModalEditShown: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    isModalEditShownAction: (state, { payload }) => {
      state.isModalEditShown = payload;
    },
  },
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
      })
      .addCase(deleteTaskThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTaskThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;        
        state.tasks = state.tasks.filter(task => task._id !== payload);
      })
      .addCase(deleteTaskThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(updateTaskStatusThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateTaskStatusThunk.fulfilled, (state, { payload }) => {
        if (payload === undefined || payload === null) {
          console.log('UpdateTaskStatusThunk payload not object!');
          return;
        }
        const { _id, status } = payload;
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.findIndex(task => task._id === _id);
        const task = state.tasks[index];
        task.status = status;
      })
      .addCase(updateTaskStatusThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tasks = [...state.tasks, payload];
        state.error = null;
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { isModalEditShownAction } = tasksSlice.actions;
