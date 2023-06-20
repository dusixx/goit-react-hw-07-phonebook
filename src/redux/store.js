import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer as contacts } from './contactsSlice';
import { filterReducer as filter } from './filterSlice';

export const store = configureStore({
  reducer: combineReducers({
    contacts,
    filter,
  }),
});
