import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFriends = createAsyncThunk(
  'friends/getFriends',
  async (categoryName, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://team-project-petly-backend.onrender.com/api/friends',
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
