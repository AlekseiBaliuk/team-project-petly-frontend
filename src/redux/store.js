import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { noticesReducer } from './notices/noticesSlice';
import { userReducer } from './user/userSlice';
import { petsReducer } from './pets/petsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const persistConfig2 = {
  key: 'category',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    user: userReducer,
    notices: noticesReducer,
    pets: persistReducer(persistConfig2, petsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
