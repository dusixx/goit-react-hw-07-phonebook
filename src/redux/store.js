import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { contactsReducer as contacts, filterReducer as filter } from './';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const LS_KEY_CONTACTS = 'contacts';

const reducer = persistReducer(
  {
    storage,
    key: LS_KEY_CONTACTS,
    blacklist: ['filter'],
  },
  combineReducers({
    contacts,
    filter,
  })
);

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
