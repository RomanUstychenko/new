import { configureStore  } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer, AuthState } from './auth/auth-slice';
import { mainCatalogReducer, } from './mainCatalog/mainCatalog-slice';
import { itemReducer } from './item/item-slice';
// import { secondaryCatalogReducer } from './secondaryCatalog/SecondaryCatalog-slice';
// Налаштування Redux store

const persistConfig: PersistConfig<AuthState> = {
    key: 'root',
    storage,
  whitelist: ['token'],
  };
  

  const persistedReducer = persistReducer<AuthState>(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Додаємо редюсер авторизації
    mainCatalog: mainCatalogReducer,
    item: itemReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware(),

});

export const persistor = persistStore(store);


// Якщо ви використовуєте типізацію для RootState та AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;