import * as api from 'services/mockapi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const payloadCreator = fetchProc => async (arg, thunkApi) => {
  try {
    return await fetchProc(arg);
  } catch ({ message }) {
    return thunkApi.rejectWithValue(message);
  }
};

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  payloadCreator(api.fetchContacts)
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  payloadCreator(api.addContact)
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  payloadCreator(api.deleteContact)
);
