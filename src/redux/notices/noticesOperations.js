import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
  'notices/category',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://team-project-petly-backend.onrender.com/api/notices/category/sell',
      );
      return response.data.notices;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addFavNotice = createAsyncThunk(
  '/notices/addFavNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://team-project-petly-backend.onrender.com/api/notices/favorites/${noticeId}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const removeFavNotice = createAsyncThunk(
  '/notices/removeFavNotice',
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://team-project-petly-backend.onrender.com/api/notices/favorites/${noticeId}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
