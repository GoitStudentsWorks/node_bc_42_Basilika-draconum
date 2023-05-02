import { createSlice } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const dateSlice = createSlice({
  name: 'date',
  initialState: { currentDate: format(Date.now(), 'yyyy-MM-dd') },
  reducers: {
    setDate: (state, { payload }) => {
      state.currentDate = payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export const dateReducer = dateSlice.reducer;
