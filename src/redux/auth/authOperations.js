import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://team-project-petly-backend.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    const { credentials, navigate } = data;
    try {
      const res = await axios.post('/auth/register', credentials);
      setAuthHeader(res.data.token);
      Notify.success(
        'Congratulations, your account has been successfully created.',
      );
      navigate('/user');
      return res.data;
    } catch (error) {
      const errorData = error.response.data;
      let errorMessage = '';
      if (errorData.name) {
        errorMessage = `Email already exists in database`;
      } else {
        errorMessage = errorData.message;
      }
      Notify.failure(errorMessage);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  const { credentials, navigate } = data;

  try {
    const res = await axios.post('/auth/login', credentials);
    setAuthHeader(res.data.token);
    Notify.success('Login Success!');
    navigate('/user');
    return res.data;
  } catch (error) {
    if (error.response) {
      Notify.failure(
        `Such user is not registered or incorrect username or password`,
      );
    } else if (error.request) {
      Notify.failure('Unknown error, please try again');
    } else {
      Notify.failure('Unknown error, please try again');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    Notify.failure(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      state.auth.isLoggedIn = false;
      state.auth.token = null;
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
