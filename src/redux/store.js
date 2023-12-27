import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './phoneBook/phoneBookSlice';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};
const persistPhoneConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedPhoneReducer = persistReducer(
  persistPhoneConfig,
  phoneBookReducer
);

const rootReducer = combineReducers({
  contacts: persistedPhoneReducer,
  auth: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
