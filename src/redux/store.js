import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer as contacts, filterReducer as filter } from './';

export const store = configureStore({
  reducer: combineReducers({
    contacts,
    filter,
  }),
});
