import { createSlice } from '@reduxjs/toolkit';
import { signup } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(signup.pending, (state, { payload }) => {
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;

// example

// .addCase(signup.pending, (state, { payload }) => {
//         state.error = null;
//       })
// .addCase(signup.fulfilled, (state, { payload }) => {
//         state.error = null;
//       })
