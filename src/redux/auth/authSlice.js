import { createSlice } from '@reduxjs/toolkit';
import { signup } from './authOperations';

const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(signup.pending, (state, { payload }) => {}),
});

export const authReducer = authSlice.reducer;

// example

// .addCase(signup.pending, (state, { payload }) => {
//         state.error = null;
//       })
// .addCase(signup.fulfilled, (state, { payload }) => {
//         state.error = null;
//       })
