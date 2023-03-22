import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://team-project-petly-backend.onrender.com/api';

// GET @ /user
export const getUserInfo = createAsyncThunk(
  'users/get',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/users`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// // PUT @ /userData
// export const updateUserData = createAsyncThunk(
//   'user/updateUserData',
//   async (user, thunkAPI) => {
//     // console.log('user data', user);
//     try {
//       const response = await axios.patch(`/user`, user);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const updateUserAvatar = createAsyncThunk(
//   'users/updateAvatar',
//   async (userAvatar, thunkAPI) => {
//     try {
//       const { data } = await axios.patch('/user/avatar', userAvatar);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
