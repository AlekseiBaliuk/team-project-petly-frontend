import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
