import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getUserInfo,
  updateUserData,
  getUserPets,
  addUserPet,
  removeUserPet,
  updateUserAvatar,
} from './userOperations';

const initialState = {
  user: {
    _id: '',
    name: '',
    email: '',
    phone: '',
    birthday: '',
    location: '',
    avatarUrl: '',
  },
  userPets: [],
  isLoading: false,
  error: null,
};

const extraActions = [
  getUserInfo,
  updateUserData,
  getUserPets,
  addUserPet,
  removeUserPet,
  updateUserAvatar,
];

const getActionsByType = type => extraActions.map(action => action[type]);

const onPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload.user;
        state.userPets = payload.userPets;
      })
      // .addCase(getUserPets.fulfilled, (state, { payload }) => {
      //   state.userPets = payload.userPets;
      // })
      .addCase(addUserPet.fulfilled, (state, { payload }) => {
        state.userPets.push(payload.newPet);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeUserPet.fulfilled, (state, { payload }) => {
        const index = state.userPets.findIndex(pet => pet._id === payload);

        state.userPets.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = {
          name: payload.user.name,
          email: payload.user.email,
          birthday: payload.user.birthday,
          phone: payload.user.phone,
          location: payload.user.location,
          // avatarURL: payload.user.avatarURL,
        };
      })
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
        state.user = {
          avatarURL: payload.user.avatarURL,
        };
      })
      .addMatcher(isAnyOf(...getActionsByType('pending')), onPendingReducer)
      .addMatcher(isAnyOf(...getActionsByType('rejected')), onRejectedReducer),
});
export const userReducer = userSlice.reducer;
