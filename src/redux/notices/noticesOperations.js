import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotices = createAsyncThunk(
  'notices/category',
  async (data, thunkAPI) => {
    try {
      const { activeCategory, page } = data;
      const response = await axios.get(
        `https://team-project-petly-backend.onrender.com/api/notices/category/${activeCategory}?page=${page}&limit=8`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const searchNotice = createAsyncThunk(
  'notices/search',
  async (data, thunkAPI) => {
    try {
      const { activeCategory, page, search } = data;
      const response = await axios.get(
        `https://team-project-petly-backend.onrender.com/api/notices/title/${activeCategory}/${search}?page=${page}&limit=8`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const searchFavorite = createAsyncThunk(
  'notices/user/favorites',
  async (data, thunkAPI) => {
    try {
      const { page, search } = data;
      const response = await axios.get(
        `https://team-project-petly-backend.onrender.com/api/notices/user/favorites/title/${search}?page=${page}&limit=8`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const searchMyPets = createAsyncThunk(
  'notices/user/favorites',
  async (data, thunkAPI) => {
    try {
      const { page, search } = data;
      const response = await axios.get(
        `https://team-project-petly-backend.onrender.com/api/notices/title/${search}?page=${page}&limit=8`,
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getFavorites = createAsyncThunk(
  'notices/user/favorites',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://team-project-petly-backend.onrender.com/api/notices/user/favorites?page=${page}&limit=8`,
      );
      return response.data;
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
      const response = await axios.delete(
        `https://team-project-petly-backend.onrender.com/api/notices/favorites/${noticeId}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteUserPet = createAsyncThunk(
  '/notices/deletePet',
  async (petId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://team-project-petly-backend.onrender.com/api/notices/${petId}`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addNotice = createAsyncThunk(
  '/notices/addNoticePet',
  async (modalData, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://team-project-petly-backend.onrender.com/api/notices',
        modalData,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getMyNotices = createAsyncThunk(
  'notices/myNotices',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://team-project-petly-backend.onrender.com/api/notices?page=${page}&limit=8`,
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
