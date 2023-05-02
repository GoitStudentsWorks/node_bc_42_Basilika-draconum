import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    setTasks: (_, { payload }) => {
      return payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
