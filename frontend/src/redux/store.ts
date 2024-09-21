import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer, AuthState } from './auth/auth-slice';
// Налаштування Redux store

const persistConfig: PersistConfig<AuthState> = {
    key: 'root',
    storage,
  };
  

  const persistedReducer = persistReducer<AuthState>(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Додаємо редюсер авторизації
  },
});

export const persistor = persistStore(store);

// Якщо ви використовуєте типізацію для RootState та AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;