import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTaskAllApi } from '../../services/tasksService';

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
