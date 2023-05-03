import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTaskAllApi, deleteTaskApi, updateTaskStatusApi, addTaskApi } from '../../services/tasksService';

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
      console.log('deleteTaskApi');
      const data = await deleteTaskApi(credentials);      
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskStatusThunk = createAsyncThunk(
  'task/updateStatus',
  async (credentials, thunkAPI) => {
    try {
      //console.log('updateStatus');
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