import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://team-project-petly-backend.onrender.com/api';

// GET @ /user
export const getUserInfo = createAsyncThunk(
  'users/getUserData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateUserData = createAsyncThunk(
  'user/updateUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/auth/changeData', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUserPets = createAsyncThunk(
  'user/getUserPets',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/pets');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addUserPet = createAsyncThunk(
  'user/addUserPet',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/pets', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeUserPet = createAsyncThunk(
  'user/removeUserPet',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/pets/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateUserAvatar = createAsyncThunk(
  'user/updateUserAvatar',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/auth/changeData', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
