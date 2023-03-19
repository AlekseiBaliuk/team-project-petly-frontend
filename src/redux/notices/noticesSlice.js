import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const noticesSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const noticesReducer = noticesSlice.reducer;
