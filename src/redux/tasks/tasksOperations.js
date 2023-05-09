import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTaskAllApi,
  deleteTaskApi,
  updateTaskByIdApi,
  updateTaskStatusApi,
  addTaskApi,
} from 'services/tasksService';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTaskAllApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTaskThunk = createAsyncThunk(
  'task/delete',
  async (credentials, thunkAPI) => {
    try {
      await deleteTaskApi(credentials);
      return credentials;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskThunk = createAsyncThunk(
  'task/update',
  async ({ id, dataTask }, thunkAPI) => {
    try {
      Loading.pulse({
        svgColor: 'orange',
      });
      const result = await updateTaskByIdApi(id, dataTask);
      Notify.success('The task has been successfully changed.');
      Loading.remove();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskStatusThunk = createAsyncThunk(
  'task/updateStatus',
  async (credentials, thunkAPI) => {
    try {
      const data = await updateTaskStatusApi(credentials);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'task/addTask',
  async (tasksData, thunkAPI) => {
    try {
      const data = await addTaskApi(tasksData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
