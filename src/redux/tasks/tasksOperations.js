import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTaskAllApi,
  deleteTaskApi,
  updateTaskByIdApi,
  updateTaskStatusApi,
  addTaskApi,
} from 'services/tasksService';

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
      const data = await deleteTaskApi(credentials);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTaskThunk = createAsyncThunk(
  'task/update',
  async ({ id, dataTask }, thunkAPI) => {
    try {
      return await updateTaskByIdApi(id, dataTask);
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

// export const addTask = createAsyncThunk(
//   'task/addTask',
//   async (tasksData, thunkAPI) => {
//     try {
//       const response = await fetch('/task',
//       {
//         // method: 'POST',
//         // body: JSON.stringify(tasksData),
//         // headers: {
//         //   'Content-Type': 'application/json',
//         // },
//       });
//       const data = await response.json();
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

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
