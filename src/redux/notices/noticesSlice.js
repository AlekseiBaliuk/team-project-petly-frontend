import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNotices,
  addFavNotice,
  removeFavNotice,
  // addNotice,
  // getFavorite,
  // getMyNotices,
  // deleteNotice,
} from './noticesOperations';

const noticesInitialState = {
  items: [],
  userFavorite: { userId: '', favorite: [] },
  isLoading: false,
  error: null,
};

const extraActions = [
  fetchNotices,
  addFavNotice,
  removeFavNotice,
  // addNotice,
  // getFavorite,
  // getMyNotices,
  // deleteNotice,
];
const getActionsByType = type => extraActions.map(action => action[type]);

const onFetchSuccessReducer = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
  state.error = null;
};

const onAddFavNoticeReducer = (state, action) => {
  state.isLoading = false;
  state.error = false;
  const newFavorite = state.userFavorite.favorite.includes(action.payload)
    ? state.favorite
    : [...state.userFavorite.favorite, action.payload];
  state.userFavorite.favorite = newFavorite;
};

const onRemoveFavNoticeReducer = (state, action) => {
  state.isLoading = false;
  state.error = false;
  const newFavorite = state.userFavorite.favorite.filter(
    item => item !== action.payload,
  );
  state.userFavorite.favorite = newFavorite;
};

const onPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};
const onRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState: noticesInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchNotices.fulfilled, onFetchSuccessReducer)
      .addCase(addFavNotice.fulfilled, onAddFavNoticeReducer)
      .addCase(removeFavNotice.fulfilled, onRemoveFavNoticeReducer)
      .addMatcher(isAnyOf(...getActionsByType('pending')), onPendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), onRejectedReducer),
});

export const noticesReducer = noticesSlice.reducer;
