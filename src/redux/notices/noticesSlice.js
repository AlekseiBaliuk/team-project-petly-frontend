import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addFavNotice,
  removeFavNotice,
  addNotice,
  getFavorites,
  getMyNotices,
  deleteUserPet,
  searchNotice,
} from './noticesOperations';

const noticesInitialState = {
  items: [],
  favorite: [],
  total: null,
  isLoading: false,
  error: null,
  activeCategory: 'sell',
  isAdded: false,
};

const extraActions = [
  fetchNotices,
  addFavNotice,
  removeFavNotice,
  addNotice,
  getFavorites,
  getMyNotices,
  deleteUserPet,
  searchNotice,
];
const getActionsByType = type => extraActions.map(action => action[type]);

const onFetchSuccessReducer = (state, action) => {
  state.items =
    Number(action.payload.page) === 1
      ? action.payload.notices
      : [...state.items, ...action.payload.notices];
  state.total = action.payload.total;
  state.isLoading = false;
  state.error = null;
};

const onSearchSuccessReducer = (state, action) => {
  state.items =
    Number(action.payload.page) === 1
      ? action.payload.notices
      : [...state.items, ...action.payload.notices];
  state.total = action.payload.total;
  state.isLoading = false;
  state.error = null;
};

const onFetchFavoritesSuccessReducer = (state, action) => {
  state.items =
    Number(action.payload.page) === 1
      ? action.payload.notices
      : [...state.items, ...action.payload.notices];
  state.isLoading = false;
  state.error = null;
  state.total = action.payload.total;
  state.activeCategory = 'sell';
};

const onAddFavNoticeReducer = (state, action) => {
  state.isLoading = false;
  state.error = false;
  const newFavorite = state.items.includes(action.payload)
    ? state.favorite
    : [...state.favorite, action.payload];
  state.favorite = newFavorite;
};

const onRemoveFavNoticeReducer = (state, action) => {
  state.isLoading = false;
  state.error = false;
  const newFavorite = state.items.filter(item => item !== action.payload);
  state.favorite = newFavorite;
};

const onDeleteUserPetReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const onFetchMyNoticesSuccessReducer = (state, action) => {
  state.items =
    Number(action.payload.page) === 1
      ? action.payload.notices
      : [...state.items, ...action.payload.notices];
  state.isLoading = false;
  state.error = null;
  state.total = action.payload.total;
};

const onPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
  state.isAdded = false;
};
const onRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isAdded = false;
};

const onAddNoticeReducer = (state, action) => {
  state.isAdded = true;
  state.isLoading = false;
  state.error = null;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.fulfilled, onFetchSuccessReducer)
      .addCase(getFavorites.fulfilled, onFetchFavoritesSuccessReducer)
      .addCase(addFavNotice.fulfilled, onAddFavNoticeReducer)
      .addCase(removeFavNotice.fulfilled, onRemoveFavNoticeReducer)
      .addCase(deleteUserPet.fulfilled, onDeleteUserPetReducer)
      .addCase(getMyNotices.fulfilled, onFetchMyNoticesSuccessReducer)
      .addCase(addNotice.fulfilled, onAddNoticeReducer)
      .addCase(searchNotice.fulfilled, onSearchSuccessReducer)
      .addMatcher(isAnyOf(...getActionsByType('pending')), onPendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), onRejectedReducer),
});

export const noticesReducer = noticesSlice.reducer;
