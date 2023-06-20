import * as api from 'services/mockapi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const payloadCreator = fetchProc => async (arg, thunkApi) => {
  try {
    return await fetchProc(arg);
  } catch ({ message }) {
    return thunkApi.rejectWithValue(message);
  }
};

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  payloadCreator(api.fetchContacts)
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  payloadCreator(api.addContact)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  payloadCreator(api.deleteContact)
);
