import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNotices,
  // addNotice,
  // getFavorite,
  // getMyNotices,
  // deleteNotice,
} from './noticesOperations';

const noticesInitialState = { items: [], isLoading: false, error: null };

const extraActions = [
  fetchNotices,
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
      .addMatcher(isAnyOf(...getActionsByType('pending')), onPendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), onRejectedReducer),
});

export const noticesReducer = noticesSlice.reducer;
