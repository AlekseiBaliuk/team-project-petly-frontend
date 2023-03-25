import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { noticesReducer } from './notices/noticesSlice';
import { userReducer } from './user/userSlice';
import { petsReducer } from './pets/petsSlice';

const persistConfigUser = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistConfigCategory = {
  key: 'category',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigUser, authReducer),
    user: userReducer,
    notices: noticesReducer,
    pets: persistReducer(persistConfigCategory, petsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
